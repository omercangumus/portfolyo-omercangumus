/**
 * omercangumus.com — Internationalization & Theme Management
 * Pure Vanilla JavaScript — zero runtime dependencies.
 * ES module shared by the portfolio and CV pages.
 */

const DEFAULT_LANGUAGE = "tr";
const STORAGE_KEY = "preferredLang";
const SUPPORTED_LANGUAGES = new Set(["tr", "en"]);

const THEME_STORAGE_KEY = "portfolio-theme";
const SUPPORTED_THEMES = new Set(["light", "dark"]);
const THEME_COLORS = Object.freeze({ light: "#f5f2eb", dark: "#080607" });

const htmlTranslationKeys = new Set([
    "heroTitle",
    "experienceTitle",
    "workTitle",
    "practiceTitle",
    "backgroundTitle",
    "educationTitle",
    "contactTitle",
    "isbankTitle",
    "gambiaTitle",
    "infraTitle",
    "aiopsTitle",
    "mlopsTitle",
    "devopsTitle",
    "cvRole",
    "cvEducationTitle",
    "cvExperienceTitle",
    "cvProjectsTitle",
    "cvPracticeTitle",
]);

export const translations = Object.freeze({
    tr: Object.freeze({
        // Navigation & General
        skipLink: "Ana içeriğe geç",
        homeLabel: "ÖCG · Ömer Can Gümüş, ana sayfa",
        navLabel: "Ana menü",
        mobileNavLabel: "Mobil menü",
        languageLabel: "Dil seçimi",
        themeLabel: "Tema seçimi",
        themeToggleLight: "Açık tema",
        themeToggleDark: "Koyu tema",
        openMenu: "Menüyü aç",
        navExperience: "Deneyim",
        navWork: "Projeler",
        navPractice: "Teknik odak",
        navBackground: "Eğitim",
        navContact: "İletişim",
        mobileMenuNote: "MLOps · AIOps · DevOps",

        // Hero Section
        heroEyebrow: "MLOps · AIOps · DevOps",
        heroTitle: "MLOps, AIOps ve DevOps odaklı<br>Yazılım Mühendisliği öğrencisi.",
        heroIntro: "Log analizi, Prometheus/Grafana gözlemlenebilirliği, Airflow/MLflow ile MLOps pipeline’ları ve bulut altyapı otomasyonu üzerine çalışıyorum. Kurumsal staj tecrübelerimi açık kaynak sistemlerle geliştiriyorum.",
        seeWork: "Seçili projeleri gör",
        viewCv: "Özgeçmiş (PDF)",
        profileLinksLabel: "Profil bağlantıları",
        downloadPdf: "CV (PDF)",

        // Career Signal Rail (Hero Aside)
        careerSignalTitle: "Kariyer Sinyali",
        careerDuration: "Seçili roller · 2025—2026",
        isbankDateShort: "Eyl — Kas 2026",
        isbankRoleShort: "AI Engineer Intern · Türkiye İş Bankası",
        isbankShort: "Yapay zeka modelleri · MLOps · model izleme",
        infraDateShort: "Tem — Ağu 2026",
        infraRoleShort: "System Infrastructure Intern · Beko",
        infraShort: "SCCM · yama yönetimi · altyapı otomasyonu",
        gambiaDateShort: "Haz 2026 — Günümüz",
        gambiaRoleShort: "System Infra & DevOps Fellow · Gambia Garden",
        gambiaShort: "Canlıya alma · sunucu altyapısı · CI/CD · SSL/DNS",
        aiopsDateShort: "Ara 2025 — Tem 2026",
        aiopsRoleShort: "AIOps Engineer · Beko PREP",
        aiopsShort: "Log analizi · olay inceleme · gözlemlenebilirlik",
        followProgression: "Deneyim detaylarını incele",

        // Proof Strip
        profileSummaryLabel: "Kısa profil",
        proofOneTitle: "MLOps & Model İzleme",
        proofOneText: "Airflow, MLflow, model metrikleri ve veri kayması (PSI/KS) analizleri",
        proofTwoTitle: "Altyapı & DevOps",
        proofTwoText: "Docker, NGINX, CI/CD, canlıya alma otomasyonu ve SCCM",
        proofThreeTitle: "Gözlemlenebilirlik",
        proofThreeText: "Prometheus, Grafana, Loki, Alertmanager ve SLO/SLI panelleri",

        // Experience Chapter
        chapterExperience: "Deneyim",
        experienceTitle: "Kurumsal ve Açık Kaynak<br>MLOps, AIOps ve altyapı deneyimi.",
        experienceIntro: "Beko Corporate’te AIOps Engineer ve System Infrastructure Intern, Türkiye İş Bankası’nda AI Engineer Intern ve Gambia Garden’da System Infrastructure & DevOps Fellow olarak görev aldım.",
        progressionHeader: "Deneyim Zaman Çizelgesi",
        progressionLabel: "Kariyer Özeti · 2025—2026",

        isbankDate: "Eylül 2026 — Kasım 2026",
        isbankTitle: "AI Engineer Intern · Türkiye İş Bankası",
        isbankDescription: "Yapay zeka modellerinin MLOps pipeline’larına entegrasyonu, MLflow ve Airflow ile model performans takibi, deney kaydı ve veri/model kayması (PSI, KS drift) analizleri üzerine çalışmalar.",
        isbankTools: "Python / MLflow / Airflow / MLOps / Model Drift (PSI/KS) / LLM",

        infraDate: "Temmuz 2026 — Ağustos 2026",
        infraTitle: "System Infrastructure Intern · Beko Corporate",
        infraRole: "System Infrastructure Intern · Beko Corporate",
        infraDescription: "SCCM modernizasyonu, yama yönetimi ve uyumluluk analizlerine katkı sağladım. Windows/Linux kurumsal altyapı operasyonlarını inceledim ve tekrarlanan işler için otomasyon fırsatları üzerinde çalıştım.",
        infraTools: "SCCM / yama yönetimi / uyumluluk / Windows / Linux / PowerShell",

        gambiaDate: "Haziran 2026 — Günümüz",
        gambiaTitle: "System Infrastructure & DevOps Fellow · Gambia Garden",
        gambiaDescription: "Web platformunun production ortamında canlıya alınması, Linux sunucu kurulum ve yapılandırması, NGINX, SSL/DNS yönetimi ve Docker tabanlı CI/CD dağıtım otomasyonları.",
        gambiaTools: "DevOps / Production Deployment / Docker / NGINX / CI/CD / Linux / DNS / SSL",

        aiopsDate: "Aralık 2025 — Temmuz 2026",
        aiopsTitle: "AIOps Engineer — PREP Program · Beko Corporate",
        aiopsRole: "AIOps Engineer — PREP Program · Beko Corporate",
        aiopsDescription: "Docker tabanlı uygulama loglarını inceledim; olay ve kök neden analizi çalışmalarına katıldım. DevOps ekipleriyle birlikte anomali örüntülerini, izleme ve gözlemlenebilirlik akışlarını değerlendirdim.",
        aiopsTools: "Docker / log analizi / anomali tespiti / izleme / gözlemlenebilirlik",

        otherExperienceTitle: "Diğer deneyimler",
        habitatDate: "Aralık 2025 — Günümüz",
        habitatTitle: "Gönüllü Eğitmen · Habitat Derneği",
        habitatText: "Finansal okuryazarlık ve dijital yetkinlikler üzerine gönüllü eğitimler.",
        qnbDate: "Ağustos 2025",
        qnbTitle: "QNB 101 Programı · QNB Türkiye",
        qnbText: "Bankacılık teknolojileri, fintech ve dijital dönüşüm odaklı eğitim programı.",
        elmarDate: "Ekim 2024",
        elmarTitle: "Yazılım Geliştirme Deneyimi · Elmar Yazılım",
        elmarText: "Yazılım geliştirme ve test süreçlerine odaklanan kısa süreli çalışma.",

        // Projects Chapter
        chapterWork: "Projeler",
        workTitle: "MLOps, AIOps ve DevOps<br>odaklı projeler.",
        workIntro: "Seçili projeler; anomali tespiti, Prometheus/Grafana gözlemlenebilirliği, MLOps pipeline’ları, cloud maliyet optimizasyonu ve kestirimci bakıma odaklanıyor.",
        problemLabel: "Problem",
        approachLabel: "Yaklaşım",
        architectureLabel: "Mimari",
        scopeLabel: "Kapsam",
        sourceOnGithub: "GitHub Reposu",

        // Project 1: GhostCost
        ghostType: "FinOps / AIOps Bulut Maliyet Platformu",
        ghostSummary: "AWS harcama sinyallerini, kaynak bazlı israf önerilerini ve maliyet sıçramalarını tek akışta görünür kılan FinOps/AIOps platformu.",
        ghostPreviewAlt: "GhostCost örnek veri kullanan canlı sandbox paneli",
        ghostPreviewCaption: "Canlı sandbox ekranı · Mock Startup Co. örnek verileri.",
        ghostFlowLabel: "GhostCost teknik akışı",
        ghostFlowOne: "AWS maliyet verisi",
        ghostFlowTwo: "Salt okunur tarama",
        ghostFlowThree: "Anomali + israf tespiti",
        ghostFlowFour: "Öneri + rapor",
        ghostProblem: "Servis ve kaynaklara dağılan AWS maliyetlerinde beklenmeyen artışları ve atıl kaynakları takip etmek zorlaşıyor.",
        ghostApproach: "Açıkça işaretlenmiş örnek AWS verileri üzerinde 21 günlük medyan tabanını ve salt okunur IAM/STS ExternalId bağlantı akışını modelliyor.",
        ghostDemo: "GhostCost.com",
        ghostSite: "GhostCost.com",

        // Project 2: Cosmic Pipeline
        cosmicType: "Açık kaynak · MLOps / anomali tespiti",
        cosmicSummary: "Radyasyon kaynaklı uydu telemetrisi bozulmalarını kural, istatistik ve ML/DL katmanlarıyla tespit edip yalnızca işaretli noktaları onaran açık kaynak pipeline.",
        cosmicFlowLabel: "Cosmic Pipeline teknik akışı",
        cosmicFlowOne: "Telemetri + detrend",
        cosmicFlowTwo: "Katmanlı tespit",
        cosmicFlowThree: "Ensemble kararı",
        cosmicFlowFour: "Onarım + doğrulama",
        cosmicProblem: "Veri boşluğu, ani sıçrama, sensör donması ve veri kayması (drift) gibi farklı bozulma türleri tek yöntemle güvenilir biçimde yakalanamıyor.",
        cosmicApproach: "Deterministik kontrolleri Z-score, kayan pencere, Isolation Forest ve LSTM Autoencoder ile katmanlı bir akışta birleştiriyor.",

        // Project 3: Reliability Platform
        reliabilityType: "Açık kaynak · AIOps / SRE prototipi",
        reliabilitySummary: "Telemetriyi SLO değerlendirmesi, anomali tespiti, veri kayması izleme ve geri alınabilir iyileştirme komutlarına bağlayan AIOps/SRE mimari prototipi.",
        reliabilityFlowLabel: "Cloud-Native Reliability Platform teknik akışı",
        reliabilityFlowOne: "Telemetri",
        reliabilityFlowTwo: "Anomali + SLO",
        reliabilityFlowThree: "Simüle iyileştirme",
        reliabilityFlowFour: "Gözlemlenebilirlik + IaC",
        reliabilityArchitecture: "FastAPI ve Redis telemetri akışı; Prometheus/Grafana gözlemlenebilirliği; Docker, Kubernetes ve Terraform/AWS altyapı tanımları.",
        reliabilityScope: "Z-score, EMA ve PSI tabanlı izleme ile simüle edilmiş, geri alınabilir iyileştirme akışları.",

        // Project 4: AegisOps
        aegisType: "Açık kaynak · Kestirimci bakım MVP’si",
        aegisSummary: "Sıcaklık, basınç, titreşim ve devir telemetrisini kural katmanı ile Isolation Forest üzerinden işleyip olay kaydına dönüştüren kestirimci bakım MVP’si.",
        aegisFlowLabel: "AegisOps teknik akışı",
        aegisFlowOne: "Ekipman telemetrisi",
        aegisFlowTwo: "Kural + Isolation Forest",
        aegisFlowThree: "Olay kaydı",
        aegisFlowFour: "UI konsepti",
        aegisProblem: "Ekipman telemetrisindeki eşik ihlallerini ve davranış değişimlerini bakım ekiplerinin inceleyebileceği olaylara dönüştürmek.",
        aegisApproach: "FastAPI arka uç, kural tabanlı kontrolleri Isolation Forest ile birleştiriyor. Ayrı canlı UI konsepti bu akışı görselleştiriyor; işlemsel bir ürün değil.",
        aegisDemo: "UI Konsepti",

        archiveText: "Diğer projeler",
        browseGithub: "Tüm GitHub Depoları",

        // Practice Chapter (Technical Focus)
        chapterPractice: "Teknik odak",
        practiceTitle: "Teknik çalışma alanlarım.",
        practiceIntro: "Ağırlıklı olarak MLOps pipeline’ları, Prometheus/Grafana gözlemlenebilirliği, otomasyon, DevOps dağıtım altyapısı ve makine öğrenmesi operasyonları üzerine çalışıyorum.",

        observeTitle: "Gözlemlenebilirlik & Metrikler",
        observeText: "Log ve metriklerden sistem davranışını anlamak; Prometheus, Grafana ve Loki ile anomali takibi, SLO/SLI panelleri ve Alertmanager uyarı kuralları kurgulamak.",
        observeTools: "Prometheus / Grafana / Loki / Alertmanager / Log Analysis / SLO & SLI",

        mlopsTitle: "MLOps & Model Yaşam Döngüsü",
        mlopsText: "Makine öğrenmesi modellerini Airflow ile otomatik eğitmek, MLflow ile model/deney takibi yapmak ve model kayması (PSI/KS drift) metriklerini izlemek.",
        mlopsTools: "Airflow / MLflow / Model Monitoring / Data Drift (PSI/KS) / PyTorch / scikit-learn",

        automateTitle: "Otomasyon ve IaC",
        automateText: "Tekrarlanan operasyonları Python ve altyapı koduyla (Terraform) otomatikleştirmek.",
        automateTools: "Python / Terraform / Bash / GitHub Actions",

        shipTitle: "Konteyner ve Dağıtım (DevOps)",
        shipText: "Uygulamaları Docker, Kubernetes ve CI/CD akışlarıyla tutarlı biçimde canlıya almak ve production sunucularını yapılandırmak.",
        shipTools: "Docker / Kubernetes / CI/CD / NGINX / AWS / Linux",

        operateTitle: "Sistem ve Altyapı Operasyonları",
        operateText: "Windows/Linux altyapısı, canlıya alma süreçleri, SCCM, yama yönetimi ve uyumluluk süreçleri.",
        operateTools: "Linux / Windows / SCCM / Patch Management / Compliance / Production Deployment",

        // Education Chapter
        chapterBackground: "Eğitim",
        backgroundTitle: "Eğitim ve<br>teknik gelişim.",
        educationLabel: "Eğitim",
        educationTitle: "Fırat Üniversitesi<br>Yazılım Mühendisliği",
        educationText: "4. sınıf öğrencisi · Algoritma, yazılım mimarisi ve sistem derslerini MLOps, AIOps ve DevOps projeleriyle destekliyorum.",
        certificatesLabel: "Seçili eğitimler ve sertifikalar",
        allCertificates: "Tümünü LinkedIn’de gör",

        // Contact Chapter
        chapterContact: "İletişim",
        contactTitle: "MLOps, AIOps veya DevOps<br>üzerine konuşalım.",
        contactText: "MLOps, AIOps, DevOps, bulut altyapısı ve platform mühendisliği rollerine açığım.",
        footerText: "© 2025 Ömer Can Gümüş.",

        // CV Page Specific
        cvSkip: "Özgeçmiş içeriğine geç",
        cvBackHome: "Portfolyoya dön",
        cvLanguageLabel: "CV dili",
        cvToolbarLabel: "CV araçları",
        cvViewPdf: "PDF’yi görüntüle",
        cvDownloadPdf: "PDF’yi indir",
        cvAvailability: "MLOps · AIOps · DevOps",
        cvKicker: "ÖZGEÇMİŞ · 2026",
        cvRole: "MLOps, AIOps ve DevOps odaklı Yazılım Mühendisliği öğrencisi",
        cvSummary: "Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. Beko Corporate (AIOps & Altyapı), Türkiye İş Bankası (AI Engineer Intern) ve Gambia Garden (DevOps Fellow) tecrübelerimi MLOps (Airflow/MLflow), Prometheus/Grafana gözlemlenebilirliği ve altyapı otomasyonu ile geliştiriyorum.",
        cvContactTitle: "İletişim ve bağlantılar",
        cvEmailLabel: "E-posta",
        cvLinkedinLabel: "LinkedIn profili",
        cvGithubLabel: "GitHub profili",
        cvExperienceTitle: "Deneyim",
        cvBekoGroup: "Kariyer & Profesyonel Roller",

        cvIsbankDate: "Eylül 2026 — Kasım 2026",
        cvIsbankRole: "AI Engineer Intern",
        cvIsbankOrg: "Türkiye İş Bankası",
        cvIsbankSummary: "Yapay zeka sistemleri, MLOps pipeline’ları ve model izleme odaklı staj programı.",
        cvIsbankBullet1: "MLflow ve Airflow ile model eğitim, versiyonlama ve izleme (drift tespiti, PSI metrikleri) mimarilerini inceledim.",
        cvIsbankBullet2: "Yapay zeka ve LLM tabanlı çözümlerin performans değerlendirmelerine katıldım.",

        cvInfraDate: "Temmuz 2026 — Ağustos 2026",
        cvInfraRole: "System Infrastructure Intern",
        cvInfraOrg: "Beko Corporate",
        cvInfraSummary: "Kurumsal sistem altyapısı, uyumluluk ve yama yönetimi odaklı staj.",
        cvInfraBullet1: "SCCM modernizasyonu ve yama yönetimi süreçleri üzerinde çalıştım.",
        cvInfraBullet2: "Uyumluluk analizine ve Windows/Linux altyapı operasyonlarına katkı sağladım.",
        cvInfraBullet3: "Kurumsal DevOps ve altyapı iş akışlarındaki otomasyon fırsatlarını inceledim.",

        cvGambiaDate: "Haziran 2026 — Günümüz",
        cvGambiaRole: "System Infrastructure & DevOps Fellow",
        cvGambiaOrg: "Gambia Garden",
        cvGambiaSummary: "Dijital platform altyapısı, canlıya alma (deployment) ve DevOps operasyonları.",
        cvGambiaBullet1: "Web platformunu ve sunucu altyapısını production ortamında canlıya aldım ve yüksek kullanılabilirlik sağladım.",
        cvGambiaBullet2: "Docker, NGINX, SSL/DNS yapılandırması ve CI/CD otomasyonları ile güvenilir dağıtım süreçleri oluşturdum.",

        cvAiopsDate: "Aralık 2025 — Temmuz 2026",
        cvAiopsRole: "AIOps Engineer — PREP Program",
        cvAiopsOrg: "Beko Corporate",
        cvAiopsSummary: "Konteyner logları, olay inceleme ve gözlemlenebilirlik odaklı kurumsal gelişim programı.",
        cvAiopsBullet1: "Docker tabanlı uygulama loglarını inceledim.",
        cvAiopsBullet2: "Olay ve kök neden analizlerine ve anomali örüntüsü değerlendirmelerine katıldım.",
        cvAiopsBullet3: "DevOps ekipleriyle izleme ve gözlemlenebilirlik akışlarını inceledim.",

        cvSecondaryTitle: "Diğer deneyimler",
        cvHabitatDate: "Aralık 2025 — Günümüz",
        cvHabitatRole: "Gönüllü Eğitmen",
        cvHabitatOrg: "Habitat Derneği",
        cvHabitatSummary: "Finansal okuryazarlık ve dijital yetkinlikler üzerine gönüllü eğitimler veriyorum.",
        cvQnbDate: "Ağustos 2025",
        cvQnbRole: "QNB 101 Programı",
        cvQnbOrg: "QNB Türkiye",
        cvQnbSummary: "Bankacılık teknolojileri, fintech ve dijital dönüşüm odaklı eğitim programı.",
        cvElmarDate: "Ekim 2024",
        cvElmarRole: "Yazılım Geliştirme Deneyimi",
        cvElmarOrg: "Elmar Yazılım",
        cvElmarSummary: "Yazılım geliştirme ve test süreçlerine odaklanan kısa süreli çalışma.",

        cvProjectsTitle: "Seçili projeler",
        cvGhostMeta: "Next.js · FinOps · AWS maliyet analizi",
        cvGhostSummary: "AWS harcama sinyallerini, kaynak bazlı israf önerilerini ve maliyet sıçramalarını tek akışta görünür kılan FinOps/AIOps platformu.",
        cvGhostResult: "Açıkça işaretlenmiş örnek AWS verileriyle kaynak önerilerini ve 21 günlük medyan tabanını gösteriyor.",
        cvGhostLinkLabel: "GhostCost.com web sitesini aç",
        cvCosmicTitle: "Cosmic Pipeline",
        cvCosmicMeta: "Python · DSP · Isolation Forest · LSTM",
        cvCosmicSummary: "Uydu telemetrisindeki farklı bozulma türlerini katmanlı tespit ve kontrollü onarımla işleyen açık kaynak pipeline.",
        cvCosmicResult: "Depoda 17 test dosyası bulunuyor; incelenen son GitHub Actions çalışması başarılı.",
        cvReliabilityTitle: "Cloud-Native Reliability Platform",
        cvReliabilityMeta: "FastAPI · Prometheus · Kubernetes · Terraform",
        cvReliabilitySummary: "Telemetriyi SLO değerlendirmesi, anomali tespiti, veri kayması izleme ve geri alınabilir iyileştirme komutlarına bağlayan AIOps/SRE mimari prototipi.",
        cvReliabilityResult: "Redis, Prometheus, Docker, Kubernetes ve Terraform/AWS katmanlarını içeriyor; iyileştirme akışı simüle ediliyor.",
        cvAegisMeta: "FastAPI · Isolation Forest · SQLite · Docker",
        cvAegisSummary: "Sıcaklık, basınç, titreşim ve devir telemetrisini kural katmanı ile Isolation Forest üzerinden işleyip olay kaydına dönüştüren kestirimci bakım MVP’si.",
        cvAegisResult: "FastAPI arka uç ve ayrı bir canlı UI konsepti bulunuyor; UI işlevsel ürün değil, görsel prototip.",
        cvProjectLink: "GitHub Reposu",
        cvCosmicLinkLabel: "Cosmic Pipeline GitHub deposunu aç",
        cvReliabilityLinkLabel: "Cloud-Native Reliability Platform GitHub deposunu aç",
        cvAegisRepoLabel: "AegisOps GitHub deposunu aç",
        cvAegisDemoLabel: "AegisOps UI konseptini aç",

        cvPracticeTitle: "Teknik odak",
        cvPracticeCloud: "Bulut ve Altyapı (DevOps)",
        cvPracticeCloudDesc: "AWS, Terraform, Kubernetes, NGINX, Linux ve canlıya alma otomasyonu",
        cvPracticeAIOps: "MLOps, AIOps ve Gözlemlenebilirlik",
        cvPracticeAIOpsDesc: "Airflow, MLflow, Prometheus, Grafana, Loki ve model drift (PSI) metrikleri",
        cvPracticeDelivery: "CI/CD ve Otomasyon",
        cvPracticeDeliveryDesc: "Docker, GitHub Actions, GitLab CI ve otomatik CI/CD deployment pipeline’ları",
        cvPracticeEnterprise: "Sistem ve Sunucu Yönetimi",
        cvPracticeEnterpriseDesc: "SCCM, yama yönetimi, Linux sunucu yönetimi, SSL/DNS ve uyumluluk",

        cvEducationTitle: "Eğitim",
        cvEducationSchool: "Fırat Üniversitesi",
        cvEducationDegree: "Yazılım Mühendisliği",
        cvEducationStatus: "4. sınıf öğrencisi",
        cvCertTitle: "Seçili eğitimler ve sertifikalar",
        cvCert1: "AWS Cloud Practitioner Essentials",
        cvCert2: "AWS Observability",
        cvCert3: "Introduction to MLOps",
        cvCert4: "Machine Learning in Production",
        cvCert5: "LLMOps",
        cvCert6: "CI/CD Fundamentals with GitHub Actions",
        cvFooter: "© 2025 Ömer Can Gümüş",
        cvPrintNote: "Güncel bağlantılar için omercangumus.com adresini ziyaret edin.",
    }),

    en: Object.freeze({
        // Navigation & General
        skipLink: "Skip to main content",
        homeLabel: "ÖCG · Ömer Can Gümüş, home",
        navLabel: "Primary navigation",
        mobileNavLabel: "Mobile navigation",
        languageLabel: "Language selection",
        themeLabel: "Theme selection",
        themeToggleLight: "Light mode",
        themeToggleDark: "Dark mode",
        openMenu: "Open menu",
        navExperience: "Experience",
        navWork: "Projects",
        navPractice: "Technical focus",
        navBackground: "Education",
        navContact: "Contact",
        mobileMenuNote: "MLOps · AIOps · DevOps",

        // Hero Section
        heroEyebrow: "MLOps · AIOps · DevOps",
        heroTitle: "Software engineering student<br>focused on MLOps, AIOps, and DevOps.",
        heroIntro: "I work on log analysis, Prometheus/Grafana observability, MLOps pipelines using Airflow/MLflow, and cloud infrastructure automation. I expand on my enterprise internship experience through open-source systems.",
        seeWork: "View selected projects",
        viewCv: "Resume (PDF)",
        profileLinksLabel: "Profile links",
        downloadPdf: "PDF résumé",

        // Career Signal Rail (Hero Aside)
        careerSignalTitle: "Career Signal",
        careerDuration: "Selected roles · 2025—2026",
        isbankDateShort: "Sep — Nov 2026",
        isbankRoleShort: "AI Engineer Intern · Türkiye İş Bankası",
        isbankShort: "AI models · MLOps · model monitoring",
        infraDateShort: "Jul — Aug 2026",
        infraRoleShort: "System Infrastructure Intern · Beko",
        infraShort: "SCCM · patch management · infrastructure automation",
        gambiaDateShort: "Jun 2026 — Present",
        gambiaRoleShort: "System Infra & DevOps Fellow · Gambia Garden",
        gambiaShort: "Web deployment · server infra · CI/CD · SSL/DNS",
        aiopsDateShort: "Dec 2025 — Jul 2026",
        aiopsRoleShort: "AIOps Engineer · Beko PREP",
        aiopsShort: "Log analysis · incident review · observability",
        followProgression: "Explore experience details",

        // Proof Strip
        profileSummaryLabel: "Profile summary",
        proofOneTitle: "MLOps & Model Monitoring",
        proofOneText: "Airflow, MLflow, model performance metrics, and data drift (PSI/KS) tracking",
        proofTwoTitle: "Infrastructure & DevOps",
        proofTwoText: "Docker, NGINX, CI/CD, production deployment automation, and SCCM",
        proofThreeTitle: "Observability",
        proofThreeText: "Prometheus, Grafana, Loki, Alertmanager, and SLO/SLI dashboards",

        // Experience Chapter
        chapterExperience: "Experience",
        experienceTitle: "Enterprise and Open-Source<br>MLOps, AIOps, and Infrastructure experience.",
        experienceIntro: "My background includes roles as AIOps Engineer & System Infrastructure Intern at Beko Corporate, AI Engineer Intern at Türkiye İş Bankası, and System Infrastructure & DevOps Fellow at Gambia Garden.",
        progressionHeader: "Experience Timeline",
        progressionLabel: "Career Summary · 2025—2026",

        isbankDate: "September 2026 — November 2026",
        isbankTitle: "AI Engineer Intern · Türkiye İş Bankası",
        isbankDescription: "Integrating AI models into MLOps pipelines, monitoring model performance and experiments using MLflow and Airflow, and analyzing data/model drift metrics (PSI, KS drift).",
        isbankTools: "Python / MLflow / Airflow / MLOps / Model Drift (PSI/KS) / LLM",

        infraDate: "July 2026 — August 2026",
        infraTitle: "System Infrastructure Intern · Beko Corporate",
        infraRole: "System Infrastructure Intern · Beko Corporate",
        infraDescription: "Contributed to SCCM modernization, patch-management optimization, and compliance analysis. Evaluated automation opportunities in enterprise Windows/Linux infrastructure operations.",
        infraTools: "SCCM / patch management / compliance / Windows / Linux / PowerShell",

        gambiaDate: "June 2026 — Present",
        gambiaTitle: "System Infrastructure & DevOps Fellow · Gambia Garden",
        gambiaDescription: "Deploying web platforms to production environments, configuring Linux server infrastructure, NGINX setup, SSL/DNS management, and Docker-based CI/CD deployment pipelines.",
        gambiaTools: "DevOps / Production Deployment / Docker / NGINX / CI/CD / Linux / DNS / SSL",

        aiopsDate: "December 2025 — July 2026",
        aiopsTitle: "AIOps Engineer — PREP Program · Beko Corporate",
        aiopsRole: "AIOps Engineer — PREP Program · Beko Corporate",
        aiopsDescription: "Reviewed logs from Docker-based applications and participated in incident and root-cause analysis. Alongside DevOps teams, examined anomaly patterns and observability workflows.",
        aiopsTools: "Docker / log analysis / anomaly patterns / monitoring / observability",

        otherExperienceTitle: "Additional experience",
        habitatDate: "December 2025 — Present",
        habitatTitle: "Volunteer Trainer · Habitat Association",
        habitatText: "Volunteer sessions on financial literacy and digital skills.",
        qnbDate: "August 2025",
        qnbTitle: "QNB 101 Program · QNB Türkiye",
        qnbText: "A training program focused on banking technology, fintech, and digital transformation.",
        elmarDate: "October 2024",
        elmarTitle: "Software Development Experience · Elmar Software",
        elmarText: "A short placement focused on software development and testing.",

        // Projects Chapter
        chapterWork: "Projects",
        workTitle: "Projects focused on<br>MLOps, AIOps, and DevOps.",
        workIntro: "Selected work in anomaly detection, Prometheus/Grafana observability, MLOps data pipelines, cloud cost automation, and predictive maintenance.",
        problemLabel: "Problem",
        approachLabel: "Approach",
        architectureLabel: "Architecture",
        scopeLabel: "Scope",
        sourceOnGithub: "GitHub Repository",

        // Project 1: GhostCost
        ghostType: "FinOps / AIOps Cloud Cost Platform",
        ghostSummary: "A FinOps/AIOps platform that brings AWS spend signals, resource-level waste recommendations, and cost spikes into one unified view.",
        ghostPreviewAlt: "GhostCost live sandbox dashboard using sample data",
        ghostPreviewCaption: "Live sandbox screen · Mock Startup Co. sample data.",
        ghostFlowLabel: "GhostCost technical flow",
        ghostFlowOne: "AWS cost data",
        ghostFlowTwo: "Read-only scan",
        ghostFlowThree: "Anomaly + waste detection",
        ghostFlowFour: "Recommendation + report",
        ghostProblem: "When AWS costs are spread across services and resources, unexpected increases and idle resources are difficult to track.",
        ghostApproach: "Models a 21-day median baseline and a read-only IAM/STS ExternalId connection flow using clearly labeled sample AWS data.",
        ghostDemo: "GhostCost.com",
        ghostSite: "GhostCost.com",

        // Project 2: Cosmic Pipeline
        cosmicType: "Open source · MLOps / anomaly detection",
        cosmicSummary: "A pipeline that detects radiation-related corruption in satellite telemetry through rule-based, statistical, and ML/DL layers, then repairs only the flagged points.",
        cosmicFlowLabel: "Cosmic Pipeline technical flow",
        cosmicFlowOne: "Telemetry + detrending",
        cosmicFlowTwo: "Layered detection",
        cosmicFlowThree: "Ensemble decision",
        cosmicFlowFour: "Repair + validation",
        cosmicProblem: "A single method cannot reliably capture data gaps, sudden spikes, sensor freezes, and drift.",
        cosmicApproach: "It combines deterministic checks with Z-score, sliding-window analysis, Isolation Forest, and an LSTM Autoencoder in a layered pipeline.",

        // Project 3: Reliability Platform
        reliabilityType: "Open source · AIOps / SRE prototype",
        reliabilitySummary: "An AIOps/SRE architecture prototype connecting telemetry with SLO evaluation, anomaly detection, drift monitoring, and reversible remediation commands.",
        reliabilityFlowLabel: "Cloud-Native Reliability Platform technical flow",
        reliabilityFlowOne: "Telemetry",
        reliabilityFlowTwo: "Anomaly + SLO",
        reliabilityFlowThree: "Simulated remediation",
        reliabilityFlowFour: "Observability + IaC",
        reliabilityArchitecture: "FastAPI and Redis telemetry flow; Prometheus/Grafana observability; Docker, Kubernetes, and Terraform/AWS infrastructure definitions.",
        reliabilityScope: "Z-score, EMA, and PSI-based monitoring with simulated, reversible remediation flows.",

        // Project 4: AegisOps
        aegisType: "Open source · Predictive maintenance MVP",
        aegisSummary: "A predictive-maintenance MVP that processes temperature, pressure, vibration, and RPM telemetry through rules and Isolation Forest, then records detected events.",
        aegisFlowLabel: "AegisOps technical flow",
        aegisFlowOne: "Equipment telemetry",
        aegisFlowTwo: "Rules + Isolation Forest",
        aegisFlowThree: "Event record",
        aegisFlowFour: "UI concept",
        aegisProblem: "Turn threshold violations and behavior changes in equipment telemetry into events that maintenance teams can review.",
        aegisApproach: "The FastAPI backend combines rule-based checks with Isolation Forest. A separate live UI concept visualizes the flow; it is not a functional product.",
        aegisDemo: "UI Concept",

        archiveText: "More projects",
        browseGithub: "All GitHub Repositories",

        // Practice Chapter (Technical Focus)
        chapterPractice: "Technical focus",
        practiceTitle: "Technical focus.",
        practiceIntro: "My work centers on MLOps pipelines, Prometheus/Grafana observability, automation, DevOps deployment infrastructure, and machine-learning operations.",

        observeTitle: "Observability & Metrics",
        observeText: "Understanding system behavior through logs, metrics, and traces; building anomaly dashboards, SLO/SLI alert rules, and notification flows with Prometheus, Grafana, Loki, and Alertmanager.",
        observeTools: "Prometheus / Grafana / Loki / Alertmanager / Log Analysis / SLO & SLI",

        mlopsTitle: "MLOps & Model Lifecycle",
        mlopsText: "Automating ML model training with Airflow pipelines, experiment tracking with MLflow, and monitoring data/model drift (PSI/KS) and model health.",
        mlopsTools: "Airflow / MLflow / Model Monitoring / Data Drift (PSI/KS) / PyTorch / scikit-learn",

        automateTitle: "Automation and IaC",
        automateText: "Automating repetitive operational work with Python and Infrastructure as Code (Terraform).",
        automateTools: "Python / Terraform / Bash / GitHub Actions",

        shipTitle: "Containers & Delivery (DevOps)",
        shipText: "Packaging and deploying applications consistently using Docker, Kubernetes, NGINX, and CI/CD pipelines.",
        shipTools: "Docker / Kubernetes / CI/CD / NGINX / AWS / Linux",

        operateTitle: "Systems & Infrastructure Operations",
        operateText: "Windows/Linux infrastructure, production deployment, SCCM, patch management, and compliance workflows.",
        operateTools: "Linux / Windows / SCCM / Patch Management / Compliance / Production Deployment",

        // Education Chapter
        chapterBackground: "Education",
        backgroundTitle: "Education and<br>continuous learning.",
        educationLabel: "Education",
        educationTitle: "Fırat University<br>Software Engineering",
        educationText: "Fourth-year student · Applying coursework in algorithms, software architecture, and systems to MLOps, AIOps, and DevOps projects.",
        certificatesLabel: "Selected courses and certificates",
        allCertificates: "View all on LinkedIn",

        // Contact Chapter
        chapterContact: "Contact",
        contactTitle: "Let’s talk about<br>MLOps, AIOps, or DevOps.",
        contactText: "I’m open to roles in MLOps, AIOps, DevOps, cloud infrastructure, and platform engineering.",
        footerText: "© 2025 Ömer Can Gümüş.",

        // CV Page Specific
        cvSkip: "Skip to CV content",
        cvBackHome: "Back to portfolio",
        cvLanguageLabel: "CV language",
        cvToolbarLabel: "CV tools",
        cvViewPdf: "View PDF",
        cvDownloadPdf: "Download PDF",
        cvAvailability: "MLOps · AIOps · DevOps",
        cvKicker: "CURRICULUM VITAE · 2026",
        cvRole: "Software engineering student focused on MLOps, AIOps, and DevOps",
        cvSummary: "Fourth-year software engineering student at Fırat University. Building on experience across Beko Corporate (AIOps & Infra), Türkiye İş Bankası (AI Engineer Intern), and Gambia Garden (DevOps Fellow) through MLOps (Airflow/MLflow), Prometheus/Grafana observability, and infrastructure automation.",
        cvContactTitle: "Contact and links",
        cvEmailLabel: "Email",
        cvLinkedinLabel: "LinkedIn profile",
        cvGithubLabel: "GitHub profile",
        cvExperienceTitle: "Experience",
        cvBekoGroup: "Career & Professional Roles",

        cvIsbankDate: "September 2026 — November 2026",
        cvIsbankRole: "AI Engineer Intern",
        cvIsbankOrg: "Türkiye İş Bankası",
        cvIsbankSummary: "An internship program focused on AI systems, MLOps pipelines, and model monitoring.",
        cvIsbankBullet1: "Studied model training, versioning, and monitoring (drift detection, PSI metrics) architectures using MLflow and Airflow.",
        cvIsbankBullet2: "Participated in evaluating performance metrics for AI and LLM-based solutions.",

        cvInfraDate: "July 2026 — August 2026",
        cvInfraRole: "System Infrastructure Intern",
        cvInfraOrg: "Beko Corporate",
        cvInfraSummary: "An internship focused on enterprise system infrastructure, compliance, and patch management.",
        cvInfraBullet1: "Worked on SCCM modernization and patch-management processes.",
        cvInfraBullet2: "Contributed to compliance analysis and Windows/Linux infrastructure operations.",
        cvInfraBullet3: "Reviewed automation opportunities in enterprise DevOps and infrastructure workflows.",

        cvGambiaDate: "June 2026 — Present",
        cvGambiaRole: "System Infrastructure & DevOps Fellow",
        cvGambiaOrg: "Gambia Garden",
        cvGambiaSummary: "Digital platform infrastructure, production web deployment, and DevOps operations.",
        cvGambiaBullet1: "Deployed the web platform and server infrastructure to production with high availability.",
        cvGambiaBullet2: "Established reliable deployment workflows using Docker, NGINX, SSL/DNS configuration, and CI/CD pipelines.",

        cvAiopsDate: "December 2025 — July 2026",
        cvAiopsRole: "AIOps Engineer — PREP Program",
        cvAiopsOrg: "Beko Corporate",
        cvAiopsSummary: "A corporate development program focused on container logs, incident review, and observability.",
        cvAiopsBullet1: "Reviewed logs from Docker-based applications.",
        cvAiopsBullet2: "Participated in incident and root-cause analysis and anomaly-pattern reviews.",
        cvAiopsBullet3: "Reviewed monitoring and observability workflows alongside DevOps teams.",

        cvSecondaryTitle: "Additional experience",
        cvHabitatDate: "December 2025 — Present",
        cvHabitatRole: "Volunteer Trainer",
        cvHabitatOrg: "Habitat Association",
        cvHabitatSummary: "Deliver volunteer training in financial literacy and digital skills.",
        cvQnbDate: "August 2025",
        cvQnbRole: "QNB 101 Program",
        cvQnbOrg: "QNB Türkiye",
        cvQnbSummary: "A training program focused on banking technology, fintech, and digital transformation.",
        cvElmarDate: "October 2024",
        cvElmarRole: "Software Development Experience",
        cvElmarOrg: "Elmar Software",
        cvElmarSummary: "A short placement focused on software development and testing.",

        cvProjectsTitle: "Selected projects",
        cvGhostMeta: "Next.js · FinOps · AWS cost analysis",
        cvGhostSummary: "A FinOps/AIOps platform that brings AWS spend signals, resource-level waste recommendations, and cost spikes into one unified view.",
        cvGhostResult: "Demonstrates resource recommendations and a 21-day median baseline with clearly labeled sample AWS data.",
        cvGhostLinkLabel: "Open the GhostCost.com website",
        cvCosmicTitle: "Cosmic Pipeline",
        cvCosmicMeta: "Python · DSP · Isolation Forest · LSTM",
        cvCosmicSummary: "An open-source pipeline for layered detection and controlled repair of different corruption types in satellite telemetry.",
        cvCosmicResult: "The repository contains 17 test files; the latest reviewed GitHub Actions run passed.",
        cvReliabilityTitle: "Cloud-Native Reliability Platform",
        cvReliabilityMeta: "FastAPI · Prometheus · Kubernetes · Terraform",
        cvReliabilitySummary: "An AIOps/SRE architecture prototype connecting telemetry with SLO evaluation, anomaly detection, drift monitoring, and reversible remediation commands.",
        cvReliabilityResult: "Includes Redis, Prometheus, Docker, Kubernetes, and Terraform/AWS layers; the remediation flow is simulated.",
        cvAegisMeta: "FastAPI · Isolation Forest · SQLite · Docker",
        cvAegisSummary: "A predictive-maintenance MVP that processes temperature, pressure, vibration, and RPM telemetry through rules and Isolation Forest, then records detected events.",
        cvAegisResult: "Includes a FastAPI backend and a separate live UI concept; the UI is a visual prototype, not a functional product.",
        cvProjectLink: "GitHub Repository",
        cvCosmicLinkLabel: "Open the Cosmic Pipeline repository",
        cvReliabilityLinkLabel: "Open the Cloud-Native Reliability Platform repository",
        cvAegisRepoLabel: "Open the AegisOps repository",
        cvAegisDemoLabel: "Open the AegisOps UI concept",

        cvPracticeTitle: "Technical focus",
        cvPracticeCloud: "Cloud & Infrastructure (DevOps)",
        cvPracticeCloudDesc: "AWS, Terraform, Kubernetes, NGINX, Linux, and deployment automation",
        cvPracticeAIOps: "MLOps, AIOps & Observability",
        cvPracticeAIOpsDesc: "Airflow, MLflow, Prometheus, Grafana, Loki, and model drift (PSI) metrics",
        cvPracticeDelivery: "CI/CD & Automation",
        cvPracticeDeliveryDesc: "Docker, Kubernetes, GitHub Actions, NGINX, and automated deployment pipelines",
        cvPracticeEnterprise: "Systems & Infrastructure Operations",
        cvPracticeEnterpriseDesc: "SCCM, patch management, Linux server administration, SSL/DNS, and compliance",

        cvEducationTitle: "Education",
        cvEducationSchool: "Fırat University",
        cvEducationDegree: "Software Engineering",
        cvEducationStatus: "Fourth-year student",
        cvCertTitle: "Selected courses and certificates",
        cvCert1: "AWS Cloud Practitioner Essentials",
        cvCert2: "AWS Observability",
        cvCert3: "Introduction to MLOps",
        cvCert4: "Machine Learning in Production",
        cvCert5: "LLMOps",
        cvCert6: "CI/CD Fundamentals with GitHub Actions",
        cvFooter: "© 2025 Ömer Can Gümüş",
        cvPrintNote: "Visit omercangumus.com for current links.",
    }),
});

