import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PanelTabel, Pilih, thCls, tdCls, KosongTabel, Lencana } from "@/components/Tabel";
import { useData } from "@/lib/db";

export const Route = createFileRoute("/mapel")({
  head: () => ({
    meta: [
      { title: "Mata Pelajaran — SMK Muhammadiyah 1 Paguyangan" },
      { name: "description", content: "Daftar mata pelajaran umum, kejuruan, dan muatan lokal beserta KKM." },
      { property: "og:title", content: "Mata Pelajaran — SMK Muhammadiyah 1 Paguyangan" },
      { property: "og:description", content: "Kelola mata pelajaran, kelompok, dan kriteria ketuntasan minimal." },
    ],
  }),
  component: DataMapel,
});

function DataMapel() {
  const { guru, mapel } = useData();
  const [cari, setCari] = React.useState("");
  const [kel, setKel] = React.useState("semua");

  const hasil = mapel.filter(
    (m) =>
      (kel === "semua" || m.kelompok === kel) &&
      (m.nama.toLowerCase().includes(cari.toLowerCase()) || m.kode.toLowerCase().includes(cari.toLowerCase())),
  );

  return (
    <AppLayout judul="Mata Pelajaran" deskripsi={`${mapel.length} mata pelajaran pada kurikulum berjalan`}>
      <PanelTabel
        cari={cari}
        onCari={setCari}
        placeholder="Cari mata pelajaran atau kode…"
        filter={
          <Pilih
            label="Filter kelompok"
            nilai={kel}
            onUbah={setKel}
            opsi={[
              { value: "semua", label: "Semua Kelompok" },
              { value: "Umum", label: "Umum" },
              { value: "Kejuruan", label: "Kejuruan" },
              { value: "Muatan Lokal", label: "Muatan Lokal" },
            ]}
          />
        }
      >
        <table className="w-full min-w-[680px]">
          <thead className="bg-secondary/60">
            <tr>
              <th className={thCls}>No</th>
              <th className={thCls}>Kode</th>
              <th className={thCls}>Nama Mata Pelajaran</th>
              <th className={thCls}>Kelompok</th>
              <th className={thCls}>KKM</th>
              <th className={thCls}>Guru Pengampu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {hasil.length === 0 && <KosongTabel pesan="Mata pelajaran tidak ditemukan." />}
            {hasil.map((m, i) => {
              const pengampu = guru.filter((g) => g.mapelId === m.id);
              return (
                <tr key={m.id} className="hover:bg-secondary/40">
                  <td className={`${tdCls} text-muted-foreground`}>{i + 1}</td>
                  <td className={`${tdCls} font-mono text-xs font-semibold`}>{m.kode}</td>
                  <td className={`${tdCls} whitespace-normal font-medium`}>{m.nama}</td>
                  <td className={tdCls}>
                    <Lencana jenis={m.kelompok === "Kejuruan" ? "sukses" : "netral"} anak={m.kelompok} />
                  </td>
                  <td className={tdCls}>{m.kkm}</td>
                  <td className={`${tdCls} whitespace-normal text-muted-foreground`}>
                    {pengampu.length ? pengampu.map((g) => g.nama).join(", ") : "Belum ditetapkan"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </PanelTabel>
    </AppLayout>
  );
}
