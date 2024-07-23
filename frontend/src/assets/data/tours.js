import tourImg01 from "../images/tour-img011.jpg";
import tourImg02 from "../images/tour-img012.jpg";
import tourImg03 from "../images/tour-img013.jpg";
import tourImg04 from "../images/tour-img014.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img016.jpg";
import tourImg07 from "../images/tour-img017.jpg";
import tourImg08 from "../images/tour-img018.jpg";

const tours = [
  {
    id: "01",
    title: "Kebun Raya Bogor",
    city: "Bogor",
    distance: 870,
    address: 'Kebun raya di Kota Bogor, Jawa Barat',
    price: 15000 ,
    maxGroupSize: 10,
    desc: "Kebun Raya Bogor atau Kebun Botani Bogor adalah sebuah kebun botani besar yang terletak di Kota Bogor, Indonesia. Kebun ini dioperasikan oleh Badan Riset dan Inovasi Nasional. Kebun ini terletak di pusat kota Bogor dan bersebelahan dengan kompleks istana kepresidenan Istana Bogor.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Curug Cilember",
    city: "Bogor",
    distance: 500,
    address: 'Megamendung, Bogor, Jawa Barat, Indonesia',
    price: 25000,
    maxGroupSize: 8,
    desc: "Curug Cilember adalah kumpulan tujuh air terjun yang terletak di Megamendung (Puncak), Bogor. Tempat rekreasi ini memiliki area berkemah, area jalan setapak, dan lokasi untuk melihat perbukitan Gunung Pangrango yang indah.Salah satu air terjun terbaik yang wajib dikunjungi di Bogor adalah Curug Cilember. Lewat paket tur ini, kamu akan menikmati keindahan Cilember yang memiliki tujuh air terjun loh, enggak cuma satu saja. Namun, kamu perlu trekking untuk mengunjungi ketujuh curug tersebut. Di sini, kamu enggak hanya bermain air saja, tetapi juga sekaligus menikmati suasana hutan dan pegunungan yang masih asri.Lebih asyiknya lagi, tur ini juga menyediakan paket berkemah di Curug Cilember. Kapan lagi bisa berkemah di dekat air terjun? Buat kamu yang enggak membawa peralatan berkemah, bisa loh menginap di villa kayu yang punya pemandangan langsung ke air terjun.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Pura Luhur Uluwatu",
    city: "Bali",
    distance: 500,
    address: 'Pecatu, Kec. Kuta Selatan, Kabupaten Badung, Bali',
    price: 100000,
    maxGroupSize: 8,
    desc: "Pura Uluwatu terletak pada ketinggian 97 meter dari permukaan laut. Di depan pura terdapat hutan kecil yang disebut alas kekeran, berfungsi sebagai penyangga kesucian pura. Pura Uluwatu juga menjadi terkenal karena tepat di bawahnya adalah pantai Pecatu yang sering kali digunakan sebagai tempat untuk olahraga selancar, bahkan event internasional sering kali diadakan di sini. Ombak pantai ini terkenal amat cocok untuk dijadikan tempat selancar selain keindahan alam Bali yang memang amat cantik.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Goa Pindul",
    city: "Yogyakarta",
    distance: 500,
    address: 'Gunungbang, Bejiharjo, Kec. Karangmojo, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta',
    price: 45000,
    maxGroupSize: 4,
    desc: "Goa Pindul di Daerah Istimewa Yogyakarta adalah salah satu tempat wisata paling terkenal di kota ini. Dan itu bukan tanpa alasan. Keindahan goa membuat orang tertarik dan terpesona, sementara aksesnya yang mudah membuatnya nyaman bagi pengunjung untuk menjelajah.Berlokasi di desa wisata Kabupaten Gunung Kidul, Goa Pindul Jogja yang dibuka pada 10 Oktober 2010 ini memiliki daya tarik yang unik. Dengan panjang aliran sungai sekitar 350 meter, terdapat 3 zona yang bisa kamu jelajahi di dalam goa yang pastinya menawarkan pengalaman yang menakjubkan.Jangan lewatkan stalaktit di dalam gua! Ini adalah jenis formasi yang menggantung dari langit-langit gua. Salah satu stalaktitnya adalah yang terbesar di Gua Pindul dan terbesar ke-4 di dunia; dibutuhkan 5 orang berpegangan tangan untuk mengelilinginya. Di dinding gua, kita bisa melihat lukisan abstrak dari air, batu kristal, dan susu bulan yang menambah keindahan gua.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida",
    city: "Bali",
    distance: 500,
    address: 'Kabupaten Klungkung, provinsi Bali',
    price: 500000,
    maxGroupSize: 8,
    desc: "Nusa Penida adalah salah satu destinasi wisata terbaik di area Bali yang menjadi favorit wisatawan. Dan hal ini tentu saja bukan tanpa alasan. Ada banyak pesona alam dengan pemandangan yang tiada duanya. Sebut saja Kelingking Beach, Angel’s Billabong, Diamond Beach, dan banyak lagi.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Pantai Indrayanti",
    city: "Yogyakarta",
    distance: 500,
    address: 'Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta',
    price: 10000,
    maxGroupSize: 8,
    desc: "PANTAI Indrayanti merupakan objek wisata favorit wisatawan di Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Pantai berpasir putih, dibatasi bukit karang, dan hamparan laut biru jadi pemandangan menakjubkan bagi pengunjung.Sebenarnya, Pantai Indrayanti memiliki nama asli Pantai Pulang Sawal. Hanya saja, masyarakat lebih mengenalnya sebagai Pantai Indrayanti, kenapa? Di sana, ada sebuah tempat makan yang ramai dikunjungi wisatawan yakni 'Warung Indrayanti', diambil dari nama istri sang pemilik warung. Lantaran wisatawan tak mengetahui nama asli pantai, jadilah pantai ini disebut Pantai Indrayanti.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Taman Safari Bogor",
    city: "Bogor",
    distance: 500,
    address: 'Jalan Kapten Harun Kabir No.724, Cibeureum, Kec. Cisarua, Kabupaten Bogor, Jawa Barat',
    price: 150000,
    maxGroupSize: 8,
    desc: "Siap-siap untuk petualangan tak terlupakan di Taman Safari Indonesia Bogor! Kamu bisa mengendarai mobil pribadi atau naik bus Safari Park untuk merasasakan Safari Journey dan dibuat terkagum-kagum dengan hewan-hewan luar biasa, seperti macan, singa, unta, dan kuda nil yang berkeliaran bebas seperti di habitat alami mereka. Dengan lebih dari 3.000 hewan dari 300 spesies, Safari Journey yang super seru sudah menantimu! Rasakan sensasi memberi makan dan berinteraksi langsung dengan satwa-satwa ini.Tapi keseruan tidak berhenti di situ! Setelah Safari Journey, nikmati sekitar 20 wahana seru, presentasi satwa yang memikat, dan air terjun ikonik Curug Jaksa dengan airnya yang dingin dan menyejukkan. Jangan lewatkan kesempatan untuk melihat Cai Tao dan Hu Chun, dua panda raksasa satu-satunya di Indonesia! Taman Safari Indonesia Bogor adalah destinasi utama bagi pecinta satwa dan keluarga.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Taman Bunga Nusantara",
    city: "Cianjur",
    distance: 700,
    address: 'Jl. Mariwati No.KM. 7, Kawungluwuk, Kec. Sukaresmi, Kabupaten Cianjur, Jawa Barat ',
    price: 50000,
    maxGroupSize: 4,
    desc: "Taman Bunga Nusantara adalah sebuah taman bunga seluas 35 hektare yang terletak dekat Gunung Gede Pangrango dan Kebun Teh Bogor dengan jarak tempuh sekitar 2,5 - 3 jam perjalanan dari Jakarta, tepatnya berada di antara dua desa yaitu, Kawungluwuk, Sukaresmi, Cianjur dengan Sukawangi, Sukamakmur, Jonggol.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