export const dictionaries = translations;

export const metadata = Object.freeze({
    tr: Object.freeze({
        home: Object.freeze({
            title: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            description: "Türkiye İş Bankası, Beko Corporate ve Gambia Garden deneyimine sahip Yazılım Mühendisliği öğrencisi Ömer Can Gümüş’ün MLOps (Airflow/MLflow), AIOps, DevOps, gözlemlenebilirlik (Prometheus/Grafana) ve altyapı otomasyonu odaklı portfolyosu.",
            ogTitle: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            ogDescription: "Türkiye İş Bankası & Beko Corporate deneyimi; MLOps, AIOps, DevOps, gözlemlenebilirlik ve altyapı otomasyonu odaklı seçili projeler.",
            ogImageAlt: "Ömer Can Gümüş — MLOps, AIOps ve DevOps",
            twitterTitle: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            twitterDescription: "MLOps, AIOps, DevOps ve altyapı otomasyonu odaklı seçili projeler.",
            locale: "tr_TR",
        }),
        cv: Object.freeze({
            title: "Ömer Can Gümüş | CV — MLOps, AIOps & DevOps",
            description: "Yazılım Mühendisliği öğrencisi Ömer Can Gümüş’ün MLOps, AIOps, DevOps, gözlemlenebilirlik ve altyapı otomasyonu odaklı özgeçmişi.",
            ogTitle: "Ömer Can Gümüş | Özgeçmiş",
            ogDescription: "Türkiye İş Bankası, Beko Corporate & Gambia Garden deneyimi; MLOps, AIOps, DevOps ve altyapı otomasyonu odaklı seçili projeler.",
            ogImageAlt: "Ömer Can Gümüş özgeçmişi",
            twitterTitle: "Ömer Can Gümüş | Özgeçmiş",
            twitterDescription: "MLOps, AIOps, DevOps ve sistem altyapısı odaklı özgeçmiş.",
            locale: "tr_TR",
        }),
    }),
    en: Object.freeze({
        home: Object.freeze({
            title: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            description: "Portfolio of Ömer Can Gümüş, software engineering student with experience across Türkiye İş Bankası, Beko Corporate, and Gambia Garden, focused on MLOps (Airflow/MLflow), AIOps, DevOps, observability (Prometheus/Grafana), and infrastructure automation.",
            ogTitle: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            ogDescription: "Enterprise experience with selected work in MLOps, AIOps, DevOps, observability, and infrastructure automation.",
            ogImageAlt: "Ömer Can Gümüş — MLOps, AIOps, and DevOps",
            twitterTitle: "Ömer Can Gümüş | MLOps, AIOps & DevOps",
            twitterDescription: "Selected projects in MLOps, AIOps, and DevOps.",
            locale: "en_US",
        }),
        cv: Object.freeze({
            title: "Ömer Can Gümüş | CV — MLOps, AIOps & DevOps",
            description: "CV of Ömer Can Gümüş, focused on MLOps, AIOps, DevOps, observability, and infrastructure automation.",
            ogTitle: "Ömer Can Gümüş | CV — MLOps, AIOps & DevOps",
            ogDescription: "Experience across Türkiye İş Bankası, Beko Corporate & Gambia Garden with selected projects in MLOps, AIOps, DevOps, and infrastructure automation.",
            ogImageAlt: "Ömer Can Gümüş CV",
            twitterTitle: "Ömer Can Gümüş | CV",
            twitterDescription: "CV focused on MLOps, AIOps, DevOps, and system infrastructure.",
            locale: "en_US",
        }),
    }),
});

