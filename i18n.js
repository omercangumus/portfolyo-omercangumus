// ===== i18n.js — Centralized Translation System =====
// Every user-visible text has a unique key with both TR and EN values.
// HTML elements use data-i18n="key" attributes.
// If a key is missing, the element keeps its current text and a console.warn is logged.

const translations = {
  tr: {
    // ── Page Title ──
    pageTitle: "Ömer Can Gümüş - Beko Corporate'te System Infrastructure Intern",

    // ── Nav ──
    navHome: "Ana Sayfa",
    navAbout: "Hakkımda",
    navExperience: "Deneyim",
    navSkills: "Yetenekler",
    navCertificates: "Sertifikalar",
    navProjects: "Projeler",
    navContact: "İletişim",

    // ── Hero ──
    heroJob: "Beko Corporate'te System Infrastructure Intern",
    heroTech: "AWS & Python Core | Docker & Cloud-Native Systems | AI-Predictive Automation",
    btnContact: "İletişime Geç",
    btnGithub: "GitHub Profilim",
    btnLinkedin: "LinkedIn",
    btnCV: "CV İndir",

    // ── About ──
    aboutTitle: "Hakkımda",
    aboutP1: 'Fırat Üniversitesi <b>Yazılım Mühendisliği</b> 3. sınıf öğrencisiyim ve <b>Beko Corporate</b>\'te <b>System Infrastructure Intern</b> olarak çalışıyorum. AIOps, DevOps ve Cloud Computing kesişiminde üretiyorum.',
    aboutP2: 'Ölçeklenebilir cloud-native ortamlar tasarlıyor, otomatikleştiriyor ve yönetiyorum — maliyet bilinçli mimari ve operasyonel verimlilik odağımda. <b>AWS</b>, <b>Terraform (IaC)</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>GitLab CI/CD</b> ve <b>Python</b> kullanarak iş akışlarını otomatikleştiriyor, observability\'yi güçlendiriyor ve <b>Linux</b> ortamlarında güvenilir deployment\'lar sağlıyorum.',
    aboutP3: 'Gerçek dünya yükü altında ayakta kalan production sistemler kurmayı önemsiyorum — <b>ölçeklenebilir, verimli ve kalıcı</b>.',

    // ── Experience ──
    expTitle: "Deneyim",
    exp1Date: "Temmuz 2026 — Günümüz",
    exp1Title: "System Infrastructure Intern",
    exp1Company: "Beko Corporate",
    exp1Task1: "SCCM ortamı modernizasyonu ve patch management optimizasyonu.",
    exp1Task2: "Sistem altyapısı operasyonları ve compliance analizi.",
    exp1Task3: "Windows/Linux ortamlarında altyapı otomasyonu.",
    exp1Task4: "DevOps ve altyapı ekipleriyle kurumsal iş akışlarında işbirliği.",

    exp2Date: "Aralık 2025 — Temmuz 2026",
    exp2Title: "AIOps Engineer | PREP Program",
    exp2Company: "Beko Corporate",
    exp2Task1: "Docker tabanlı ve konteynerize uygulamalardan log analizi.",
    exp2Task2: "Temel olay inceleme ve kök neden analizi.",
    exp2Task3: "Anomali paternleri ve operasyonel sorunların anlaşılması.",
    exp2Task4: "AIOps, monitoring ve observability uygulamaları.",
    exp2Task5: "DevOps ekipleri ile kurumsal iş akışlarında işbirliği.",

    exp3Date: "Aralık 2025 — Günümüz",
    exp3Title: "Gönüllü Eğitmen",
    exp3Company: "Habitat Derneği",
    exp3Desc: "Finansal okuryazarlık ve dijital yetkinlikler odağında gençlere bütçe yönetimi, stratejik planlama ve teknoloji kullanımı konularında gönüllü eğitimler veriyorum.",

    exp4Date: "Ağustos 2025",
    exp4Title: "QNB 101 — Teknik Stajyer",
    exp4Company: "QNB Türkiye",
    exp4Desc: "Bankacılık teknolojileri, Fintech trendleri ve dijital dönüşüm stratejileri üzerine yoğunlaşmış kapsamlı teknik eğitim ve vizyon programı.",

    exp5Date: "Ekim 2024",
    exp5Title: "Yazılım Mühendisi",
    exp5Company: "Elmar Yazılım · Elazığ",
    exp5Desc: "Yazılım geliştirme yaşam döngüsü (SDLC) süreçlerinde gerçek dünya projelerine katkı sağlayarak kod geliştirme ve test otomasyonu alanlarında deneyim kazandım.",

    exp6Date: "Haziran 2023 — Günümüz",
    exp6Title: "Bağımsız Yazılım Geliştirici",
    exp6Company: "Freelance",
    exp6Desc: "Cloud-native mimariler, AIOps entegrasyonları ve DevOps otomasyonları üzerine butik çözümler ve teknik danışmanlık süreçleri yürütüyorum.",

    // ── Skills ──
    skillsTitle: "Yetenekler",
    skillCloud: "Bulut Bilişim",
    skillContainers: "Container Teknolojileri",
    skillIaC: "Altyapı Otomasyonu (IaC)",
    skillLangs: "Diller & Teknolojiler",
    skillMonitoring: "Monitoring & Observability",

    // ── Certificates ──
    certsTitle: "Lisanslar ve Sertifikalar",
    certsSubtitle: "Profesyonel gelişimimi destekleyen sertifikalarım",
    cert1Desc: "AWS bulut temellerini, servisleri ve en iyi uygulamaları kapsayan kapsamlı eğitim.",
    cert2Desc: "CloudWatch, X-Ray ve observability araçlarıyla sistem izleme ve log analizi.",
    cert3Desc: "Gerçek dünya yazılım mühendisliği görevleri, finansal teknoloji projeleri ve enterprise ölçekli uygulama geliştirme deneyimi.",
    cert4Desc: "ML model yaşam döngüsü yönetimi, model dağıtımı ve MLOps pipeline mimarisi.",
    cert5Desc: "DevOps kültürü, Agile metodolojileri ve sürekli teslimat pratikleri.",
    cert6Desc: "Büyük dil modellerinin operasyonelleştirilmesi, dağıtımı ve yönetimi.",
    cert7Desc: "ML modellerinin canlı ortamlarda ölçeklenebilir ve güvenilir şekilde sunulması.",
    cert8Desc: "LLM uygulamaları için sürekli entegrasyon ve otomatik test süreçlerinin yönetimi.",
    cert9Desc: "GitHub Actions ile sürekli entegrasyon ve sürekli dağıtım pipeline oluşturma.",
    cert10Desc: "Scrum, Agile proje yönetimi ve Azure DevOps ile takım işbirliği.",
    cert11Desc: "Üretken yapay zeka modellerinin performans analizi, hata ayıklama ve validasyonu.",
    cert12Desc: "Yapay zeka araçlarını verimli kullanma, prompt mühendisliği ve AI entegrasyonu.",
    cert13Desc: "İş hayatında çevik düşünce yapısı ve adaptasyon becerileri.",
    cert14Desc: "Finansal okuryazarlık ve eğitmenlik becerileri geliştirme programı.",
    cert15Desc: "UNICEF standartlarında cinsel sömürü ve istismarı önleme eğitimi.",
    cert1Title: "AWS Cloud Practitioner Essentials",
    cert2Title: "AWS Observability",
    cert3Title: "Software Engineering Job Simulation",
    cert4Title: "Introduction to MLOps",
    cert5Title: "Introduction to DevOps",
    cert6Title: "LLMOps",
    cert7Title: "Machine Learning in Production",
    cert8Title: "Automated Testing for LLMOps",
    cert9Title: "CI/CD Fundamentals with GitHub Actions",
    cert10Title: "Plan Agile with Projects & Boards",
    cert11Title: "Evaluating and Debugging GenAI",
    cert12Title: "Effective Use of AI",
    cert13Title: "Agility: İş Hayatında Çeviklik",
    cert14Title: "Finansta Gelecek Eğitmen Eğitimi",
    cert15Title: "Cinsel Sömürü ve İstismarın Önlenmesi (PSEA)",
    cert1Date: "Ocak 2026",
    cert2Date: "Ocak 2026",
    cert3Date: "2026",
    cert4Date: "Ocak 2026",
    cert5Date: "Ocak 2026",
    cert6Date: "Ocak 2026",
    cert7Date: "Ocak 2026",
    cert8Date: "Ocak 2026",
    cert9Date: "Ocak 2026",
    cert10Date: "Ocak 2026",
    cert11Date: "Ocak 2026",
    cert12Date: "Ocak 2026",
    cert13Date: "2025",
    cert14Date: "Ocak 2026",
    cert15Date: "2025",
    btnAllCerts: "Tüm Sertifikaları Gör",

    // ── Projects ──
    projTitle: "Öne Çıkan Projeler",
    proj1Title: "GhostCost ⚡",
    proj1Desc: '<span class="font-semibold text-gray-200">Problem:</span> Multi-cloud (AWS/Azure) altyapılarında kontrolsüz maliyet artışları ve fatura anomalilerinin manuel takibi yüksek hata payı barındırıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> ClickHouse tabanlı yüksek performanslı telemetri motoru ve Isolation Forest algoritmalarını kullanarak, bulut harcamalarını gerçek zamanlı analiz eden bir AIOps platformu geliştirdim.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Yapay zeka destekli anomali tespiti ile gereksiz harcamalar %30 optimize edildi ve maliyet sızıntıları doğal dilde (Ollama 3.1) raporlanabilir hale geldi.',
    proj2Title: "SiberMiras 🚀",
    proj2Desc: '<span class="font-semibold text-gray-200">Problem:</span> Dijital varlıkların yasal devri için ölçeklenebilir ve güvenli bir teknik altyapı eksikliği mevcuttu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> AWS üzerinde Dockerize edilmiş mikroservis mimarisini; ECS, RDS ve S3 kullanarak kurguladım. Altyapı yönetimini Terraform (IaC) ile otomatize ettim.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Multi-AZ deployment ve auto-scaling ile %99.9 uptime sağlayan, Türkiye\'nin ilk bulut tabanlı dijital miras platformunun MVP\'si yayına alındı.',
    proj3Title: "Cloud-Native Reliability Platform",
    proj3Desc: '<span class="font-semibold text-gray-200">Problem:</span> Dağıtık mikroservis sistemlerindeki performans kayıplarının manuel izleme ile tespit edilmesi zaman alıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Prometheus verilerini işleyen Z-Score ve EMA algoritmalarını kullanarak, Kubernetes üzerinde self-healing kabiliyetine sahip otonom bir yapı kurguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Sistem kesinti süreleri (MTTR) %50 azaltıldı ve anomaliler kullanıcıya yansımadan otonom olarak önlendi.',
    proj4Title: "Star-Ops — Edge-MLOps Platform",
    proj4Desc: '<span class="font-semibold text-gray-200">Problem:</span> Uydu telemetri verilerinin gerçek zamanlı analizi ve anomali tespiti için düşük gecikmeli bir mimari ihtiyacı.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Isolation Forest ve LSTM modellerini kapsayan ensemble bir ML motoru geliştirerek, Edge-MLOps prensipleriyle çalışan bir takip sistemi tasarladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Donanım arızaları %95 doğrulukla öngörüldü ve D3.js ile operatörlere canlı analiz paneli sunuldu.',
    proj5Title: "Cloud Order — MLOps Integration",
    proj5Desc: '<span class="font-semibold text-gray-200">Problem:</span> E-ticaret akışındaki sistem hatalarının manuel tespiti ölçeklenebilirliği kısıtlıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Sipariş loglarını analiz eden Isolation Forest modelini eğitip, CI/CD süreçlerine MLOps pipeline olarak entegre ederek AWS üzerinde kurguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Hatalı siparişler saniyeler içinde tespit edilerek Prometheus ve CloudWatch üzerinden anlık alarm olarak iletildi.',
    proj6Title: "AIOps Anomali Tespit Sistemi",
    proj6Desc: '<span class="font-semibold text-gray-200">Problem:</span> Sunucu loglarındaki performans sızıntılarının klasik eşik değer (threshold) uyarılarıyla geç yakalanması.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Prometheus metriklerini ML modelleriyle besleyerek, dinamik eşik değerleri oluşturan bir analiz modülü geliştirdim.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Yanlış alarmlar (false positives) %40 azaltıldı ve proaktif sistem bakımı için doğru veri akışı sağlandı.',
    proj7Title: "AIOps Infrastructure (IaC) ☁️",
    proj7Desc: '<span class="font-semibold text-gray-200">Problem:</span> Dağınık AWS kaynaklarının manuel yönetimi, konfigürasyon sürüklenmesine (drift) ve ortamlar arası uyumsuzluklara yol açıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> AWS altyapısını Terraform kullanarak modüler bir IaC yapısına taşıdım. Lambda ve Docker tabanlı servislerin provizyonunu otomatize ettim.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Altyapı kurulum hızı 10 kat arttı ve %100 tekrarlanabilir, versiyonlanmış bir bulut topolojisi oluşturuldu.',
    proj8Title: "AWS CI/CD Automation ⚙️",
    proj8Desc: '<span class="font-semibold text-gray-200">Problem:</span> Manuel dağıtımların yarattığı operasyonel riskler ve uzun \'time-to-market\' süreleri hata payını artırıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> GitHub Actions ve AWS CodeDeploy entegrasyonu ile Docker tabanlı image\'ların sunulduğu uçtan uca bir CI/CD pipeline kurguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Dağıtım hataları minimize edildi ve zero-downtime deployment (blue-green) stratejisi başarıyla uygulandı.',
    proj9Title: "Sunucusuz Log Analizörü ⚡",
    proj9Desc: '<span class="font-semibold text-gray-200">Problem:</span> Farklı AWS region\'larından gelen yüksek hacimli log verilerinin maliyet etkin bir şekilde analiz edilmesi gerekiyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> S3 ve Lambda kullanarak olay bazlı (event-driven) tetiklenen, sunucusuz bir veri işleme mimarisi tasarladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Sabit sunucu maliyetleri ortadan kalktı ve pay-as-you-go modeliyle işlem başına ödeme prensibi uygulandı.',
    proj10Title: "Bulut Mimari Desenleri 🛡️",
    proj10Desc: '<span class="font-semibold text-gray-200">Problem:</span> AWS servisleriyle etkileşime giren uygulamalar beklenmedik ağ kesintilerinde çöküyor ve veri kaybı yaşıyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Uygulama dayanıklılığını artırmak için Java AWS SDK kullanarak Retry, Circuit Breaker ve Fallback gibi bulut tasarım desenlerini uyguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Geçici hatalara karşı sistemin kendi kendini toparlaması sağlandı (resilience) ve API çağrılarındaki hata oranları minimize edildi.',
    proj11Title: "Hibrit Bulut Yedekleme Çözümü 💾",
    proj11Desc: '<span class="font-semibold text-gray-200">Problem:</span> Azure ve lokal verilerin AWS S3 üzerinde felaket kurtarma (DR) merkezi oluşturularak yedeklenmesi gerekliliği.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Boto3 kütüphanesi kullanarak cross-cloud veri transferini otomatize eden Python betikleri ve lifecycle politikaları kurguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Veri saklama maliyetleri Glacier S3 kullanımıyla optimize edildi ve veri dönüş hızı (RTO) iyileştirildi.',
    proj12Title: "Dijital Ayak İzi (Digital Footprint) 🔍",
    proj12Desc: '<span class="font-semibold text-gray-200">Problem:</span> OSINT verilerinin dağınık olması ve bireysel sızıntı maruziyetinin ölçülememesi güvenlik açığı oluşturuyordu.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> Çeşitli güvenlik API\'larını birleştiren, Python tabanlı bir dijital ayak izi tarayıcı ve analiz motoru geliştirdim.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Kullanıcılar için proaktif sızıntı kontrolleri ve veriye dayalı risk skoru raporlama imkanı sağlandı.',
    proj13Title: "Enterprise Bank Automation 🏦",
    proj13Desc: '<span class="font-semibold text-gray-200">Problem:</span> Kurumsal finansal modellerin, temiz kod ve SOLID prensiplerine sadık kalarak yazılım mimarisine dönüştürülmesi gerekliliği.<br><br><span class="font-semibold text-gray-200">Çözüm:</span> C# ve MSSQL tabanlı, miras (inheritance) ve kapsülleme tekniklerinin uygulandığı modüler bir banka otomasyonu kurguladım.<br><br><span class="font-semibold text-gray-200">Sonuç:</span> Yüksek sürdürülebilirlik seviyesine sahip, katmanlı bir yazılım mimarisi başarılı bir şekilde hayata geçirildi.',
    btnLiveSite: "Canlı Siteyi Gör",
    btnGithubProfile: "GitHub Profilim",

    // ── Contact ──
    contactTitle: "Proje Talebi & İletişim",
    contactDesc: "Küresel ölçekli projeleriniz, teknik danışmanlık veya iş birliği talepleriniz için bana ulaşabilirsiniz.",
  },

  en: {
    // ── Page Title ──
    pageTitle: "Ömer Can Gümüş - System Infrastructure Intern at Beko Corporate",

    // ── Nav ──
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navCertificates: "Certifications",
    navProjects: "Projects",
    navContact: "Contact",

    // ── Hero ──
    heroJob: "System Infrastructure Intern at Beko Corporate",
    heroTech: "AWS & Python Core | Docker & Cloud-Native Systems | AI-Predictive Automation",
    btnContact: "Get in Touch",
    btnGithub: "GitHub Profile",
    btnLinkedin: "LinkedIn",
    btnCV: "Download CV",

    // ── About ──
    aboutTitle: "About Me",
    aboutP1: 'Software Engineering student and <b>System Infrastructure Intern</b> at <b>Beko Corporate</b>, working at the intersection of <b>AIOps</b>, <b>DevOps</b>, and <b>Cloud Computing</b>.',
    aboutP2: 'I design, automate, and maintain scalable cloud-native environments — with a focus on cost-aware architecture and operational efficiency. My toolkit includes <b>AWS</b>, <b>Terraform (IaC)</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>GitLab CI/CD</b>, and <b>Python</b>, which I use to automate workflows, improve observability, and keep deployments reliable in <b>Linux</b> environments.',
    aboutP3: 'I care about building production systems that hold up under real-world load — <b>scalable, efficient, and built to last</b>.',

    // ── Experience ──
    expTitle: "Experience",
    exp1Date: "July 2026 — Present",
    exp1Title: "System Infrastructure Intern",
    exp1Company: "Beko Corporate",
    exp1Task1: "SCCM environment modernization and patch management optimization.",
    exp1Task2: "System infrastructure operations and compliance analysis.",
    exp1Task3: "Infrastructure automation in Windows/Linux environments.",
    exp1Task4: "Collaboration with DevOps and infrastructure teams on enterprise workflows.",

    exp2Date: "December 2025 — July 2026",
    exp2Title: "AIOps Engineer | PREP Program",
    exp2Company: "Beko Corporate",
    exp2Task1: "Log analysis from Docker-based and containerized applications.",
    exp2Task2: "Incident investigation and root cause analysis.",
    exp2Task3: "Understanding anomaly patterns and operational issues.",
    exp2Task4: "AIOps, monitoring and observability practices.",
    exp2Task5: "Collaboration with DevOps teams on enterprise workflows.",

    exp3Date: "December 2025 — Present",
    exp3Title: "Volunteer Instructor",
    exp3Company: "Habitat Association",
    exp3Desc: "Providing volunteer training to youth on financial literacy, budget management, strategic planning, and technology skills.",

    exp4Date: "August 2025",
    exp4Title: "QNB 101 — Technical Trainee",
    exp4Company: "QNB Turkey",
    exp4Desc: "Comprehensive technical training and vision program focused on banking technologies, Fintech trends, and digital transformation strategies.",

    exp5Date: "October 2024",
    exp5Title: "Software Engineer",
    exp5Company: "Elmar Software · Elazığ",
    exp5Desc: "Contributed to real-world projects in the software development life cycle (SDLC), gaining experience in code development and test automation.",

    exp6Date: "June 2023 — Present",
    exp6Title: "Independent Developer",
    exp6Company: "Freelance",
    exp6Desc: "Working on cloud-native architectures, AIOps integrations, and DevOps automations — providing boutique solutions and technical consulting.",

    // ── Skills ──
    skillsTitle: "Skills",
    skillCloud: "Cloud Computing",
    skillContainers: "Container Technologies",
    skillIaC: "Infrastructure as Code",
    skillLangs: "Languages & Tech",
    skillMonitoring: "Monitoring & Observability",

    // ── Certificates ──
    certsTitle: "Licenses & Certifications",
    certsSubtitle: "Certifications supporting my professional development",
    cert1Desc: "Comprehensive training covering AWS cloud fundamentals, services, and best practices.",
    cert2Desc: "System monitoring and log analysis with CloudWatch, X-Ray, and observability tools.",
    cert3Desc: "Real-world software engineering tasks, financial technology projects, and enterprise-scale application development experience.",
    cert4Desc: "ML model lifecycle management, model deployment, and MLOps pipeline architecture.",
    cert5Desc: "DevOps culture, Agile methodologies, and continuous delivery practices.",
    cert6Desc: "Operationalization, deployment, and management of large language models.",
    cert7Desc: "Deploying scalable and reliable ML models in production environments.",
    cert8Desc: "Management of continuous integration and automated testing processes for LLM applications.",
    cert9Desc: "Building continuous integration and continuous deployment pipelines with GitHub Actions.",
    cert10Desc: "Scrum, Agile project management, and team collaboration with Azure DevOps.",
    cert11Desc: "Performance analysis, debugging, and validation of generative AI models.",
    cert12Desc: "Efficient use of AI tools, prompt engineering, and AI integration strategies.",
    cert13Desc: "Agile mindset and adaptation skills in business environment.",
    cert14Desc: "Financial literacy and instructor skills development program.",
    cert15Desc: "Prevention of Sexual Exploitation and Abuse training per UNICEF standards.",
    cert1Title: "AWS Cloud Practitioner Essentials",
    cert2Title: "AWS Observability",
    cert3Title: "Software Engineering Job Simulation",
    cert4Title: "Introduction to MLOps",
    cert5Title: "Introduction to DevOps",
    cert6Title: "LLMOps",
    cert7Title: "Machine Learning in Production",
    cert8Title: "Automated Testing for LLMOps",
    cert9Title: "CI/CD Fundamentals with GitHub Actions",
    cert10Title: "Plan Agile with Projects & Boards",
    cert11Title: "Evaluating and Debugging GenAI",
    cert12Title: "Effective Use of AI",
    cert13Title: "Agility: Agile in Business Life",
    cert14Title: "Future in Finance Trainer Education",
    cert15Title: "Prevention of Sexual Exploitation and Abuse (PSEA)",
    cert1Date: "January 2026",
    cert2Date: "January 2026",
    cert3Date: "2026",
    cert4Date: "January 2026",
    cert5Date: "January 2026",
    cert6Date: "January 2026",
    cert7Date: "January 2026",
    cert8Date: "January 2026",
    cert9Date: "January 2026",
    cert10Date: "January 2026",
    cert11Date: "January 2026",
    cert12Date: "January 2026",
    cert13Date: "2025",
    cert14Date: "January 2026",
    cert15Date: "2025",
    btnAllCerts: "View All Certifications",

    // ── Projects ──
    projTitle: "Featured Projects",
    proj1Title: "GhostCost ⚡",
    proj1Desc: '<span class="font-semibold text-gray-200">Problem:</span> Uncontrolled cost increases and manual tracking of billing anomalies in multi-cloud (AWS/Azure) infrastructures had a high margin of error.<br><br><span class="font-semibold text-gray-200">Solution:</span> I developed an AIOps platform that analyzes cloud expenses in real-time using a ClickHouse-based high-performance telemetry engine and Isolation Forest algorithms.<br><br><span class="font-semibold text-gray-200">Result:</span> Unnecessary expenses were optimized by 30% with AI-powered anomaly detection, and cost leaks became reportable in natural language (Ollama 3.1).',
    proj2Title: "SiberMiras 🚀",
    proj2Desc: '<span class="font-semibold text-gray-200">Problem:</span> There was a lack of a scalable and secure technical infrastructure for the legal transfer of digital assets.<br><br><span class="font-semibold text-gray-200">Solution:</span> I built a microservice architecture on AWS using ECS, RDS, and S3, and automated infrastructure management with Terraform (IaC).<br><br><span class="font-semibold text-gray-200">Result:</span> An MVP of Turkey\'s first cloud-based digital legacy platform was launched, providing 99.9% uptime with multi-AZ deployment and auto-scaling.',
    proj3Title: "Cloud-Native Reliability Platform",
    proj3Desc: '<span class="font-semibold text-gray-200">Problem:</span> Manually detecting performance losses in distributed microservice systems was time-consuming.<br><br><span class="font-semibold text-gray-200">Solution:</span> Using Z-Score and EMA algorithms that process Prometheus data, I built an autonomous self-healing structure on Kubernetes.<br><br><span class="font-semibold text-gray-200">Result:</span> System downtime (MTTR) was reduced by 50%, and anomalies were prevented autonomously before affecting users.',
    proj4Title: "Star-Ops — Edge-MLOps Platform",
    proj4Desc: '<span class="font-semibold text-gray-200">Problem:</span> Need for low-latency architecture for real-time analysis and anomaly detection of satellite telemetry data.<br><br><span class="font-semibold text-gray-200">Solution:</span> I developed an ensemble ML engine including Isolation Forest and LSTM models, and designed a tracking system working with Edge-MLOps principles.<br><br><span class="font-semibold text-gray-200">Result:</span> Hardware failures were predicted with 95% accuracy, and a live analysis dashboard was presented to operators using D3.js.',
    proj5Title: "Cloud Order — MLOps Integration",
    proj5Desc: '<span class="font-semibold text-gray-200">Problem:</span> Manual tracking of system errors in e-commerce flows limited scalability.<br><br><span class="font-semibold text-gray-200">Solution:</span> I trained an Isolation Forest model to analyze order logs and integrated it into CI/CD processes as an MLOps pipeline on AWS.<br><br><span class="font-semibold text-gray-200">Result:</span> Erroneous orders were detected in seconds and sent as instant alerts via Prometheus and CloudWatch.',
    proj6Title: "AIOps Anomaly Detection System",
    proj6Desc: '<span class="font-semibold text-gray-200">Problem:</span> Performance leaks in server logs were caught late with traditional threshold alerts.<br><br><span class="font-semibold text-gray-200">Solution:</span> I developed an analysis module that creates dynamic thresholds by feeding Prometheus metrics into ML models.<br><br><span class="font-semibold text-gray-200">Result:</span> False positives were reduced by 40%, ensuring accurate data flow for proactive system maintenance.',
    proj7Title: "AIOps Infrastructure (IaC) ☁️",
    proj7Desc: '<span class="font-semibold text-gray-200">Problem:</span> Manual management of scattered AWS resources led to configuration drift and environment incompatibilities.<br><br><span class="font-semibold text-gray-200">Solution:</span> I moved the AWS infrastructure to a modular IaC structure using Terraform and automated the provisioning of Lambda and Docker-based services.<br><br><span class="font-semibold text-gray-200">Result:</span> Infrastructure provisioning speed increased 10x and a 100% repeatable, versioned cloud topology was created.',
    proj8Title: "AWS CI/CD Automation ⚙️",
    proj8Desc: '<span class="font-semibold text-gray-200">Problem:</span> Operational risks of manual deployments and long time-to-market periods increased error margins.<br><br><span class="font-semibold text-gray-200">Solution:</span> I built an end-to-end CI/CD pipeline for Docker-based images using GitHub Actions and AWS CodeDeploy integration.<br><br><span class="font-semibold text-gray-200">Result:</span> Deployment errors were minimized, and a zero-downtime deployment (blue-green) strategy was successfully implemented.',
    proj9Title: "Serverless Log Analyzer ⚡",
    proj9Desc: '<span class="font-semibold text-gray-200">Problem:</span> High-volume log data from different AWS regions needed to be analyzed cost-effectively.<br><br><span class="font-semibold text-gray-200">Solution:</span> I designed a serverless data processing architecture triggered by S3 and Lambda for event-driven processing.<br><br><span class="font-semibold text-gray-200">Result:</span> Fixed server costs were eliminated, applying pay-as-you-go principles for per-transaction billing.',
    proj10Title: "Cloud Resiliency Patterns 🛡️",
    proj10Desc: '<span class="font-semibold text-gray-200">Problem:</span> Applications had low resilience levels against transient errors and outages in critical cloud services.<br><br><span class="font-semibold text-gray-200">Solution:</span> I developed a fault tolerance library using Java AWS SDK, implementing Circuit Breaker and Retry patterns.<br><br><span class="font-semibold text-gray-200">Result:</span> System self-recovery capability was increased, and API error rates were reduced by 25%.',
    proj11Title: "Hybrid Cloud Data Backup 💾",
    proj11Desc: '<span class="font-semibold text-gray-200">Problem:</span> Need to backup Azure and local data on AWS S3 to create a disaster recovery (DR) center.<br><br><span class="font-semibold text-gray-200">Solution:</span> I built automated cross-cloud data transfer scripts using Boto3 and set up lifecycle policies.<br><br><span class="font-semibold text-gray-200">Result:</span> Data storage costs were optimized using Glacier S3, and Recovery Time Objective (RTO) was improved.',
    proj12Title: "Digital Footprint Scanner 🔍",
    proj12Desc: '<span class="font-semibold text-gray-200">Problem:</span> Scattered OSINT data and inability to measure individual exposure created security vulnerabilities.<br><br><span class="font-semibold text-gray-200">Solution:</span> I developed a Python-based digital footprint scanner and analysis engine that combines various security APIs.<br><br><span class="font-semibold text-gray-200">Result:</span> Proactive leak checks and data-driven risk score reporting were enabled for users.',
    proj13Title: "Enterprise Bank Automation 🏦",
    proj13Desc: '<span class="font-semibold text-gray-200">Problem:</span> Necessity of transforming corporate financial models into software architecture following clean code and SOLID principles.<br><br><span class="font-semibold text-gray-200">Solution:</span> I designed a modular bank automation based on C# and MSSQL, applying inheritance and encapsulation techniques.<br><br><span class="font-semibold text-gray-200">Result:</span> A layered software architecture with a high level of sustainability was successfully implemented.',
    btnLiveSite: "View Live Site",
    btnGithubProfile: "GitHub Profile",

    // ── Contact ──
    contactTitle: "Get in Touch",
    contactDesc: "Feel free to reach out for global-scale projects, technical consulting, or collaboration opportunities.",
  }
};

