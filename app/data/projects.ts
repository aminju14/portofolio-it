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
  image: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
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
    id: "restuque",
    category: "Enterprise System",
    tags: ["React Native", "Node.js", "Next.js", "RabbitMQ", "PostgreSQL", "Laravel"],
    icon: "💼",
    image: "/images/restuque-mockup-dark.png",
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