let currentLanguage = DEFAULT_LANGUAGE;
const boundLanguageButtons = new WeakSet();
const boundThemeButtons = new WeakSet();

/* ---------------- Theme Management ---------------- */

export function getTheme() {
    if (typeof window === "undefined") return "light";
    try {
        const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
        if (SUPPORTED_THEMES.has(stored)) return stored;
    } catch {
        // Privacy mode
    }
    return (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
}

export function setTheme(theme) {
    const selectedTheme = SUPPORTED_THEMES.has(theme) ? theme : "light";
    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", selectedTheme);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[selectedTheme]);
        updateThemeButtons(selectedTheme);
    }
    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    } catch {
        // Privacy mode
    }
    return selectedTheme;
}

export function toggleTheme() {
    const current = getTheme();
    const next = current === "dark" ? "light" : "dark";
    return setTheme(next);
}

function updateThemeButtons(theme) {
    if (typeof document === "undefined") return;
    const isDark = theme === "dark";
    const lang = getLanguage();
    const isEn = lang === "en";

    // SVGs for Moon (switch to dark) and Sun (switch to light)
    const moonSvg = `<svg class="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    const sunSvg = `<svg class="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
        const label = isDark
            ? (isEn ? "Switch to light mode" : "Açık temaya geç")
            : (isEn ? "Switch to dark mode" : "Koyu temaya geç");
        button.setAttribute("aria-label", label);
        button.setAttribute("title", label);
        button.setAttribute("aria-pressed", String(isDark));
        const iconSpan = button.querySelector(".theme-icon");
        if (iconSpan) {
            iconSpan.innerHTML = isDark ? sunSvg : moonSvg;
        } else {
            button.innerHTML = `<span class="theme-icon" aria-hidden="true">${isDark ? sunSvg : moonSvg}</span>`;
        }
    });
}

