import SikospelImage from "@/assets/project/kos.png";
import LarisPosImage from "@/assets/project/larispos.png";
import ServerMonitoringImage from "@/assets/project/ojt.png";
import PelangganKuImage from "@/assets/project/pelangganku.png";
import PuskesImage from "@/assets/project/puskes.png";
import LivestockImage from "@/assets/project/ternak.png";
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Manajemen Lisensi dan Build APK Otomatis (PelangganKu)",
    description:
      "Dashboard admin berbasis web untuk mengelola lisensi pelanggan, membangun APK Android secara otomatis, dan mendistribusikan aplikasi POS secara white-label. Sistem mendukung arsitektur multi-tenant dengan integrasi Firebase, Firestore, dan WhatsApp untuk mempermudah pengelolaan aplikasi di banyak toko.",

    image: PelangganKuImage,

    status: "Completed",

    technologies: [
      "Laravel 12",
      "Filament 3",
      "PHP",
      "MySQL",
      "Capacitor",
      "Fonnte API",
    ],

    features: [
      "Manajemen Pelanggan",
      "Manajemen Lisensi",
      "Multi-Tenant",
      "Build APK Otomatis",
      "Distribusi APK",
      "Integrasi Firebase",
      "Sinkronisasi Firestore",
      "Remote License Management",
      "Notifikasi WhatsApp",
      "Riwayat Build APK",
      "Role-Based Access Control",
      "Dashboard Admin",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },

  {
    id: 2,
    title: "Aplikasi Kasir Digital Berbasis Mobile (LarisPOS)",

    description:
      "Aplikasi Point of Sale (POS) berbasis mobile yang dikembangkan menggunakan Ionic React dan TypeScript untuk membantu digitalisasi operasional warung. Sistem mendukung transaksi real-time, pembayaran tunai dan QRIS, manajemen menu, laporan penjualan, serta pengelolaan pengguna dengan hak akses Owner dan Kasir melalui Firebase.",

    image: LarisPosImage,

    status: "Completed",

    technologies: [
      "Ionic 7",
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Capacitor",
    ],

    features: [
      "Autentikasi Pengguna",
      "Role-Based Access (Owner & Kasir)",
      "Dashboard Penjualan",
      "Manajemen Kategori",
      "Manajemen Menu",
      "Manajemen Pengguna Kasir",
      "Transaksi Penjualan",
      "Keranjang Belanja",
      "Pembayaran Tunai & QRIS",
      "Riwayat Transaksi",
      "Laporan Penjualan",
      "Export CSV",
      "Struk Digital (PNG)",
      "Sinkronisasi Data Real-Time",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },

  {
    id: 3,
    title:
      "Sistem Informasi Kos Berbasis Web dengan Fitur Pembayaran dan Peta Lokasi di Pelaihari",

    description:
      "Sistem informasi kos berbasis web yang memudahkan pencari kos dalam mencari, memesan, dan melakukan pembayaran secara online. Sistem dilengkapi dengan integrasi Midtrans sebagai payment gateway, peta lokasi kos, serta dashboard pengelolaan untuk pemilik kos dan admin.",

    image: SikospelImage,

    status: "Completed",

    technologies: [
      "Laravel 11",
      "Filament",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Midtrans",
    ],

    features: [
      "Autentikasi & Otorisasi Pengguna",
      "Pencarian dan Filter Kos",
      "Peta Lokasi Kos",
      "Manajemen Data Kos",
      "Manajemen Kamar",
      "Pemesanan Kos",
      "Pembayaran Digital (Midtrans)",
      "Manajemen Penyewaan",
      "Manajemen Tagihan",
      "Riwayat Transaksi",
      "Dashboard Pemilik Kos",
      "Dashboard Admin",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },

  {
    id: 4,

    title: "Sistem Monitoring Server",

    description:
      "Pengembangan fitur Manajemen Organisasi dan Peran Pengguna pada Sistem Monitoring Server PT. Inovasi Informatik Sinergi. Fitur mencakup pengelolaan organisasi, anggota, serta Role-Based Access Control (RBAC) menggunakan Laravel 11 dan Filament.",

    image: ServerMonitoringImage,

    status: "Completed",

    technologies: ["Laravel 11", "Filament", "PHP", "MySQL"],

    features: [
      "Organization Management",
      "Organization Members",
      "Role Management",
      "Permissions Management",
      "Role-Based Access Control (RBAC)",
      "Authentication",
      "User Management",
      "Admin Panel (Filament)",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },

  {
    id: 5,

    title: "Aplikasi Investasi Peternakan",

    description:
      "Aplikasi berbasis web yang memudahkan investor memantau perkembangan hewan ternak secara real-time, meningkatkan transparansi antara peternak dan investor, serta mendukung pengelolaan investasi yang lebih efisien.",

    image: LivestockImage,

    status: "Completed",

    technologies: ["CodeIgniter 4", "PHP", "Bootstrap", "MySQL"],

    features: [
      "Dashboard Investor",
      "Monitoring Ternak Real-Time",
      "Laporan Perkembangan Ternak",
      "Manajemen Data Ternak",
      "Manajemen Investor",
      "Manajemen Peternak",
      "Riwayat Monitoring",
      "Role-Based Authentication",
      "Dashboard Admin",
      "Notifikasi Perkembangan Ternak",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },

  {
    id: 6,

    title: "Sistem Informasi Puskesmas Panggung",

    description:
      "Sistem Informasi Puskesmas Panggung berbasis web untuk digitalisasi layanan informasi dan pengelolaan pengaduan masyarakat. Sistem memiliki tiga level pengguna (Free User, Admin, dan Kepala Puskesmas) guna meningkatkan transparansi dan efisiensi pelayanan.",

    image: PuskesImage,

    status: "Completed",

    technologies: ["CodeIgniter", "Bootstrap", "MySQL"],

    features: [
      "Landing Page",
      "Profil Puskesmas",
      "Informasi Layanan",
      "Artikel & Berita",
      "Galeri",
      "Pengaduan Online",
      "Validasi Pengaduan",
      "Cetak Dokumen",
      "Dashboard Admin",
      "Dashboard Kepala Puskesmas",
      "Role-Based Access Control",
    ],

    github: "https://github.com/galihnrallmn/",

    demo: "#",
  },
];
