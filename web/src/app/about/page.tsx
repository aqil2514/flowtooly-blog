import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-10 prose">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Tentang Blog Ini</h1>
        <p className="text-muted-foreground">
          Catatan belajar, pemikiran, dan pengalaman dari hal-hal yang dekat
          dengan kehidupan sehari-hari.
        </p>
      </header>

      <section className="space-y-4">
        <p>
          Blog ini dibuat sebagai <strong>catatan pribadi</strong> untuk
          mendokumentasikan proses belajar, memahami konsep, dan merangkum
          pemikiran yang sering muncul dari aktivitas sehari-hari—terutama yang
          berkaitan dengan usaha kecil, perhitungan sederhana, dan pengambilan
          keputusan praktis.
        </p>

        <p>
          Banyak tulisan di sini berangkat dari <strong>pengalaman nyata</strong>,
          observasi sederhana, serta pertanyaan-pertanyaan yang sering muncul
          ketika mencoba memahami suatu masalah secara lebih jernih.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Apa yang Dibahas di Blog Ini</h2>

        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Konsep dasar yang sering dianggap rumit, tapi sebenarnya bisa disederhanakan</li>
          <li>Contoh kasus kecil yang dekat dengan kehidupan sehari-hari</li>
          <li>Catatan pemikiran seputar usaha kecil, produktivitas, dan pencatatan</li>
          <li>Pembelajaran yang didapat dari proses mencoba dan memperbaiki</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tentang Tools & Alat Bantu</h2>

        <p>
          Dalam beberapa artikel, pembaca mungkin akan menemukan pembahasan
          tentang alat bantu atau tools yang digunakan untuk mempermudah
          perhitungan dan pencatatan.
        </p>

        <p>
          Salah satunya adalah <strong>Flowtooly</strong>, sebuah kumpulan tools
          online ringan yang dikembangkan berdasarkan kebutuhan nyata yang sering
          muncul dalam proses belajar dan praktik.
        </p>

        <p className="text-muted-foreground">
          Penyebutan Flowtooly di blog ini bersifat kontekstual—bukan sebagai
          fokus utama, melainkan sebagai salah satu opsi alat bantu yang relevan
          dengan topik yang sedang dibahas.
        </p>

        <Link
          href="https://flowtooly.com"
          target="_blank"
          className="inline-flex text-sm font-medium underline underline-offset-4"
        >
          Pelajari Flowtooly →
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Catatan Penutup</h2>

        <p className="text-muted-foreground">
          Blog ini tidak bertujuan untuk menjadi sumber kebenaran mutlak.
          Sebaliknya, ia menjadi ruang dokumentasi proses berpikir, belajar, dan
          memperbaiki pemahaman seiring waktu.
        </p>

        <p className="text-muted-foreground">
          Jika beberapa tulisan terasa sederhana, itu memang disengaja—agar bisa
          dibaca dengan santai dan dipahami tanpa beban.
        </p>
      </section>
    </main>
  );
}