export function initTheme() {
    if (typeof document === "undefined") return "light";
    const initial = getTheme();
    document.documentElement.setAttribute("data-theme", initial);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[initial]);

    const bindToggles = () => {
        document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
            if (boundThemeButtons.has(button)) return;
            boundThemeButtons.add(button);
            button.addEventListener("click", (e) => {
                e.preventDefault();
                toggleTheme();
            });
        });
        updateThemeButtons(getTheme());
    };

    bindToggles();

    // Listen for OS theme preference changes
    if (typeof window !== "undefined" && window.matchMedia) {
        try {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
                try {
                    if (!window.localStorage.getItem(THEME_STORAGE_KEY)) {
                        setTheme(e.matches ? "dark" : "light");
                    }
                } catch {}
            });
        } catch {}
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bindToggles, { once: true });
    }

    return initial;
}

/* ---------------- Language Management ---------------- */

function normalizeLanguage(language) {
    const normalized = String(language || "").trim().toLowerCase().split("-")[0];
    return SUPPORTED_LANGUAGES.has(normalized) ? normalized : DEFAULT_LANGUAGE;
}

function readStoredLanguage() {
    if (typeof window === "undefined") return null;
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return SUPPORTED_LANGUAGES.has(stored) ? stored : null;
    } catch {
        return null;
    }
}

