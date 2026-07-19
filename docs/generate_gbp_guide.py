"""
Generates: Panduan Klaim & Optimasi Google Business Profile — Cellution Balakosa
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    PageBreak,
    KeepTogether,
)

NAVY = colors.HexColor("#0a0e1a")
ORANGE = colors.HexColor("#f84007")
ORANGE_LIGHT = colors.HexColor("#fff1ea")
GRAY = colors.HexColor("#454b5e")
GRAY_LIGHT = colors.HexColor("#f4f4f5")
BORDER = colors.HexColor("#e4e4e7")

styles = getSampleStyleSheet()

styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Helvetica-Bold", fontSize=28,
    leading=34, textColor=NAVY, spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="CoverSubtitle", fontName="Helvetica", fontSize=13,
    leading=18, textColor=GRAY, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="CoverMeta", fontName="Helvetica", fontSize=10,
    leading=14, textColor=colors.HexColor("#9297a8"),
))
styles.add(ParagraphStyle(
    name="H1", fontName="Helvetica-Bold", fontSize=17,
    leading=22, textColor=NAVY, spaceBefore=18, spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="H2", fontName="Helvetica-Bold", fontSize=12.5,
    leading=16, textColor=ORANGE, spaceBefore=10, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="Body", fontName="Helvetica", fontSize=10.3,
    leading=15.5, textColor=NAVY, spaceAfter=6, alignment=TA_LEFT,
))
styles.add(ParagraphStyle(
    name="BodySmall", fontName="Helvetica", fontSize=9.3,
    leading=13.5, textColor=GRAY, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="StepNum", fontName="Helvetica-Bold", fontSize=11,
    leading=14, textColor=colors.white, alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="StepTitle", fontName="Helvetica-Bold", fontSize=11.5,
    leading=15, textColor=NAVY, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="TipLabel", fontName="Helvetica-Bold", fontSize=9.3,
    leading=13, textColor=ORANGE,
))
styles.add(ParagraphStyle(
    name="ChecklistItem", fontName="Helvetica", fontSize=10,
    leading=15, textColor=NAVY, spaceAfter=3,
))
styles.add(ParagraphStyle(
    name="FooterText", fontName="Helvetica", fontSize=8,
    leading=11, textColor=colors.HexColor("#9297a8"),
))


def step_block(number, title, body_lines):
    """A numbered step: orange circle number + title + body paragraphs."""
    num_cell = Table(
        [[Paragraph(str(number), styles["StepNum"])]],
        colWidths=[9 * mm], rowHeights=[9 * mm],
    )
    num_cell.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ORANGE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
    ]))

    body_flow = [Paragraph(title, styles["StepTitle"])]
    for line in body_lines:
        body_flow.append(Paragraph(line, styles["Body"]))

    row = Table(
        [[num_cell, body_flow]],
        colWidths=[12 * mm, 158 * mm],
    )
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (0, 0), "TOP"),
        ("VALIGN", (1, 0), (1, 0), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return row


def tip_box(label, text):
    p = Table(
        [[Paragraph(f"<b>{label}</b> {text}", styles["BodySmall"])]],
        colWidths=[158 * mm],
    )
    p.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ORANGE_LIGHT),
        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#ffd9c2")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("ROUNDEDCORNERS", [8, 8, 8, 8]),
    ]))
    return p


def section_divider():
    return HRFlowable(width="100%", thickness=0.6, color=BORDER, spaceBefore=14, spaceAfter=14)


def checklist_table(items):
    rows = []
    for item in items:
        box = Table([[""]], colWidths=[4 * mm], rowHeights=[4 * mm])
        box.setStyle(TableStyle([
            ("BOX", (0, 0), (-1, -1), 1, GRAY),
        ]))
        rows.append([box, Paragraph(item, styles["ChecklistItem"])])
    t = Table(rows, colWidths=[8 * mm, 152 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    return t


def build():
    doc = SimpleDocTemplate(
        "/Users/nabhan/Dev/cellution-balakosa/docs/Panduan-Google-Business-Profile-Cellution.pdf",
        pagesize=A4,
        topMargin=22 * mm, bottomMargin=18 * mm,
        leftMargin=26 * mm, rightMargin=26 * mm,
        title="Panduan Klaim & Optimasi Google Business Profile — Cellution Balakosa",
        author="Cellution Balakosa",
    )

    story = []

    # ---------- Cover ----------
    story.append(Spacer(1, 30 * mm))
    mark = Table([[Paragraph("C", ParagraphStyle(
        name="Mark", fontName="Helvetica-Bold", fontSize=22,
        textColor=colors.white, alignment=TA_CENTER, leading=26))]],
        colWidths=[14 * mm], rowHeights=[14 * mm])
    mark.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ORANGE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("ROUNDEDCORNERS", [4, 4, 4, 4]),
    ]))
    story.append(mark)
    story.append(Spacer(1, 8))
    story.append(Paragraph("CELLUTION BALAKOSA", ParagraphStyle(
        name="Brand", fontName="Helvetica-Bold", fontSize=11, textColor=GRAY,
        spaceAfter=2,
    )))
    story.append(Spacer(1, 10))
    story.append(Paragraph("Panduan Klaim &amp; Optimasi", styles["CoverTitle"]))
    story.append(Paragraph("Google Business Profile", styles["CoverTitle"]))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "Langkah demi langkah supaya Cellution Balakosa muncul di Google Maps &amp; "
        "local pack saat orang mencari “servis hp sampit”.",
        styles["CoverSubtitle"]))
    story.append(Spacer(1, 30))
    story.append(HRFlowable(width="35%", thickness=1.5, color=ORANGE, spaceAfter=10))
    story.append(Paragraph("Disiapkan berdasarkan SEO Audit Cellution Balakosa — Juli 2026", styles["CoverMeta"]))
    story.append(PageBreak())

    # ---------- Kenapa penting ----------
    story.append(Paragraph("Kenapa Ini Penting", styles["H1"]))
    story.append(Paragraph(
        "Saat riset kompetitor untuk audit SEO, kami cek pencarian “servis hp sampit” di mesin pencari. "
        "Hasilnya: kompetitor seperti <b>Servis Handphone Sampit</b> dan <b>Bahricell</b> muncul lengkap dengan "
        "pin lokasi, jam buka, dan nomor telepon langsung di bagian atas hasil pencarian (disebut "
        "<i>local pack</i>) — sementara <b>Cellution tidak muncul sama sekali</b> di sana.",
        styles["Body"]))
    story.append(Paragraph(
        "Local pack ini posisinya di ATAS hasil pencarian organik biasa, dan untuk pencarian "
        "“di dekat saya” atau bernuansa lokasi, kebanyakan orang klik salah satu dari 3 hasil di "
        "local pack itu tanpa scroll lebih jauh. Website yang bagus (yang sudah kita bangun) tetap penting, "
        "tapi <b>Google Business Profile (GBP) yang lengkap adalah faktor #1</b> untuk menang di pencarian "
        "lokal seperti ini.",
        styles["Body"]))
    story.append(Spacer(1, 4))
    story.append(tip_box(
        "Kabar baik:",
        "Mengklaim dan melengkapi GBP itu <b>gratis</b> dan sepenuhnya dikontrol Cellution sendiri — "
        "tidak perlu developer atau biaya iklan untuk mulai bersaing di local pack."
    ))
    story.append(section_divider())

    # ---------- Langkah-langkah ----------
    story.append(Paragraph("Langkah-Langkah", styles["H1"]))

    story.append(step_block(1, "Cek apakah profil sudah pernah dibuat", [
        "Sebelum membuat baru, cek dulu di <b>google.com/maps</b> — cari “Toko Servis HP Cellution” "
        "atau “Cellution Balakosa Sampit”. Kadang profil bisnis sudah otomatis "
        "terbentuk dari data pihak ketiga meski belum pernah diklaim pemiliknya.",
        "Kalau profil sudah muncul: lanjut ke Langkah 3 (klaim kepemilikan). Kalau belum ada sama sekali: "
        "lanjut ke Langkah 2 (buat baru).",
    ]))

    story.append(step_block(2, "Buat profil bisnis baru (jika belum ada)", [
        "Buka <b>business.google.com</b> menggunakan akun Google yang akan jadi pengelola utama "
        "(sebaiknya akun yang akan terus dipegang pemilik toko, bukan akun pribadi karyawan).",
        "Klik “Kelola sekarang” lalu masukkan nama bisnis: <b>Cellution Balakosa</b>.",
        "Pilih kategori bisnis utama: <b>“Mobile Phone Repair Shop”</b> (Toko Reparasi Ponsel). "
        "Kategori ini menentukan kapan Google menampilkan bisnis untuk pencarian seperti “servis hp”.",
        "Tambahkan kategori sekunder jika relevan, misalnya “Electronics Repair Shop” atau "
        "“Phone Accessory Store” bila juga menjual aksesori/sparepart.",
    ]))

    story.append(step_block(3, "Isi lokasi dengan akurat", [
        "Masukkan alamat lengkap toko di Sampit, Kotawaringin Timur. Pastikan pin di peta "
        "diletakkan TEPAT di lokasi fisik toko, bukan perkiraan — pin yang meleset bikin pelanggan "
        "salah arah dan Google menurunkan kepercayaan pada profil.",
        "Centang “Yes, I deliver goods and services to my customers at their location” hanya jika "
        "memang menyediakan layanan panggilan/antar-jemput.",
    ]))
    story.append(tip_box(
        "Penting:",
        "Koordinat GPS yang sudah dipakai di peta website (lat -2.5439739, long 112.9572561) bisa "
        "dipakai sebagai referensi untuk memastikan pin GBP ada di titik yang sama persis."
    ))

    story.append(step_block(4, "Verifikasi kepemilikan bisnis", [
        "Google akan minta verifikasi untuk membuktikan bisnis ini benar-benar ada dan dikelola oleh Anda. "
        "Metode yang paling umum tersedia untuk bisnis fisik di Indonesia:",
        "• <b>Video verifikasi</b> — merekam video singkat di lokasi toko sesuai instruksi Google "
        "(biasanya paling cepat, bisa langsung disetujui dalam beberapa hari).",
        "• <b>Kartu pos (mail)</b> — Google mengirim kode PIN ke alamat toko lewat pos, "
        "prosesnya 5-14 hari.",
        "• <b>Telepon/SMS</b> — jika tersedia untuk kategori bisnis ini, cara tercepat.",
        "Pilih metode yang tersedia saat proses berlangsung; Google akan menampilkan opsi yang valid "
        "untuk lokasi dan kategori bisnis Anda.",
    ]))

    story.append(step_block(5, "Lengkapi jam operasional", [
        "Samakan persis dengan yang sudah ada di website: Senin–Sabtu 09.00–21.00, "
        "Minggu 10.00–18.00.",
        "Aktifkan fitur “Jam khusus” untuk hari libur nasional supaya pelanggan tidak datang "
        "saat tutup — ini juga jadi sinyal profil aktif dan terawat ke Google.",
    ]))

    story.append(step_block(6, "Tambahkan nomor telepon, WhatsApp, dan website", [
        "Nomor telepon: +62 896-3016-2928 (samakan dengan yang di website dan JSON-LD schema).",
        "Tambahkan link website di kolom “Website” begitu domain sudah live.",
        "Jika tersedia di form GBP, tambahkan juga link WhatsApp Business sebagai kanal booking langsung.",
    ]))

    story.append(step_block(7, "Upload foto berkualitas", [
        "Logo: pakai file logo resmi (format persegi, latar bersih).",
        "Foto sampul (cover): pilih 1 foto yang paling representatif — bisa pakai gambar hero-1 yang "
        "sudah ada di website (foto tangan memegang HP hasil servis).",
        "Foto interior/eksterior toko: minimal 3-5 foto asli toko, papan nama, area tunggu pelanggan.",
        "Foto before/after hasil servis: ini yang paling efektif untuk toko servis HP — tunjukkan bukti "
        "nyata kualitas kerja (bisa reuse foto LCD pecah → sudah diganti yang ada di website).",
        "Upload foto baru secara berkala (idealnya tiap 1-2 minggu) — profil yang aktif upload foto "
        "cenderung diprioritaskan Google dibanding profil yang statis.",
    ]))
    story.append(tip_box(
        "Hindari:", "Foto stok generik atau foto hasil AI — Google dan calon pelanggan lebih percaya foto asli toko."
    ))

    story.append(step_block(8, "Daftarkan semua layanan", [
        "Di bagian “Services”, tambahkan satu per satu sesuai yang sudah ada di website: "
        "Ganti LCD &amp; Layar, Ganti Baterai, Perbaikan Software, Water Damage, Ganti Port Charging, "
        "Perbaikan Kamera.",
        "Kalau fitur harga tersedia dan sudah ada data harga pasti, isi juga kisaran harga per layanan — "
        "ini membedakan Cellution dari kompetitor yang tidak transparan soal harga.",
    ]))

    story.append(step_block(9, "Tulis deskripsi bisnis", [
        "Gunakan deskripsi ini sebagai draf awal (maks. 750 karakter), sesuaikan gaya bahasa sesuai selera:",
    ]))
    story.append(tip_box(
        "Draf deskripsi:",
        "“Cellution Balakosa adalah toko servis HP profesional di Sampit, Kalimantan Tengah. "
        "Kami melayani ganti LCD, ganti baterai, perbaikan software, water damage, ganti port charging, "
        "dan perbaikan kamera untuk semua merek smartphone. Teknisi berpengalaman, sparepart berkualitas, "
        "garansi resmi untuk setiap servis. Bisa ditunggu di tempat. Booking lewat WhatsApp untuk "
        "konsultasi gratis.”"
    ))

    story.append(step_block(10, "Aktif minta &amp; membalas ulasan", [
        "Setelah profil live, bagikan link ulasan langsung (“short name” atau link “Write a review” "
        "dari GBP) ke pelanggan lewat WhatsApp setelah servis selesai — waktu terbaik minta ulasan adalah "
        "saat pelanggan baru saja puas menerima HP-nya kembali.",
        "Balas SEMUA ulasan, baik positif maupun negatif, dalam 24-48 jam. Profil yang rajin membalas "
        "ulasan mendapat sinyal kepercayaan lebih tinggi dari Google.",
        "Target realistis: kumpulkan minimal 15-20 ulasan baru dalam 2-3 bulan pertama untuk mulai "
        "terlihat kompetitif dibanding profil kompetitor yang sudah lebih dulu punya banyak ulasan.",
    ]))

    story.append(step_block(11, "Posting update rutin (Google Posts)", [
        "Gunakan fitur “Add update/post” di GBP untuk membagikan promo, hasil servis terbaru, "
        "atau info jam operasional khusus hari libur — mirip seperti posting Instagram, tapi tayang "
        "langsung di profil Google.",
        "Idealnya posting 1-2 kali per bulan minimal — profil yang aktif posting mendapat prioritas "
        "lebih tinggi dibanding profil yang dibiarkan diam setelah verifikasi awal.",
    ]))

    story.append(PageBreak())

    # ---------- Checklist ----------
    story.append(Paragraph("Checklist Ringkas", styles["H1"]))
    story.append(Paragraph(
        "Cetak atau simpan halaman ini sebagai pengingat saat mengerjakan setiap langkah.",
        styles["BodySmall"]))
    story.append(Spacer(1, 8))
    story.append(checklist_table([
        "Cek apakah profil bisnis sudah ada di Google Maps",
        "Buat/klaim profil dengan nama “Cellution Balakosa”",
        "Pilih kategori: Mobile Phone Repair Shop",
        "Pin lokasi akurat, sesuai koordinat toko sebenarnya",
        "Verifikasi kepemilikan selesai (video/pos/telepon)",
        "Jam operasional terisi lengkap &amp; sesuai website",
        "Nomor telepon &amp; WhatsApp terisi",
        "Link website terpasang (setelah domain live)",
        "Logo &amp; minimal 5 foto asli toko diunggah",
        "Foto before/after hasil servis diunggah",
        "Semua 6 layanan didaftarkan di bagian Services",
        "Deskripsi bisnis terisi",
        "Mulai minta ulasan dari pelanggan pasca-servis",
        "Jadwal rutin: balas ulasan &amp; posting update tiap bulan",
    ]))

    story.append(Spacer(1, 14))
    story.append(Paragraph("Perawatan Rutin (Setelah Live)", styles["H1"]))
    tbl = Table(
        [
            [Paragraph("<b>Frekuensi</b>", styles["BodySmall"]), Paragraph("<b>Yang Dikerjakan</b>", styles["BodySmall"])],
            [Paragraph("Setiap hari", styles["BodySmall"]), Paragraph("Cek &amp; balas ulasan/pertanyaan baru", styles["BodySmall"])],
            [Paragraph("Tiap 1-2 minggu", styles["BodySmall"]), Paragraph("Upload foto baru (hasil servis terbaru)", styles["BodySmall"])],
            [Paragraph("Tiap bulan", styles["BodySmall"]), Paragraph("Posting update/promo lewat Google Posts", styles["BodySmall"])],
            [Paragraph("Tiap 3 bulan", styles["BodySmall"]), Paragraph("Cek Insights GBP: kata kunci pencarian, jumlah klik telepon/arah, bandingkan tren", styles["BodySmall"])],
        ],
        colWidths=[45 * mm, 113 * mm],
    )
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, GRAY_LIGHT]),
    ]))
    story.append(tbl)

    story.append(Spacer(1, 20))
    story.append(section_divider())
    story.append(Paragraph(
        "Disiapkan sebagai bagian dari SEO Audit Cellution Balakosa. Panduan ini merangkum langkah umum "
        "Google Business Profile per Juli 2026 — antarmuka Google dapat berubah sewaktu-waktu, "
        "ikuti instruksi yang tampil langsung di business.google.com jika ada perbedaan.",
        styles["FooterText"]))

    doc.build(story)


if __name__ == "__main__":
    build()
    print("PDF generated.")