// ── Switch Language Function ──
function switchLanguage(lang) {
  const t = translations[lang];
  if (!t) { console.error('i18n: unknown language', lang); return; }

  // Set <html lang>
  document.documentElement.lang = lang;

  // Save preference
  localStorage.setItem('preferredLang', lang);

  // Update page title
  document.title = t.pageTitle;

  // Walk all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = t[key];
    if (value === undefined || value === null) {
      console.warn(`i18n: missing key "${key}" for lang "${lang}"`);
      return; // CRITICAL: keep existing text, do NOT blank the element
    }
    // Use innerHTML for keys that contain HTML markup (about, project descs)
    if (value.includes('<')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Update language toggle button text
  const newBtnText = lang === 'en' ? 'TR' : 'EN';
  const langBtn = document.getElementById('lang-switch');
  const langBtnMobile = document.getElementById('lang-switch-mobile');
  if (langBtn) langBtn.textContent = newBtnText;
  if (langBtnMobile) langBtnMobile.textContent = newBtnText;
}

// ── Initialize ──
(function initI18n() {
  const saved = localStorage.getItem('preferredLang');
  const lang = saved || 'tr';

  // Wire up toggle buttons
  const langBtn = document.getElementById('lang-switch');
  const langBtnMobile = document.getElementById('lang-switch-mobile');

  function toggle() {
    const current = document.documentElement.lang || 'tr';
    switchLanguage(current === 'tr' ? 'en' : 'tr');
  }

  if (langBtn) langBtn.addEventListener('click', toggle);
  if (langBtnMobile) langBtnMobile.addEventListener('click', toggle);

  // Apply saved language (or default TR)
  if (lang !== 'tr') {
    switchLanguage(lang);
  } else {
    // Even for TR default, set the html lang and save
    document.documentElement.lang = 'tr';
    localStorage.setItem('preferredLang', 'tr');
  }
})();