function writeStoredLanguage(language) {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
        // Privacy mode
    }
}

function readQueryLanguage() {
    if (typeof window === "undefined") return null;
    try {
        const requested = new URLSearchParams(window.location.search).get("lang");
        return SUPPORTED_LANGUAGES.has(requested) ? requested : null;
    } catch {
        return null;
    }
}

function resolveInitialLanguage() {
    return readQueryLanguage() || readStoredLanguage() || DEFAULT_LANGUAGE;
}

function setTextPreservingChildren(element, value) {
    // If element has no child nodes or only a text node, set textContent directly
    if (!element.children.length) {
        element.textContent = value;
        return;
    }

    // If element contains child tags (e.g. <span aria-hidden="true">↗</span>),
    // replace only text nodes while preserving existing child elements.
    const textNodes = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE);
    if (textNodes.length > 0) {
        textNodes[0].textContent = `${value} `;
        for (let i = 1; i < textNodes.length; i++) {
            textNodes[i].remove();
        }
    } else {
        element.insertBefore(document.createTextNode(`${value} `), element.firstChild);
    }
}

function applyTextTranslations(language) {
    const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = dictionary[key] ?? translations[DEFAULT_LANGUAGE][key];
        if (typeof value !== "string") return;

        if (htmlTranslationKeys.has(key)) {
            element.innerHTML = value;
        } else {
            setTextPreservingChildren(element, value);
        }
    });

    const attributeMappings = [
        ["[data-i18n-aria]", "i18nAria", "aria-label"],
        ["[data-i18n-aria-label]", "i18nAriaLabel", "aria-label"],
        ["[data-i18n-title]", "i18nTitle", "title"],
        ["[data-i18n-alt]", "i18nAlt", "alt"],
    ];

    attributeMappings.forEach(([selector, datasetKey, attribute]) => {
        document.querySelectorAll(selector).forEach((element) => {
            const key = element.dataset[datasetKey];
            const value = dictionary[key] ?? translations[DEFAULT_LANGUAGE][key];
            if (typeof value === "string") {
                element.setAttribute(attribute, value);
            }
        });
    });

    updateThemeButtons(getTheme());
}

