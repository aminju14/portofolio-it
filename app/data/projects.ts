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
    category: "Enterprise System",
    tags: ["React Native", "Node.js", "Next.js", "RabbitMQ", "PostgreSQL", "Laravel"],
    icon: "💼",
    image: "/images/restuque-mockup-dark.png",
    thumbnail: "/images/thumbnails/restuque.png",
    architectureImage: "/images/restuque-architecture.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tap.restuque.app&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/id/app/restuque/id1561895835",
    locales: {
      en: {
        title: "Restuque Mobile Approval System",
        description: "A highly-scalable, event-driven mobile approval gateway integrating fragmented enterprise legacy systems into a unified real-time portal.",
        fullDescription: "Restuque serves as a centralized mobile orchestration layer engineered to unify disjointed corporate approval workflows. Built to replace fragmented legacy interfaces, the application exposes a unified presentation layer that standardizes transaction states across various departments. It incorporates a resilient background push-notification pipeline that delivers sub-second transaction dispatching, empowering executives with frictionless, real-time oversight over high-stakes operational bottlenecks.",
        challenges: "Orchestrating concurrent, bi-directional data synchronization between modern mobile clients and deeply entrenched legacy monoliths (Laravel). The core engineering friction lay in mitigating high-latency bottlenecks and preventing race conditions during peak enterprise traffic without refactoring the underlying legacy databases.",
        solutions: "Architected a decoupled, event-driven microservices topology leveraging RabbitMQ as a centralized message broker. This was fronted by a robust Node.js/Next.js API Gateway that functions as a traffic orchestrator and asynchronous webhook dispatcher, ensuring robust fault tolerance, dead-letter queuing for failovers, and absolute zero-downtime integration.",
        impact: "Eliminated cross-system API deadlocks and slashed bureaucratic approval latency by unifying 5 diverse monolithic applications into 1 ubiquitous mobile gateway, yielding a 99.9% uptime and accelerating enterprise-wide SLA delivery.",
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
        title: "Restuque Mobile Approval System",
        description: "Gateway persetujuan seluler berbasis event-driven architecture yang mengintegrasikan berbagai sistem legacy enterprise ke dalam satu portal terpusat secara real-time.",
        fullDescription: "Restuque dirancang sebagai orchestration layer seluler terpusat untuk mengonsolidasikan alur kerja administrasi korporat yang terfragmentasi. Membangun lapisan presentasi tingkat tinggi (unified presentation layer), aplikasi ini menstandarisasi state transaksi di berbagai departemen. Infrastrukturnya ditopang oleh pipeline push-notification berlatensi rendah, memungkinkan eksekutif mengeksekusi operasi kritikal dan menghilangkan operasional bottleneck secara real-time tanpa delay.",
        challenges: "Mengorkestrasi sinkronisasi data dua arah secara kongkuren antara klien mobile modern dengan arsitektur monolitik legacy internal (Laravel). Hambatan rekayasa tersulit adalah memitigasi bottleneck latensi dan mencegah race conditions saat traffic persetujuan memuncak, tanpa harus memodifikasi struktur skema database legacy.",
        solutions: "Merancang topologi microservices yang terpisah (decoupled) berlandaskan arsitektur event-driven menggunakan RabbitMQ sebagai message broker sentral. Lalu lintas lintas-sistem dilapis oleh API Gateway (Node.js/Next.js) yang bertindak sebagai orkestrator traffic dan asynchronous webhook dispatcher—memastikan fault tolerance, implementasi dead-letter queue untuk failover, dan jaminan zero-downtime integration.",
        impact: "Sukses mengeliminasi resiko deadlock API dan memangkas drastis latensi persetujuan birokrasi dengan menyatukan 5 aplikasi legacy berbeda ke dalam 1 gerbang eksekusi asinkron, mengamankan 99.9% uptime operasional.",
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
    id: "ai-assistant",
    category: "AI Systems",
    tags: ["React", "Node.js", "PostgreSQL", "Python NLP", "OpenAI"],
    icon: "🤖",
    image: "/images/ai-chat.png",
    thumbnail: "/images/thumbnails/ai-assistant.png",
    locales: {
      en: {
        title: "AI Assistant Chat System",
        description: "Developed an AI-powered internal knowledge assistant that leverages NLP and large language models (LLMs) to provide quick and accurate answers to employee queries.",
        fullDescription: "A comprehensive AI-driven chat platform designed to streamline internal communication and knowledge retrieval. The system integrates multiple LLM providers and uses vector databases for efficient semantic search across company documentation.",
        challenges: "Handling high volumes of concurrent chat requests while maintaining low latency and ensuring the AI's responses were grounded in company-specific data without Hallucinations.",
        solutions: "Implemented a RAG (Retrieval-Augmented Generation) pipeline using a vector database for semantic search and a robust caching layer to reduce redundant LLM calls.",
        impact: "Reduced employee internal support tickets by 45% and improved knowledge retrieval speed by 80% across the organization."
      },
      id: {
        title: "Sistem Chat Asisten AI",
        description: "Mengembangkan asisten pengetahuan internal berbasis AI yang memanfaatkan NLP dan large language models (LLMs) untuk memberikan jawaban cepat dan akurat atas pertanyaan karyawan.",
        fullDescription: "Platform chat berbasis AI komprehensif yang dirancang untuk merampingkan komunikasi internal dan pengambilan pengetahuan. Sistem ini mengintegrasikan berbagai penyedia LLM dan menggunakan database vektor untuk pencarian semantik yang efisien di seluruh dokumentasi perusahaan.",
        challenges: "Menangani volume permintaan chat yang tinggi secara bersamaan sambil tetap menjaga latensi rendah dan memastikan respons AI didasarkan pada data spesifik perusahaan tanpa ada halusinasi (data palsu).",
        solutions: "Mengimplementasikan pipeline RAG (Retrieval-Augmented Generation) menggunakan database vektor untuk pencarian semantik dan lapisan caching yang kuat untuk mengurangi panggilan LLM yang redundan.",
        impact: "Mengurangi tiket dukungan internal karyawan sebesar 45% dan meningkatkan kecepatan pengambilan pengetahuan sebesar 80% di seluruh organisasi."
      }
    }
  },
  {
    id: "task-manager",
    category: "Mobile Apps",
    tags: ["React Native", "Firebase", "Redux", "Push Notifications"],
    icon: "📱",
    image: "/images/task-manager.png",
    thumbnail: "/images/thumbnails/task-manager.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.taskmanager",
    appStoreUrl: "https://apps.apple.com/app/task-manager-example/id123456789",
    locales: {
      en: {
        title: "Task Management Mobile App",
        description: "Designed and developed a cross-platform task management app using React Native, offering real-time updates, notifications, and offline support.",
        fullDescription: "A high-performance task management solution built for productivity. It features a modern, intuitive interface with real-time sync capabilities, allowing teams to collaborate seamlessly across different devices.",
        challenges: "Developing a robust offline-first architecture that handles data synchronization conflicts gracefully when users regain internet connectivity.",
        solutions: "Leveraged Firebase's offline persistence and implemented a custom optimistic UI strategy to ensure a lag-free experience even on unstable networks.",
        impact: "Achieved a 4.8-star rating on the App Store within the first three months of launch, with over 10,000 active daily users."
      },
      id: {
        title: "Aplikasi Mobile Manajemen Tugas",
        description: "Merancang dan mengembangkan aplikasi manajemen tugas lintas platform menggunakan React Native, menawarkan pembaruan waktu nyata, notifikasi, dan dukungan offline.",
        fullDescription: "Solusi manajemen tugas berkinerja tinggi yang dibangun untuk produktivitas. Menampilkan antarmuka modern dan intuitif dengan kemampuan sinkronisasi waktu nyata, memungkinkan tim berkolaborasi dengan lancar di berbagai perangkat.",
        challenges: "Mengembangkan arsitektur offline-first yang kuat yang menangani konflik sinkronisasi data dengan anggun saat pengguna mendapatkan kembali konektivitas internet.",
        solutions: "Memanfaatkan persistensi offline Firebase dan menerapkan strategi UI optimistik kustom untuk memastikan pengalaman tanpa lag bahkan pada jaringan yang tidak stabil.",
        impact: "Meraih peringkat bintang 4,8 di App Store dalam tiga bulan pertama peluncuran, dengan lebih dari 10.000 pengguna aktif harian."
      }
    }
  },
  {
    id: "sales-dashboard",
    category: "Backend Systems",
    tags: ["Next.js", "Node.js", "MongoDB", "Charts.js", "D3.js"],
    icon: "📊",
    image: "/images/sales-dashboard.png",
    thumbnail: "/images/thumbnails/sales-dashboard.png",
    locales: {
      en: {
        title: "Sales Dashboard & Analytics Platform",
        description: "Built a web-based analytics platform that provides real-time sales data, user engagement metrics, and customizable dashboards for business intelligence.",
        fullDescription: "A sophisticated data visualization platform that transforms complex sales data into actionable insights. It provides executives with real-time KPIs and deep-dive analytics into regional performance and product trends.",
        challenges: "Aggregating and processing millions of daily transactions from multiple sources to provide real-time updates without affecting dashboard performance.",
        solutions: "Designed a microservices architecture for data ingestion and used materialized views in the database to accelerate complex analytical queries.",
        impact: "Improved decision-making speed for the sales team by 60% and identified untapped market opportunities worth $2M in annual revenue."
      },
      id: {
        title: "Dashboard Penjualan & Platform Analitik",
        description: "Membangun platform analitik berbasis web yang menyediakan data penjualan waktu nyata, metrik keterlibatan pengguna, dan dashboard yang dapat disesuaikan untuk intelijen bisnis.",
        fullDescription: "Platform visualisasi data canggih yang mengubah data penjualan kompleks menjadi wawasan yang dapat ditindaklanjuti. Memberikan eksekutif KPI waktu nyata dan analitik mendalam tentang kinerja regional dan tren produk.",
        challenges: "Mengagregasi dan memproses jutaan transaksi harian dari berbagai sumber untuk memberikan pembaruan waktu nyata tanpa mengganggu performa dashboard.",
        solutions: "Merancang arsitektur microservices untuk input data dan menggunakan materialized views di database untuk mempercepat query analitik yang kompleks.",
        impact: "Meningkatkan kecepatan pengambilan keputusan tim penjualan sebesar 60% dan mengidentifikasi peluang pasar yang belum tergarap senilai $2 juta dalam pendapatan tahunan."
      }
    }
  },
  {
    id: "content-scraping",
    category: "Backend Systems",
    tags: ["Node.js", "Cheerio", "Puppeteer", "MongoDB", "Redis"],
    icon: "🕸️",
    image: "/images/content-scraping.png",
    thumbnail: "/images/thumbnails/content-scraping.png",
    locales: {
      en: {
        title: "Automated Content Scraping System",
        description: "Developed a backend system that automates web scraping, data extraction, and processing for competitive analysis and business intelligence.",
        fullDescription: "A scalable industrial-grade web scraping engine capable of navigating complex JavaScript-heavy websites to extract structured data at scale. Includes robust error handling and proxy rotation.",
        challenges: "Bypassing sophisticated anti-bot measures on competitor websites and maintaining scrapers as target website layouts frequently changed.",
        solutions: "Implemented a dynamic proxy rotation system and a custom DSL for scraper configurations that allows for quick updates without code redeployment.",
        impact: "Automated the collection of daily pricing data for over 500,000 products, saving the marketing team 1,000+ manual hours per month."
      },
      id: {
        title: "Sistem Scraping Konten Otomatis",
        description: "Mengembangkan sistem backend yang mengotomatiskan scraping web, ekstraksi data, dan pemrosesan untuk analisis kompetitif dan intelijen bisnis.",
        fullDescription: "Mesin scraping web kelas industri yang skalabel, mampu menavigasi situs web berbasis JavaScript yang kompleks untuk mengekstrak data terstruktur dalam skala besar. Mencakup penanganan kesalahan yang kuat dan rotasi proxy.",
        challenges: "Melewati langkah-langkah anti-bot yang canggih di situs web pesaing dan memelihara scraper seiring tata letak situs web target yang sering berubah.",
        solutions: "Menerapkan sistem rotasi proxy dinamis dan DSL kustom untuk konfigurasi scraper yang memungkinkan pembaruan cepat tanpa redeploy kode.",
        impact: "Mengotomatiskan pengumpulan data harga harian untuk lebih dari 500.000 produk, menghemat lebih dari 1.000 jam kerja manual tim pemasaran setiap bulannya."
      }
    }
  }
];
