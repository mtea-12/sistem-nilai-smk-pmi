// Data contoh (demo) untuk Sistem Penilaian Akademik
// SMK Muhammadiyah 1 Paguyangan

export const SEKOLAH = {
  nama: "SMK Muhammadiyah 1 Paguyangan",
  alamat: "Jl. Raya Paguyangan No. 12, Brebes, Jawa Tengah",
  npsn: "20326118",
  kepsek: "Drs. H. Ahmad Fauzan, M.Pd.",
};

export type Peran = "admin" | "guru" | "wali" | "siswa";

export type TahunAjaran = {
  id: string;
  tahun: string;
  semester: "Ganjil" | "Genap";
  aktif: boolean;
};

export type Kelas = {
  id: string;
  nama: string;
  tingkat: "X" | "XI" | "XII";
  jurusan: string;
  waliId: string;
};

export type Mapel = {
  id: string;
  kode: string;
  nama: string;
  kelompok: "Umum" | "Kejuruan" | "Muatan Lokal";
  kkm: number;
};

export type Guru = {
  id: string;
  nip: string;
  nama: string;
  jk: "L" | "P";
  mapelId: string;
  telepon: string;
};

export type Siswa = {
  id: string;
  nis: string;
  nisn: string;
  nama: string;
  jk: "L" | "P";
  kelasId: string;
  wali: string;
};

export type Nilai = {
  siswaId: string;
  mapelId: string;
  tugas: number;
  pts: number;
  pas: number;
};

export const tahunAjaran: TahunAjaran[] = [
  { id: "ta1", tahun: "2025/2026", semester: "Ganjil", aktif: true },
  { id: "ta2", tahun: "2024/2025", semester: "Genap", aktif: false },
  { id: "ta3", tahun: "2024/2025", semester: "Ganjil", aktif: false },
];

export const mapel: Mapel[] = [
  { id: "m1", kode: "PAI", nama: "Pendidikan Agama Islam & Kemuhammadiyahan", kelompok: "Umum", kkm: 75 },
  { id: "m2", kode: "PKN", nama: "Pendidikan Pancasila", kelompok: "Umum", kkm: 75 },
  { id: "m3", kode: "BIN", nama: "Bahasa Indonesia", kelompok: "Umum", kkm: 75 },
  { id: "m4", kode: "MTK", nama: "Matematika", kelompok: "Umum", kkm: 72 },
  { id: "m5", kode: "BIG", nama: "Bahasa Inggris", kelompok: "Umum", kkm: 72 },
  { id: "m6", kode: "PJOK", nama: "Pendidikan Jasmani dan Olahraga", kelompok: "Umum", kkm: 75 },
  { id: "m7", kode: "PRO", nama: "Pemrograman Dasar", kelompok: "Kejuruan", kkm: 76 },
  { id: "m8", kode: "JAR", nama: "Komputer dan Jaringan Dasar", kelompok: "Kejuruan", kkm: 76 },
  { id: "m9", kode: "AKL", nama: "Akuntansi Dasar", kelompok: "Kejuruan", kkm: 76 },
  { id: "m10", kode: "BJW", nama: "Bahasa Jawa", kelompok: "Muatan Lokal", kkm: 70 },
];

export const guru: Guru[] = [
  { id: "g1", nip: "197805122005011008", nama: "Drs. Slamet Riyadi", jk: "L", mapelId: "m1", telepon: "0812-2211-0091" },
  { id: "g2", nip: "198203142008012011", nama: "Siti Aminah, S.Pd.", jk: "P", mapelId: "m3", telepon: "0813-9087-2210" },
  { id: "g3", nip: "198711202011011005", nama: "Budi Santoso, S.Kom.", jk: "L", mapelId: "m7", telepon: "0857-1122-9080" },
  { id: "g4", nip: "199001152014022003", nama: "Rina Widyastuti, S.Pd.", jk: "P", mapelId: "m4", telepon: "0852-3344-1177" },
  { id: "g5", nip: "198506282010011009", nama: "Agus Prasetyo, S.Pd.", jk: "L", mapelId: "m5", telepon: "0821-9911-3344" },
  { id: "g6", nip: "199209082016012004", nama: "Dewi Lestari, S.E.", jk: "P", mapelId: "m9", telepon: "0838-7766-2211" },
  { id: "g7", nip: "198409192009011007", nama: "Muhammad Iqbal, S.Kom.", jk: "L", mapelId: "m8", telepon: "0895-4433-8899" },
  { id: "g8", nip: "199505232019022001", nama: "Nur Hidayah, S.Pd.", jk: "P", mapelId: "m2", telepon: "0813-1200-6677" },
];