function isCvPage() {
    if (typeof document === "undefined") return false;
    if (document.body?.dataset?.i18nPage === "cv") return true;
    if (document.body?.matches?.("[data-cv-page], .cv-page")) return true;
    return /(?:^|\/)cv(?:\.html)?\/?$/i.test(window.location.pathname);
}

function setMetaContent(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute("content", value);
}

function setLinkHref(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute("href", value);
}

function applyMetadata(language) {
    const page = isCvPage() ? "cv" : "home";
    const pageMetadata = (metadata[language] && metadata[language][page]) || metadata[DEFAULT_LANGUAGE][page];
    if (!pageMetadata) return;

    const baseUrl = page === "cv"
        ? "https://omercangumus.com/cv.html"
        : "https://omercangumus.com/";
    const localizedUrl = language === "en" ? `${baseUrl}?lang=en` : baseUrl;

    document.title = pageMetadata.title;
    setLinkHref('link[rel="canonical"]', localizedUrl);
    setMetaContent('meta[name="description"]', pageMetadata.description);
    setMetaContent('meta[property="og:title"]', pageMetadata.ogTitle);
    setMetaContent('meta[property="og:description"]', pageMetadata.ogDescription);
    setMetaContent('meta[property="og:image:alt"]', pageMetadata.ogImageAlt);
    setMetaContent('meta[property="og:locale"]', pageMetadata.locale);
    setMetaContent('meta[property="og:url"]', localizedUrl);
    setMetaContent('meta[name="twitter:title"]', pageMetadata.twitterTitle);
    setMetaContent('meta[name="twitter:description"]', pageMetadata.twitterDescription);
}

