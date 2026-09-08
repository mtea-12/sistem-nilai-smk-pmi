import * as React from "react";
import { nilaiAwal, type Nilai } from "./data";

type Ctx = {
  nilai: Nilai[];
  simpan: (baris: Nilai) => void;
};

const NilaiContext = React.createContext<Ctx>({ nilai: nilaiAwal, simpan: () => {} });

export function NilaiProvider({ children }: { children: React.ReactNode }) {
  const [nilai, setNilai] = React.useState<Nilai[]>(nilaiAwal);

  const simpan = React.useCallback((baris: Nilai) => {
    setNilai((lama) => {
      const idx = lama.findIndex((n) => n.siswaId === baris.siswaId && n.mapelId === baris.mapelId);
      if (idx === -1) return [...lama, baris];
      const salinan = [...lama];
      salinan[idx] = baris;
      return salinan;
    });
  }, []);

  const value = React.useMemo(() => ({ nilai, simpan }), [nilai, simpan]);
  return <NilaiContext.Provider value={value}>{children}</NilaiContext.Provider>;
}

export const useNilai = () => React.useContext(NilaiContext);
