export interface ArchitectureContent {
  description: string;
  overview: string;
  keyComponents: string[];
  flow: string;
}

export interface ProjectContent {
  title: string;
  description: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
  impact: string;
  architecture?: ArchitectureContent;
}

export interface Project {
  id: string;
  category: string;
  tags: string[];
  icon: string;
  /** Image used as blurred hero background on detail page */
  image: string;
  /** Image used as thumbnail on the project list page */
  thumbnail?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  /** URL to an interactive demo / promo page */
  demoUrl?: string;
  architectureImage?: string;
  architecture?: {
    nodes: Array<{ id: string; label: string; type: string }>;
    links: Array<{ source: string; target: string }>;
  };
  locales: {
    en: ProjectContent;
    id: ProjectContent;
  };
}

export const projects: Project[] = [
  {
    id: "homin",
    category: "Mobile Apps",
    tags: ["Flutter", "Riverpod", "GoRouter", "Clean Architecture", "Dio", "Hive"],
    icon: "🏠",
    image: "/images/homin.png",
    thumbnail: "/images/thumbnails/homin.png",
    demoUrl: "/images/video/homin-promo.html",
    locales: {
      en: {
        title: "Homin — Property Rental UI Template",
        description: "A premium, production-ready Flutter UI template with 20+ polished screens spanning the complete rental journey, built with feature-first clean architecture and a curated indigo-navy design system.",
        fullDescription: "Homin serves as a premium, production-ready mobile UI template engineered to accelerate the development of property rental platforms in Indonesia. Built with Flutter's feature-first clean architecture, the application delivers 20+ polished screens spanning the complete rental journey — from onboarding and authentication to property discovery, booking flows, real-time chat, and an owner analytics dashboard. It incorporates a curated indigo-navy design system with full dark mode support, shimmer loading states, and fluid animations powered by flutter_animate, empowering developers with a pixel-perfect foundation that eliminates months of UI scaffolding.",
        challenges: "Constructing a comprehensive, multi-role property rental interface that satisfies both tenant and property owner workflows within a single, coherent codebase. The core engineering difficulty lay in establishing a scalable architecture (13 feature modules across data/domain/presentation layers) that maintains strict separation of concerns while sharing cross-cutting design tokens, reusable widget libraries (11 categories), and mock data layers — all without coupling to a specific backend, ensuring the template remains universally adaptable for any API integration.",
        solutions: "Architected a feature-first clean architecture leveraging Riverpod for reactive state management and GoRouter for declarative, guard-protected navigation. Each of the 13 feature modules (auth, booking, chat, explore, home, notifications, onboarding, owner, payment, profile, property, saved, settings) is fully self-contained with its own data, domain, and presentation layers. A shared module provides cross-feature entities, models, and mock repositories, enabling the app to run instantly without any backend. The core layer houses 11 categories of reusable widgets, a unified theme system with light/dark palettes, Dio-based networking scaffolding, and local storage wrappers (SharedPreferences, FlutterSecureStorage, Hive).",
        impact: "Eliminated 3–4 months of UI development effort by delivering a complete, production-grade Flutter template with 20+ screens, dual-role interfaces (tenant & owner), and a cohesive design system — enabling development teams to skip scaffolding entirely and focus on business logic, reducing time-to-market for property rental platforms by up to 70% while ensuring enterprise-grade code quality through clean architecture patterns."
      },
      id: {
        title: "Homin — Template UI Sewa Properti",
        description: "Template UI mobile Flutter premium siap produksi dengan 20+ layar yang mencakup seluruh perjalanan penyewaan properti, dibangun dengan clean architecture berbasis fitur dan sistem desain indigo-navy.",
        fullDescription: "Homin adalah template UI mobile premium yang siap produksi, dirancang untuk mempercepat pengembangan platform sewa properti di Indonesia. Dibangun dengan arsitektur bersih berbasis fitur (feature-first clean architecture) menggunakan Flutter, aplikasi ini menyajikan 20+ layar yang telah dipoles mencakup seluruh perjalanan penyewaan — mulai dari onboarding, autentikasi, pencarian properti, alur pemesanan, obrolan real-time, hingga dashboard analitik pemilik properti. Aplikasi ini mengusung sistem desain bernuansa indigo-navy dengan dukungan penuh dark mode, shimmer loading state, dan animasi halus menggunakan flutter_animate, memberikan fondasi pixel-perfect yang menghilangkan berbulan-bulan kerja scaffolding UI bagi para developer.",
        challenges: "Membangun antarmuka sewa properti yang komprehensif dan mendukung dua peran (penyewa dan pemilik) dalam satu codebase yang koheren. Tantangan teknis utama terletak pada pembangunan arsitektur yang skalabel (13 modul fitur dengan lapisan data/domain/presentation) yang tetap menjaga pemisahan tanggung jawab secara ketat, sambil berbagi design token lintas fitur, pustaka widget yang dapat digunakan ulang (11 kategori), dan lapisan mock data — semuanya tanpa bergantung pada backend tertentu, sehingga template ini tetap fleksibel dan dapat diadaptasi untuk integrasi API apapun.",
        solutions: "Mengarsitekkan clean architecture berbasis fitur dengan memanfaatkan Riverpod untuk manajemen state reaktif dan GoRouter untuk navigasi deklaratif yang dilengkapi route guard. Setiap dari 13 modul fitur (auth, booking, chat, explore, home, notifications, onboarding, owner, payment, profile, property, saved, settings) bersifat mandiri dengan lapisan data, domain, dan presentation masing-masing. Modul shared menyediakan entitas, model, dan repository mock lintas fitur, memungkinkan aplikasi berjalan langsung tanpa backend apapun. Lapisan core menampung 11 kategori widget reusable, sistem tema terpadu dengan palet terang/gelap, scaffolding jaringan berbasis Dio, serta wrapper penyimpanan lokal (SharedPreferences, FlutterSecureStorage, Hive).",
        impact: "Menghilangkan 3–4 bulan upaya pengembangan UI dengan menyediakan template Flutter lengkap berkualitas produksi yang mencakup 20+ layar, antarmuka dua peran (penyewa & pemilik), dan sistem desain yang kohesif — memungkinkan tim pengembang melewati tahap scaffolding sepenuhnya dan langsung fokus pada logika bisnis, memangkas waktu peluncuran platform sewa properti hingga 70% sambil memastikan kualitas kode setara enterprise melalui pola clean architecture."
      }
    }
  },
  {
    id: "sdlc-portal",
    category: "AI Systems",
    tags: ["Next.js 14", "FastAPI", "Claude AI", "GitLab", "Jenkins", "Asana", "Grafana", "n8n"],
    icon: "🚀",
    image: "/images/craft-engineering.png",
    thumbnail: "/images/thumbnails/craft-engineering.png",
    locales: {
      en: {
        title: "SDLC Portal — Craft Engineering",
        description: "A unified web portal monitoring the full software development lifecycle of the Craft Engineering / TAP-AGRI team, bridging Asana, GitLab, Jenkins, and Grafana in a single real-time interface.",
        fullDescription: "SDLC Portal is a unified web portal built to monitor the entire software development lifecycle of the Craft Engineering / TAP-AGRI team in a single interface. It bridges existing tools — Asana, GitLab, Jenkins, and Grafana — eliminating the need for engineers to switch between platforms to track sprint health, deployment status, MR approvals, and production monitoring in real-time.",
        challenges: "The engineering team faced severe information fragmentation: sprint status lived in Asana, build pipelines in Jenkins, merge requests in GitLab, and metrics in Grafana. There was no single source of truth for the full SDLC state. This caused engineers to lose time context-switching between tools, MR approvals to be delayed due to lack of visibility, and deployment decisions to be made without full situational awareness.",
        solutions: "Built on Next.js 14 + FastAPI, the portal integrates all 8 SDLC phases into one dashboard. A Claude-powered AI Agent enables natural language queries like \"which builds failed today?\" and direct actions such as creating MRs with automated deployment templates (#ISSUE / #CR). Data is aggregated in real-time from GitLab, Jenkins, Asana, and the n8n MR approval workflow into a single unified view.\n\n✨ AI Agent — SDLC Copilot: not an ordinary chatbot — it has full access to all team tools. 🔍 Real-time queries — \"Which MRs are pending approval?\", \"Which Jenkins builds failed today?\" ⚡ Direct execution — create MRs, trigger Jenkins builds, post comments, and merge MRs from chat. 📋 Auto-templating — generate MR descriptions for deployments (#ISSUE) and change requests (#CR) automatically. 🏥 SDLC Health Check — one command to check all tools simultaneously. 🤖 Agentic loop — chains multiple tools sequentially to answer complex queries without manual intervention.",
        impact: "Significantly reduces engineer context-switching by consolidating 4 separate platforms into 1 portal. The AI Agent empowers engineers to perform deployment actions and monitoring through natural conversation alone — accelerating delivery cycles, eliminating missed MR approvals, and providing full real-time SDLC visibility across the entire team."
      },
      id: {
        title: "SDLC Portal — Craft Engineering",
        description: "Unified web portal untuk memonitor seluruh siklus pengembangan software tim Craft Engineering / TAP-AGRI dalam satu tampilan terpadu, menghubungkan Asana, GitLab, Jenkins, dan Grafana secara real-time.",
        fullDescription: "SDLC Portal adalah unified web portal yang dirancang untuk memonitor seluruh siklus pengembangan software (SDLC) tim Craft Engineering / TAP-AGRI dalam satu tampilan terpadu. Portal ini menghubungkan semua tools yang sudah digunakan tim — Asana, GitLab, Jenkins, dan Grafana — sehingga engineer tidak perlu berpindah-pindah platform untuk memahami kondisi sprint, deployment, MR approval, hingga monitoring production secara real-time.",
        challenges: "Tim engineering menghadapi fragmentasi informasi yang serius: status sprint ada di Asana, build pipeline di Jenkins, merge request di GitLab, dan metrics di Grafana. Tidak ada satu tempat yang bisa memberikan gambaran utuh kondisi SDLC. Akibatnya engineer kehilangan waktu untuk context-switching antar tools, approval MR terlambat karena tidak terpantau, dan keputusan deployment sering dibuat tanpa visibilitas penuh terhadap status semua komponen.",
        solutions: "Portal dibangun dengan Next.js 14 + FastAPI sebagai backbone, mengintegrasikan seluruh 8 fase SDLC dalam satu dashboard. Dilengkapi AI Agent berbasis Claude yang bisa menjawab pertanyaan real-time seperti \"build mana yang gagal hari ini?\" atau langsung melakukan aksi seperti membuat MR dengan template deployment (#ISSUE / #CR) otomatis. Semua data diagregasi dari GitLab, Jenkins, Asana, dan n8n approval workflow dalam satu tampilan.\n\n✨ AI Agent — SDLC Copilot: bukan sekadar chatbot biasa — ia memiliki akses penuh ke seluruh tools tim. 🔍 Query real-time — \"MR mana yang pending approval?\", \"build Jenkins yang gagal hari ini?\" ⚡ Eksekusi langsung — membuat MR baru, trigger Jenkins build, post komentar ke MR, hingga merge MR langsung dari chat. 📋 Template otomatis — generate deskripsi MR deployment (#ISSUE) dan change request (#CR) secara otomatis. 🏥 SDLC Health Check — satu perintah untuk cek kondisi semua tools sekaligus. 🤖 Agentic loop — menjalankan beberapa tool secara berurutan untuk menjawab pertanyaan kompleks tanpa intervensi manual.",
        impact: "Mengurangi context-switching engineer secara signifikan dengan menyatukan 4 platform berbeda dalam 1 portal. AI Agent memungkinkan engineer melakukan aksi deployment dan monitoring hanya lewat percakapan natural, mempercepat siklus delivery, mengurangi risiko MR yang terlewat approval, dan memberikan visibilitas penuh kondisi SDLC kepada seluruh tim secara real-time."
      }
    }
  },
  {
    id: "restuque",
    category: "Mobile Apps",
    tags: ["React Native", "Node.js", "Next.js", "RabbitMQ", "PostgreSQL", "Laravel"],
    icon: "💼",
    image: "/images/restuque-mockup-dark.png",
    thumbnail: "/images/thumbnails/restuque.png",
    architectureImage: "/images/restuque-architecture.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tap.restuque.app&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/id/app/restuque/id1561895835",
    locales: {
      en: {
        title: "Restuque - Mobile Approval Portal Apps",
        description: "A highly-scalable, event-driven mobile approval gateway integrating fragmented enterprise legacy systems into a unified real-time portal.",
        fullDescription: "Restuque serves as a centralized mobile orchestration layer engineered to unify disjointed corporate approval workflows. Built to replace fragmented legacy interfaces, the application exposes a unified presentation layer that standardizes transaction states across various departments. It incorporates a resilient background push-notification pipeline that delivers sub-second transaction dispatching, empowering executives with frictionless, real-time oversight over high-stakes operational bottlenecks.",
        challenges: "Orchestrating concurrent, bi-directional data synchronization between modern mobile clients and deeply entrenched legacy monoliths (Laravel). The core engineering friction lay in mitigating high-latency bottlenecks and preventing race conditions during peak enterprise traffic without refactoring the underlying legacy databases.",
        solutions: "Architected a decoupled, event-driven microservices topology leveraging RabbitMQ as a centralized message broker. This was fronted by a robust Node.js/Next.js API Gateway that functions as a traffic orchestrator and asynchronous webhook dispatcher, ensuring robust fault tolerance, dead-letter queuing for failovers, and absolute zero-downtime integration.",
        impact: "Eliminated cross-system API deadlocks and slashed bureaucratic approval latency by unifying 5 diverse monolithic applications into 1 mobile gateway, accelerating enterprise-wide approval delivery.",
        architecture: {
          description: "A highly available event-driven architecture strictly tailored to handle cross-system transaction persistence and non-blocking approval workflows.",
          overview: "The underlying infrastructure asserts a layered API Gateway pattern ensuring robust boundary segregation between the React Native frontend and disparate backend legacy environments. An event-bus topology powered by RabbitMQ serves as reliable middleware, abstracting intense synchronous load into scalable, asynchronous worker pools avoiding legacy service exhaustion.",
          keyComponents: [
            "API Gateway Orchestrator (Node.js/Next.js)",
            "Scalable Event Broker (RabbitMQ)",
            "Stateless Auth & Session Microservice",
            "Job Scheduler for Retry Mechanics",
            "PostgreSQL Operational Datastore"
          ],
          flow: "Client requests hit the API Gateway, validating state rapidly before sinking dispatch commands to RabbitMQ. Workers process operations asynchronously, enforcing data consistency via eventual consistency models across PostgreSQL and legacy endpoints."
        }
      },
      id: {
        title: "Restuque - Mobile Approval Portal Apps",
        description: "Gateway persetujuan seluler berbasis event-driven architecture yang mengintegrasikan berbagai sistem legacy enterprise ke dalam satu portal terpusat secara real-time.",
        fullDescription: "Restuque dirancang sebagai orchestration layer seluler terpusat untuk mengonsolidasikan alur kerja administrasi korporat yang terfragmentasi. Membangun lapisan presentasi tingkat tinggi (unified presentation layer), aplikasi ini menstandarisasi state transaksi di berbagai departemen. Infrastrukturnya ditopang oleh pipeline push-notification berlatensi rendah, memungkinkan eksekutif mengeksekusi operasi kritikal dan menghilangkan operasional bottleneck secara real-time tanpa delay.",
        challenges: "Mengorkestrasi sinkronisasi data dua arah secara kongkuren antara klien mobile modern dengan arsitektur monolitik legacy internal (Laravel). Hambatan rekayasa tersulit adalah memitigasi bottleneck latensi dan mencegah race conditions saat traffic persetujuan memuncak, tanpa harus memodifikasi struktur skema database legacy.",
        solutions: "Merancang topologi microservices yang terpisah (decoupled) berlandaskan arsitektur event-driven menggunakan RabbitMQ sebagai message broker sentral. Lalu lintas lintas-sistem dilapis oleh API Gateway (Node.js/Next.js) yang bertindak sebagai orkestrator traffic dan asynchronous webhook dispatcher—memastikan fault tolerance, implementasi dead-letter queue untuk failover, dan jaminan zero-downtime integration.",
        impact: "Sukses mengeliminasi resiko deadlock API dan memangkas drastis latensi persetujuan birokrasi dengan menyatukan 5 aplikasi legacy berbeda ke dalam 1 gerbang eksekusi asinkron, mempercepat alur persetujuan di seluruh perusahaan.",
        architecture: {
          description: "Arsitektur event-driven tangguh yang dirancang spesifik untuk menangani persistensi transaksi pelintas-sistem dan alur persetujuan non-blocking.",
          overview: "Infrastruktur dibangun memakai pola API Gateway yang memisahkan boundary/batasan secara presisi antara frontend React Native dan tumpukan web-app internal yang bising. Sistem event-bus ditenagai oleh RabbitMQ yang bekerja menyerap muatan permintaan tinggi (synchronous load hit) menjadi rangkaian antrian task asinkron yang terdistribusi dan berskala mandiri.",
          keyComponents: [
            "API Gateway Orchestrator (Layanan Akses Terpusat)",
            "Event Broker Termutakhir (RabbitMQ Cluster)",
            "Stateless Auth Microservice (JWT Base)",
            "Penjadwal Task Asinkron & Mekanisme Retry",
            "Database Induk Operasional PostgreSQL"
          ],
          flow: "Client menembakkan instruksi ke API Gateway, divalidasi mutakhir secara presisi lalu dilempar ke RabbitMQ. Worker memproses operasi asinkron ke layanan internal, menjamin sinkronisasi data final lewat model eventual consistency secara kokoh."
        }
      }
    }
  },
  {
    id: "wplan",
    category: "Mobile Apps",
    tags: ["React Native", "JavaScript", "Dio", "Hive", "SharedPreferences", "FlutterSecureStorage"],
    icon: "📅",
    image: "/images/thumbnails/wplan.png",
    thumbnail: "/images/thumbnails/wplan.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wplan&hl=en",
    locales: {
      en: {
        title: "Wplan - Platform Perencanaan Harian",
        description: "An integrated planning system designed to facilitate daily planning activities, material requests, and manpower needs based on monthly planning — connecting seamlessly with other enterprise applications like GudangKu.",
        fullDescription: "WPLAN is an integrated planning system designed to facilitate daily planning activities, material requests, and manpower needs based on monthly planning. The application connects with other applications like GudangKu, offering a user-friendly interface to manage various aspects of planning. Utilizing JavaScript as the primary language and a modular architecture, the application provides flexibility and ease of development and maintenance.",
        challenges: "Building a comprehensive planning interface that meets the needs of various roles within a single coherent codebase. The core challenge lies in developing a scalable architecture, maintaining strict separation between data, domain, and presentation layers while sharing reusable design tokens and widget libraries without being tied to a specific backend, ensuring the application remains integrable with various APIs.",
        solutions: "Adopting a clean modular architecture with clear separation between features such as authentication, booking, and user management. Each module has its own data, domain, and presentation layers, while a shared module provides reusable entities and models. Dio-based networking infrastructure and local storage wrappers (SharedPreferences, FlutterSecureStorage, Hive) ensure the application can function without a backend, allowing developers to focus on business logic.",
        impact: "Reduced UI development time by 3-4 months by providing a production-ready Flutter template that includes various features and a cohesive design system. Development teams can skip the scaffolding phase and focus directly on business logic, accelerating time-to-market for planning platforms by up to 70% while ensuring high code quality through clean architecture patterns."
      },
      id: {
        title: "Wplan - Platform Perencanaan Harian",
        description: "Sistem perencanaan terintegrasi yang dirancang untuk memfasilitasi aktivitas perencanaan harian, permintaan material, dan kebutuhan tenaga kerja berdasarkan perencanaan bulanan — terhubung dengan aplikasi enterprise lain seperti GudangKu.",
        fullDescription: "WPLAN adalah sistem perencanaan terintegrasi yang dirancang untuk memfasilitasi aktivitas perencanaan harian, permintaan material, dan kebutuhan tenaga kerja berdasarkan perencanaan bulanan. Aplikasi ini terhubung dengan aplikasi lain seperti GudangKu, menawarkan antarmuka yang ramah pengguna untuk mengelola berbagai aspek perencanaan. Dengan menggunakan JavaScript sebagai bahasa utama dan arsitektur modular, aplikasi ini memberikan fleksibilitas dan kemudahan dalam pengembangan serta pemeliharaan.",
        challenges: "Membangun antarmuka perencanaan yang komprehensif yang memenuhi kebutuhan berbagai peran dalam satu basis kode yang koheren. Tantangan utama terletak pada pengembangan arsitektur yang dapat diskalakan, dengan pemisahan yang ketat antara lapisan data, domain, dan presentasi, sambil tetap berbagi token desain yang dapat digunakan kembali dan pustaka widget tanpa terikat pada backend tertentu, memastikan aplikasi tetap dapat diintegrasikan dengan berbagai API.",
        solutions: "Mengadopsi arsitektur modular yang bersih dengan pemisahan yang jelas antara fitur-fitur seperti otentikasi, pemesanan, dan pengelolaan pengguna. Setiap modul memiliki lapisan data, domain, dan presentasi sendiri, sementara modul bersama menyediakan entitas dan model yang dapat digunakan kembali. Infrastruktur jaringan berbasis Dio dan sistem penyimpanan lokal (SharedPreferences, FlutterSecureStorage, Hive) memastikan aplikasi dapat berfungsi tanpa backend, memungkinkan pengembang untuk fokus pada logika bisnis.",
        impact: "Mengurangi waktu pengembangan UI hingga 3-4 bulan dengan menyediakan template Flutter siap produksi yang mencakup berbagai fitur dan sistem desain yang kohesif. Tim pengembangan dapat melewati tahap scaffolding dan langsung fokus pada logika bisnis, mempercepat waktu peluncuran platform perencanaan hingga 70% sambil memastikan kualitas kode yang tinggi melalui pola arsitektur yang bersih."
      }
    }
  },
  {
    id: "mobile-inspection",
    category: "Mobile Apps",
    tags: ["React Native", "Realm", "Firebase", "Geolocation", "GitLab CI/CD", "Notifee"],
    icon: "🌿",
    image: "/images/thumbnails/mobile-inspection.png",
    thumbnail: "/images/thumbnails/mobile-inspection.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bluezoneinspection.app&hl=en",
    locales: {
      en: {
        title: "Mobile Inspection - Smart Plantation Inspection App",
        description: "A production-ready mobile inspection application for oil palm plantations, built on React Native 0.72 to address the real-world needs of field workers — delivering fast, accurate, and dependable inspections even in areas with limited connectivity.",
        fullDescription: "Mobile Inspection is a production-ready mobile inspection application for oil palm plantations, built on React Native 0.72 to address the real-world needs of field workers on the ground. Born directly from the aspirations of the field team itself, the application delivers a fast, accurate, and dependable inspection experience — even in areas with limited connectivity. From block inspections and BBC (Good Fruit Recording) data entry, GPS location tracking, to real-time notifications via Firebase, everything is packaged into a single cross-platform application running seamlessly on both Android and iOS. Powered by Realm Database as its offline-first engine, the app ensures that not a single inspection record is ever lost in the field.",
        challenges: "Building a plantation inspection application capable of operating reliably under extreme field conditions — minimal signal, a wide variety of Android devices, and the need for precise data recording with zero error tolerance. The core engineering difficulty lay in managing seamless offline-to-online data synchronization using Realm, integrating multiple heavy libraries (Firebase, Geolocation, Bottom Sheet, NetInfo) without compromising performance, and handling edge cases within the BBC and Inspection modules — such as the TBM block 0 bug at row-end and a persistent loading loop — all while ensuring zero disruption to plantation operations running 24/7.",
        solutions: "Architected using React Native 0.72 with JavaScript (98%) as the primary language, supplemented by Java native modules (Android) for performance-critical operations. Realm 11.10.2 serves as the backbone for local data storage with automatic sync capabilities, while @react-native-community/geolocation ensures every inspection point is recorded with precise GPS coordinates. The navigation stack is built on React Navigation 6 (native-stack, bottom-tabs, top-tabs, material-tabs) for a fluid user experience. Firebase (Analytics + Messaging via Notifee) automates notifications and reporting, apisauce handles API communication with robust error handling, and NetInfo enables real-time connection status detection for seamless offline/online mode management. CI/CD is fully managed via GitLab CI/CD for fast and structured releases.",
        impact: "From its initial version through to v6.18 (build 65), Mobile Inspection has transformed TAP-AGRI's oil palm plantation inspection process — replacing error-prone manual recording with a standardized digital system. The application empowers field teams to conduct inspections faster, delivers data to management in real-time, and resolves critical field-discovered bugs iteratively through a structured release pipeline — resulting in plantation operations that are more efficient, accurate, and truly data-driven."
      },
      id: {
        title: "Mobile Inspection - Smart Plantation Inspection App",
        description: "Aplikasi mobile inspeksi perkebunan kelapa sawit siap pakai secara production, dibangun di atas React Native 0.72 untuk menjawab kebutuhan nyata para pekerja di lapangan — menghadirkan pengalaman inspeksi yang cepat, akurat, dan dapat diandalkan bahkan di area dengan konektivitas terbatas.",
        fullDescription: "Mobile Inspection adalah aplikasi mobile inspeksi perkebunan kelapa sawit yang siap pakai secara production, dibangun di atas React Native 0.72 untuk menjawab kebutuhan nyata para pekerja di lapangan perkebunan. Lahir dari aspirasi tim lapangan sendiri, aplikasi ini menghadirkan pengalaman inspeksi yang cepat, akurat, dan dapat diandalkan — bahkan di area dengan konektivitas terbatas. Mulai dari inspeksi blok, pencatatan BBC (Buah Baik Catat), pelacakan lokasi GPS, hingga notifikasi real-time via Firebase, semua terangkum dalam satu aplikasi cross-platform yang berjalan mulus di Android maupun iOS. Didukung Realm Database sebagai mesin offline-first, aplikasi ini memastikan tidak ada satu pun data inspeksi yang hilang di lapangan.",
        challenges: "Membangun aplikasi inspeksi perkebunan yang mampu beroperasi secara andal di kondisi lapangan ekstrem — sinyal minim, perangkat Android beragam, dan kebutuhan pencatatan data yang presisi tanpa toleransi kesalahan. Tantangan utama terletak pada pengelolaan sinkronisasi data offline-to-online yang seamless menggunakan Realm, integrasi multi-library berat (Firebase, Geolocation, Bottom Sheet, NetInfo) tanpa mengorbankan performa, serta penanganan kasus edge pada modul BBC dan Inspeksi — seperti bug blok TBM 0 di ujung baris dan loading loop yang sempat terjadi — semuanya harus diselesaikan tanpa mengganggu operasional kebun yang berjalan 24/7.",
        solutions: "Diarsitekturi menggunakan React Native 0.72 dengan JavaScript (98%) sebagai bahasa utama, dilengkapi native module Java (Android) untuk operasi kritis performa. Realm 11.10.2 menjadi backbone penyimpanan data lokal dengan kapabilitas sync otomatis, sementara @react-native-community/geolocation memastikan setiap titik inspeksi tercatat dengan koordinat GPS yang akurat. Stack navigasi dibangun di atas React Navigation 6 (native-stack, bottom-tabs, top-tabs, material-tabs) untuk pengalaman navigasi yang fluid. Firebase (Analytics + Messaging via Notifee) mengotomasi notifikasi dan pelaporan, apisauce menangani komunikasi API dengan error handling yang robust, dan NetInfo memungkinkan deteksi status koneksi real-time untuk manajemen mode offline/online. CI/CD dikelola penuh via GitLab CI/CD untuk release yang cepat dan terstruktur.",
        impact: "Sejak versi perdana hingga v6.18 (build 65), Mobile Inspection telah mentransformasi proses inspeksi perkebunan kelapa sawit TAP-AGRI dari pencatatan manual yang rawan kesalahan menjadi sistem digital yang terstandarisasi. Aplikasi ini memungkinkan tim lapangan melakukan inspeksi lebih cepat, data sampai ke manajemen secara real-time, serta bug-bug kritis yang ditemukan di lapangan diselesaikan secara iteratif melalui pipeline rilis yang terstruktur — menghasilkan operasional kebun yang lebih efisien, akurat, dan berbasis data."
      }
    }
  }
];