function updateLanguageButtons(language) {
    document.querySelectorAll("[data-language]").forEach((button) => {
        const active = normalizeLanguage(button.dataset.language) === language;
        button.setAttribute("aria-pressed", String(active));
        button.classList.toggle("is-active", active);
    });
}

function updateLanguageQuery(language) {
    if (typeof window === "undefined" || !window.history?.replaceState) return;
    try {
        const url = new URL(window.location.href);
        if (language === "en") {
            url.searchParams.set("lang", "en");
        } else {
            url.searchParams.delete("lang");
        }
        window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    } catch {}
}

function bindLanguageButtons() {
    document.querySelectorAll("[data-language]").forEach((button) => {
        if (boundLanguageButtons.has(button)) return;
        boundLanguageButtons.add(button);
        button.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage(button.dataset.language);
        });
    });
}

export function getLanguage() {
    return currentLanguage;
}

export function setLanguage(language, options = {}) {
    const selectedLanguage = normalizeLanguage(language);
    const {
        persist = true,
        updateUrl = true,
        emit = true,
    } = options;

    currentLanguage = selectedLanguage;

    if (typeof document !== "undefined") {
        document.documentElement.lang = selectedLanguage;
        applyTextTranslations(selectedLanguage);
        applyMetadata(selectedLanguage);
        updateLanguageButtons(selectedLanguage);
    }

    if (persist) writeStoredLanguage(selectedLanguage);
    if (updateUrl) updateLanguageQuery(selectedLanguage);

    if (emit && typeof document !== "undefined") {
        document.dispatchEvent(new CustomEvent("portfolio:languagechange", {
            detail: { language: selectedLanguage },
        }));
    }

    return selectedLanguage;
}

export function initLanguage() {
    if (typeof document === "undefined") return currentLanguage;

    const setup = () => {
        bindLanguageButtons();
        initTheme();
        setLanguage(resolveInitialLanguage(), { persist: true, updateUrl: false, emit: false });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setup, { once: true });
        return currentLanguage;
    }

    setup();
    return currentLanguage;
}

// Global attachment for non-module script tags
if (typeof window !== "undefined") {
    window.PortfolioI18n = {
        translations,
        metadata,
        getLanguage,
        setLanguage,
        initLanguage,
        getTheme,
        setTheme,
        toggleTheme,
        initTheme,
    };
}

if (typeof document !== "undefined") {
    initLanguage();
}
