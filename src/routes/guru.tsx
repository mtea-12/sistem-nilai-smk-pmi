import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { PanelTabel, thCls, tdCls, KosongTabel, Lencana } from "@/components/Tabel";
import { guru, kelas, namaMapel } from "@/lib/data";

export const Route = createFileRoute("/guru")({
  head: () => ({
    meta: [
      { title: "Data Guru — SMK Muhammadiyah 1 Paguyangan" },
      { name: "description", content: "Daftar guru mata pelajaran beserta NIP, mapel yang diampu, dan perwalian kelas." },
      { property: "og:title", content: "Data Guru — SMK Muhammadiyah 1 Paguyangan" },
      { property: "og:description", content: "Kelola data guru dan penugasan mata pelajaran." },
    ],
  }),
  component: DataGuru,
});

function DataGuru() {
  const [cari, setCari] = React.useState("");
  const hasil = guru.filter(
    (g) => g.nama.toLowerCase().includes(cari.toLowerCase()) || g.nip.includes(cari),
  );

  return (
    <AppLayout judul="Data Guru" deskripsi={`${guru.length} guru terdaftar`}>
      <PanelTabel cari={cari} onCari={setCari} placeholder="Cari nama guru atau NIP…">
        <table className="w-full min-w-[760px]">
          <thead className="bg-secondary/60">
            <tr>
              <th className={thCls}>No</th>
              <th className={thCls}>NIP</th>
              <th className={thCls}>Nama Guru</th>
              <th className={thCls}>L/P</th>
              <th className={thCls}>Mata Pelajaran</th>
              <th className={thCls}>Wali Kelas</th>
              <th className={thCls}>Telepon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {hasil.length === 0 && <KosongTabel pesan="Data guru tidak ditemukan." />}
            {hasil.map((g, i) => {
              const wali = kelas.find((k) => k.waliId === g.id);
              return (
                <tr key={g.id} className="hover:bg-secondary/40">
                  <td className={`${tdCls} text-muted-foreground`}>{i + 1}</td>
                  <td className={`${tdCls} font-mono text-xs`}>{g.nip}</td>
                  <td className={`${tdCls} font-medium`}>{g.nama}</td>
                  <td className={tdCls}>{g.jk}</td>
                  <td className={`${tdCls} whitespace-normal`}>{namaMapel(g.mapelId)}</td>
                  <td className={tdCls}>
                    {wali ? <Lencana jenis="sukses" anak={wali.nama} /> : <span className="text-muted-foreground">-</span>}
                  </td>
                  <td className={`${tdCls} text-muted-foreground`}>{g.telepon}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </PanelTabel>
    </AppLayout>
  );
}
