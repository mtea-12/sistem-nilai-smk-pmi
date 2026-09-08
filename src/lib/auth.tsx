import * as React from "react";
import type { Peran } from "./data";

export type Akun = {
  id: string;
  nama: string;
  peran: Peran;
  username: string;
  sandi: string;
  /** id guru untuk peran guru/wali, id siswa untuk peran siswa */
  refId?: string;
  keterangan: string;
};

export const akunDemo: Akun[] = [
  {
    id: "u1",
    nama: "Administrator Sekolah",
    peran: "admin",
    username: "admin",
    sandi: "admin123",
    keterangan: "Kelola data master sekolah",
  },
  {
    id: "u2",
    nama: "Budi Santoso, S.Kom.",
    peran: "guru",
    username: "guru",
    sandi: "guru123",
    refId: "g3",
    keterangan: "Guru Pemrograman Dasar",
  },
  {
    id: "u3",
    nama: "Muhammad Iqbal, S.Kom.",
    peran: "wali",
    username: "wali",
    sandi: "wali123",
    refId: "g7",
    keterangan: "Wali Kelas XI TKJ 1",
  },
  {
    id: "u4",
    nama: "Siswa XI TKJ 1",
    peran: "siswa",
    username: "siswa",
    sandi: "siswa123",
    refId: "s13",
    keterangan: "Lihat nilai dan rapor",
  },
];

export const labelPeran: Record<Peran, string> = {
  admin: "Administrator",
  guru: "Guru Mata Pelajaran",
  wali: "Wali Kelas",
  siswa: "Siswa",
};

const KUNCI = "spa-smkmu-sesi";

type Ctx = {
  akun: Akun | null;
  siap: boolean;
  masuk: (username: string, sandi: string) => Akun | null;
  keluar: () => void;
};

const AuthContext = React.createContext<Ctx>({
  akun: null,
  siap: false,
  masuk: () => null,
  keluar: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [akun, setAkun] = React.useState<Akun | null>(null);
  const [siap, setSiap] = React.useState(false);

  React.useEffect(() => {
    try {
      const tersimpan = localStorage.getItem(KUNCI);
      if (tersimpan) setAkun(JSON.parse(tersimpan) as Akun);
    } catch {
      /* abaikan */
    }
    setSiap(true);
  }, []);

  const masuk = React.useCallback((username: string, sandi: string) => {
    const found =
      akunDemo.find((a) => a.username === username.trim().toLowerCase() && a.sandi === sandi) ?? null;
    if (found) {
      setAkun(found);
      localStorage.setItem(KUNCI, JSON.stringify(found));
    }
    return found;
  }, []);

  const keluar = React.useCallback(() => {
    setAkun(null);
    localStorage.removeItem(KUNCI);
  }, []);

  const value = React.useMemo(() => ({ akun, siap, masuk, keluar }), [akun, siap, masuk, keluar]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);