export const kelas: Kelas[] = [
  { id: "k1", nama: "X TKJ 1", tingkat: "X", jurusan: "Teknik Komputer dan Jaringan", waliId: "g3" },
  { id: "k2", nama: "XI TKJ 1", tingkat: "XI", jurusan: "Teknik Komputer dan Jaringan", waliId: "g7" },
  { id: "k3", nama: "XII TKJ 1", tingkat: "XII", jurusan: "Teknik Komputer dan Jaringan", waliId: "g5" },
  { id: "k4", nama: "X AKL 1", tingkat: "X", jurusan: "Akuntansi dan Keuangan Lembaga", waliId: "g6" },
  { id: "k5", nama: "XI AKL 1", tingkat: "XI", jurusan: "Akuntansi dan Keuangan Lembaga", waliId: "g2" },
];

const namaDepanL = [
  "Ahmad", "Rizky", "Bagas", "Dimas", "Fajar", "Ilham", "Yusuf", "Rafi", "Hanif", "Adit",
  "Wahyu", "Galih", "Arif", "Bayu", "Reza",
];
const namaDepanP = [
  "Siti", "Nurul", "Anisa", "Dwi", "Fitri", "Intan", "Laila", "Rahma", "Salsa", "Tiara",
  "Vina", "Zahra", "Ayu", "Mega", "Putri",
];
const namaBelakang = [
  "Saputra", "Ramadhani", "Nugroho", "Wijaya", "Maulana", "Setiawan", "Pratama", "Hidayat",
  "Kusuma", "Anggraeni", "Safitri", "Permata", "Utami", "Firmansyah", "Azzahra",
];
const namaAyah = ["Bpk. Sutrisno", "Bpk. Mulyadi", "Bpk. Hartono", "Bpk. Sukirman", "Bpk. Darmawan", "Bpk. Sugeng"];

function acak(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buatSiswa(): Siswa[] {
  const hasil: Siswa[] = [];
  let no = 0;
  kelas.forEach((k, ki) => {
    for (let i = 0; i < 12; i++) {
      no++;
      const s = ki * 100 + i + 7;
      const laki = acak(s) > 0.5;
      const depan = laki
        ? namaDepanL[Math.floor(acak(s + 1) * namaDepanL.length)]
        : namaDepanP[Math.floor(acak(s + 1) * namaDepanP.length)];
      const belakang = namaBelakang[Math.floor(acak(s + 2) * namaBelakang.length)];
      hasil.push({
        id: `s${no}`,
        nis: `${2025000 + no}`,
        nisn: `00${71000000 + no * 37}`,
        nama: `${depan} ${belakang}`,
        jk: laki ? "L" : "P",
        kelasId: k.id,
        wali: namaAyah[Math.floor(acak(s + 3) * namaAyah.length)] as string,
      });
    }
  });
  return hasil;
}

export const siswa: Siswa[] = buatSiswa();

export const mapelKelas: Record<string, string[]> = {
  k1: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m10"],
  k2: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m10"],
  k3: ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m10"],
  k4: ["m1", "m2", "m3", "m4", "m5", "m6", "m9", "m10"],
  k5: ["m1", "m2", "m3", "m4", "m5", "m6", "m9", "m10"],
};

function buatNilai(): Nilai[] {
  const hasil: Nilai[] = [];
  siswa.forEach((s, si) => {
    const daftar = mapelKelas[s.kelasId] ?? [];
    daftar.forEach((mid, mi) => {
      const base = 68 + Math.floor(acak(si * 31 + mi * 7 + 3) * 27);
      // Sebagian kecil nilai sengaja dikosongkan (0) agar status "belum lengkap" terlihat
      const kosong = acak(si * 13 + mi * 5) > 0.93;
      hasil.push({
        siswaId: s.id,
        mapelId: mid,
        tugas: Math.min(100, base + 4),
        pts: base,
        pas: kosong ? 0 : Math.min(100, base + 2),
      });
    });
  });
  return hasil;
}

export const nilaiAwal: Nilai[] = buatNilai();

export function nilaiAkhir(n: Nilai) {
  if (!n.tugas || !n.pts || !n.pas) return 0;
  return Math.round(n.tugas * 0.3 + n.pts * 0.3 + n.pas * 0.4);
}

export function predikat(nilai: number) {
  if (nilai >= 90) return { huruf: "A", label: "Sangat Baik" };
  if (nilai >= 80) return { huruf: "B", label: "Baik" };
  if (nilai >= 70) return { huruf: "C", label: "Cukup" };
  if (nilai > 0) return { huruf: "D", label: "Perlu Bimbingan" };
  return { huruf: "-", label: "Belum Dinilai" };
}

export const namaKelas = (id: string) => kelas.find((k) => k.id === id)?.nama ?? "-";
export const namaMapel = (id: string) => mapel.find((m) => m.id === id)?.nama ?? "-";
export const kodeMapel = (id: string) => mapel.find((m) => m.id === id)?.kode ?? "-";
export const namaGuru = (id: string) => guru.find((g) => g.id === id)?.nama ?? "-";
export const kkmMapel = (id: string) => mapel.find((m) => m.id === id)?.kkm ?? 75;
