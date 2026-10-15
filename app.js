'use strict';

(() => {
  document.documentElement.classList.add('has-js');
  const translations = {
    tr: {
      navEducation: 'Eğitim', cosmicOpen: 'Cosmic Pipeline projesini incele', aegisOpen: 'AegisOps projesini incele',
      cosmicDescription: 'Uydu telemetrisindeki bozulmaları kural, istatistik ve ML/DL katmanlarıyla tespit eden; işaretli noktaları onaran veri işleme hattı.',
      aegisDescription: 'Ekipman telemetrisini kurallar ve Isolation Forest ile inceleyip bakım ekiplerinin değerlendirebileceği olaylara dönüştüren MVP.',
      aegisArtNote: 'Sinyalden bakım olayına.', gambiaDate: 'HAZ 2026 — DEVAM',
      gambiaRole: 'DevOps Engineer (Volunteer)',
      gambiaDescription: 'Gönüllü olarak CI/CD, deploy planlama, ortam yapılandırması ve operasyonel hazırlık süreçlerine katkı sağlıyorum.',
      otherExperience: 'Diğer deneyimler', qnbDate: 'AĞUSTOS 2025',
      qnbDescription: 'Bankacılık teknolojileri, fintech ve dijital dönüşüm odaklı çevrim içi program.', elmarDate: 'EKİM 2024',
      elmarDescription: 'Yazılım geliştirme ve test süreçleri üzerine kısa süreli çalışma.',
      habitatTitle: 'Habitat Derneği', habitatContribution: 'Gençlere bütçeleme, birikim ve sorumlu para yönetimi üzerine finansal okuryazarlık eğitimleri veriyorum.',
      volunteerLabel: 'GÖNÜLLÜ ÇALIŞMALAR', volunteerTitle: 'Gönüllülük',
      habitatRole: 'Financial Literacy Trainer', habitatDate: 'ARA 2025 — DEVAM',
      bekoInfraRole: 'System Infrastructure Intern', bekoAiRole: 'AIOps Engineer | PREP',
      qnbRole: 'QNB 101 Online Internship', elmarRole: 'Software Engineer',
      openSourceLabel: 'AÇIK KAYNAK', openSourceTitle: 'Birlikte üretilen kod.',
      educationEyebrow: 'EĞİTİM & GELİŞİM', educationTitle1: 'Temeli sağlam.', educationTitle2: 'Öğrenmesi sürekli.',
      universityDate: '2024 — DEVAM', universityDegree: 'Yazılım Mühendisliği · 4. sınıf',
      universityNote: 'Derslerde öğrendiklerimi MLOps, AIOps ve altyapı projeleriyle pratiğe döküyorum.',
      transferNote: 'Öncesinde Gümüşhane Üniversitesi · 2023–2024',
      certificationsTitle: 'Seçili eğitimler & sertifikalar', allCertificates: "Tümü LinkedIn'de",
      visitProject: 'Projeyi aç', uiConcept: 'UI konseptini gör',
      skip: 'İçeriğe geç', homeLabel: 'Ömer Can Gümüş, ana sayfa', navLabel: 'Ana menü',
      navProjects: 'Projeler', navAbout: 'Hakkımda', navExperience: 'Deneyim', navContact: 'Konuşalım',
      menuOpen: 'Menüyü aç', menuClose: 'Menüyü kapat', availability: 'Yeni fırsatlara açığım',
      intro: 'MERHABA, BEN ÖMER CAN.', heroLine1: 'Sağlam altyapı.', heroLine2: 'Sürekli gelişim.',
      heroDescription: 'Bulut altyapısı, otomasyon ve makine öğreniminin buluştuğu yerde çalışıyorum. Sistemleri daha güvenilir ve yönetilebilir hâle getirmeyi seviyorum.',
      viewProjects: 'Projelerimi keşfet', downloadCV: "CV'mi indir", location: 'Türkiye · Uzaktan çalışmaya açık',
      architectureLabel: 'Kod, otomasyon, bulut altyapısı ve gözlemlenebilirlik arasındaki ilişkiyi gösteren çalışma alanları şeması',
      visualNoteTitle: 'Merakla başlar.', visualNoteText: 'Otomasyonla ölçeklenir.', visualCaption: 'FİKİRDEN ALTYAPIYA',
      highlightBeko: 'AIOps & sistem altyapısı deneyimi', highlightUniTitle: 'Fırat Üniversitesi', highlightUni: 'Yazılım Mühendisliği',
      highlightAward: 'Güneydoğu Anadolu Bölge Birinciliği · 2025', projectsEyebrow: 'SEÇİLİ ÇALIŞMALAR',
      projectsTitle1: 'Öğrenerek kurdum.', projectsTitle2: 'Üreterek geliştirdim.',
      projectsIntro: 'Her proje, farklı bir soruya cevap arıyor. Ortak noktaları: otomasyon, gözlemlenebilirlik ve sağlam bir altyapı.',
      filterLabel: 'Projeleri filtrele', filterAll: 'Tümü', projectWord: 'proje',
      starDescription: 'Uydu telemetrisi simülasyonunda anomali tespiti, model sağlığı ve veri kaymasını bir araya getiren Edge-MLOps mimarisi.',
      starOpen: 'Star-Ops projesini incele', oracleTitle: 'Oracle Plan Analiz Asistanı',
      oracleDescription: "Büyük execution plan'larda incelenmesi gereken noktaları kurallarla belirleyen, bulguları LLM ile açıklayan analiz asistanı.",
      oracleOpen: 'Oracle projesini incele', oracleArtNote: 'Karmaşıklıktan anlaşılır bulgulara.',
      reliabilityDescription: 'Telemetriyi SLO, anomali tespiti ve simüle iyileştirme akışlarına bağlayan; Kubernetes ve Terraform tanımları içeren AIOps/SRE prototipi.',
      reliabilityOpen: 'Cloud-Native Reliability projesini incele',
      costDescription: 'AWS kaynaklarındaki maliyet fırsatlarını deterministik kontrollerle belirleyen, önceliklendiren bulut maliyet optimizasyon projesi.',
      costOpen: 'GhostCost projesini incele', costArtNote: 'Görünmeyen maliyetleri görünür kıl.',
      projectsFooter: 'Daha fazlası ve açık kaynak çalışmalarım için', aboutEyebrow: 'BİRAZ DA BEN',
      aboutTitle1: 'Merak ediyorum.', aboutTitle2: 'Kuruyorum.', aboutTitle3: 'İyileştiriyorum.',
      aboutLead: 'Bir sistemin sadece çalışmasıyla değil, nasıl çalıştığıyla da ilgileniyorum.',
      aboutText1: "Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Beko'da AIOps ve sistem altyapısı ekiplerinde yaklaşık 10 ay boyunca anomali tespiti, izleme ve operasyonel otomasyon üzerine çalıştım.",
      aboutText2: 'Ana odağım MLOps. Makine öğrenimi modellerini güvenilir sistemlerle buluşturmak; bunun için bulut, CI/CD ve gözlemlenebilirlik tarafında derinleşmek istiyorum.',
      aboutAvailability: 'Şu an uzaktan part-time çalışmaya, Ocak 2027 itibarıyla uzun dönem staj fırsatlarına açığım.',
      stackTitle: 'Çalışma çantam', stackSubtitle: 'İHTİYACA GÖRE, AMACA GÖRE.', experienceEyebrow: 'DENEYİM & KATKI',
      fullCV: 'Tüm deneyimler · CV', experienceTitle1: 'Gerçek ekipler.', experienceTitle2: 'Gerçek öğrenimler.',
      experienceIntro: 'Kurumsal altyapılardan açık kaynak topluluklarına, her ortamdan yeni bir bakış açısı.',
      awardTitle: 'Bölge birinciliği', awardLocation: 'Güneydoğu Anadolu', bekoInfraDate: 'TEM — AĞU 2026',
      bekoInfraDescription: 'LLM ve vektör arama ile ticket sınıflandırma; bulut izleme, proaktif bildirim ve kurumsal sistem operasyonları.',
      bekoAiDate: 'ARA 2025 — TEM 2026',
      bekoAiDescription: 'Isolation Forest ve zaman serileriyle anomali tespiti; kritik servisler için izleme, alarm eşikleri ve Python otomasyonları.',
      isbankTitle: 'Türkiye İş Bankası', isbankDate: 'EYL — KAS 2026', isbankRole: 'Data Analytics and Artificial Intelligence Fellow',
      isbankDescription: 'Yapay zekâ modellerinin MLOps akışlarına entegrasyonu; Airflow ve MLflow ile model performansı, deney kaydı ve veri kayması takibi.',
      contributeLabel: 'BİRLİKTE ÜRETMEK', contributeTitle: 'Kodun ötesinde katkı.',
      gambiaContribution: 'Gönüllü DevOps · CI/CD, deploy planlama ve operasyonel hazırlık',
      squadContribution: 'Açık kaynak · AI agent ekosistemi ve geliştirme iş akışları',
      contactEyebrow: 'BİR SONRAKİ ADIM', contactAvailability: 'Part-time & uzun dönem staj',
      contactTitle1: 'Birlikte iyi şeyler', contactTitle2: 'kuralım.', emailLabel: "Ömer'e e-posta gönder",
      contactDescription: 'Ekibinde katkı sağlayabileceğim bir alan varsa konuşalım.', copyEmail: 'E-posta adresini kopyala',
      copied: 'E-posta adresi kopyalandı.', copyFailed: 'Kopyalama kullanılamıyor. Adresi seçip kopyalayabilirsin.',
      backTop: 'Başa dön', closeProject: 'Proje detayını kapat', dialogContext: 'Projenin odağı', dialogApproach: 'Yaklaşımım',
      repoLink: "GitHub'da incele", discussLink: 'Proje hakkında konuşalım',
      pageTitle: 'Ömer Can Gümüş — DevOps & MLOps',
      metaDescription: 'Ömer Can Gümüş — DevOps, MLOps ve bulut altyapısı. Beko deneyimi, seçili projeler ve açık kaynak katkıları.'
    },
    en: {
      navEducation: 'Education', cosmicOpen: 'Explore the Cosmic Pipeline project', aegisOpen: 'Explore the AegisOps project',
      cosmicDescription: 'A processing pipeline that detects satellite telemetry faults using rules, statistics and ML/DL layers, then repairs flagged samples.',
      aegisDescription: 'A predictive maintenance MVP that turns equipment telemetry into reviewable events using rules and Isolation Forest.',
      aegisArtNote: 'From signals to maintenance events.', gambiaDate: 'JUN 2026 — PRESENT',
      gambiaRole: 'DevOps Engineer (Volunteer)',
      gambiaDescription: 'Contributing as a volunteer to CI/CD, deployment planning, environment configuration and operational readiness.',
      otherExperience: 'Other experience', qnbDate: 'AUGUST 2025',
      qnbDescription: 'An online program covering banking technology, fintech and digital transformation.', elmarDate: 'OCTOBER 2024',
      elmarDescription: 'A short-term experience focused on software development and testing processes.',
      habitatTitle: 'Habitat Association', habitatContribution: 'Delivering financial literacy training to young people on budgeting, saving and responsible money management.',
      volunteerLabel: 'VOLUNTEER EXPERIENCE', volunteerTitle: 'Volunteering',
      habitatRole: 'Financial Literacy Trainer', habitatDate: 'DEC 2025 — PRESENT',
      bekoInfraRole: 'System Infrastructure Intern', bekoAiRole: 'AIOps Engineer | PREP',
      qnbRole: 'QNB 101 Online Internship', elmarRole: 'Software Engineer',
      openSourceLabel: 'OPEN SOURCE', openSourceTitle: 'Building together.',
      educationEyebrow: 'EDUCATION & GROWTH', educationTitle1: 'Strong foundations.', educationTitle2: 'Lifelong learning.',
      universityDate: '2024 — PRESENT', universityDegree: 'Software Engineering · Senior student',
      universityNote: 'Putting coursework into practice through MLOps, AIOps and infrastructure projects.',
      transferNote: 'Previously at Gümüşhane University · 2023–2024',
      certificationsTitle: 'Selected courses & certificates', allCertificates: 'All on LinkedIn',
      visitProject: 'Visit project', uiConcept: 'View UI concept',
      skip: 'Skip to content', homeLabel: 'Ömer Can Gümüş, home', navLabel: 'Main navigation',
      navProjects: 'Projects', navAbout: 'About', navExperience: 'Experience', navContact: "Let's talk",
      menuOpen: 'Open menu', menuClose: 'Close menu', availability: 'Open to new opportunities',
      intro: "HI, I'M ÖMER CAN.", heroLine1: 'Solid foundations.', heroLine2: 'Always evolving.',
      heroDescription: 'I work where cloud infrastructure, automation and machine learning meet. I enjoy making systems more reliable and easier to operate.',
      viewProjects: 'Explore my work', downloadCV: 'Download CV', location: 'Türkiye · Open to remote work',
      architectureLabel: 'An illustration connecting code, automation, cloud infrastructure and observability in my work',
      visualNoteTitle: 'Starts with curiosity.', visualNoteText: 'Scales with automation.', visualCaption: 'FROM IDEA TO INFRASTRUCTURE',
      highlightBeko: 'AIOps & system infrastructure experience', highlightUniTitle: 'Fırat University', highlightUni: 'Software Engineering',
      highlightAward: 'Southeastern Anatolia Region · 1st Place · 2025', projectsEyebrow: 'SELECTED WORK',
      projectsTitle1: 'Built while learning.', projectsTitle2: 'Improved by doing.',
      projectsIntro: 'Each project explores a different question. The common thread: automation, observability and a solid foundation.',
      filterLabel: 'Filter projects', filterAll: 'All work', projectWord: 'projects',
      starDescription: 'An Edge-MLOps architecture bringing together anomaly detection, model health and data drift in a satellite telemetry simulation.',
      starOpen: 'Explore the Star-Ops project', oracleTitle: 'Oracle Plan Analysis Assistant',
      oracleDescription: 'An assistant that uses deterministic rules to flag areas for review in large execution plans, with an LLM to explain its findings.',
      oracleOpen: 'Explore the Oracle project', oracleArtNote: 'From complexity to clear findings.',
      reliabilityDescription: 'An AIOps/SRE prototype connecting telemetry to SLOs, anomaly detection and simulated recovery, with Kubernetes and Terraform definitions.',
      reliabilityOpen: 'Explore the Cloud-Native Reliability project',
      costDescription: 'A cloud cost optimization project using deterministic checks to identify and prioritize opportunities across AWS resources.',
      costOpen: 'Explore the GhostCost project', costArtNote: 'Make hidden cloud costs visible.',
      projectsFooter: 'More projects and open source contributions on', aboutEyebrow: 'A BIT ABOUT ME',
      aboutTitle1: 'Stay curious.', aboutTitle2: 'Build things.', aboutTitle3: 'Make them better.',
      aboutLead: "I'm interested in how a system works, as much as whether it works.",
      aboutText1: 'I study Software Engineering at Fırat University. I spent about 10 months with the AIOps and system infrastructure teams at Beko, working on anomaly detection, monitoring and operational automation.',
      aboutText2: 'My main focus is MLOps: connecting machine learning models with reliable systems, while building deeper skills in cloud infrastructure, CI/CD and observability.',
      aboutAvailability: "I'm open to remote part-time work now, and long-term internship opportunities from January 2027.",
      stackTitle: 'My toolkit', stackSubtitle: 'CHOSEN FOR THE JOB AT HAND.', experienceEyebrow: 'EXPERIENCE & CONTRIBUTIONS',
      fullCV: 'Full experience · CV', experienceTitle1: 'Real teams.', experienceTitle2: 'Real lessons.',
      experienceIntro: 'From enterprise infrastructure to open source communities, each environment brings a new perspective.',
      awardTitle: 'Regional first place', awardLocation: 'Southeastern Anatolia', bekoInfraDate: 'JUL — AUG 2026',
      bekoInfraDescription: 'Ticket classification with LLMs and vector search; cloud monitoring, proactive notifications and enterprise system operations.',
      bekoAiDate: 'DEC 2025 — JUL 2026',
      bekoAiDescription: 'Anomaly detection with Isolation Forest and time-series models; monitoring, alert tuning and Python automation for critical services.',
      isbankTitle: 'Türkiye İş Bankası', isbankDate: 'SEP — NOV 2026', isbankRole: 'Data Analytics and Artificial Intelligence Fellow',
      isbankDescription: 'Integrating AI models into MLOps workflows; tracking model performance, experiments and data drift with Airflow and MLflow.',
      contributeLabel: 'BUILDING TOGETHER', contributeTitle: 'Contribution beyond code.',
      gambiaContribution: 'Volunteer DevOps · CI/CD, deployment planning and operational readiness',
      squadContribution: 'Open source · AI agent ecosystem and development workflows',
      contactEyebrow: 'THE NEXT STEP', contactAvailability: 'Part-time & long-term internships',
      contactTitle1: "Let's build something", contactTitle2: 'that matters.', emailLabel: 'Send Ömer an email',
      contactDescription: "Have a place on your team where I could contribute? Let's talk.", copyEmail: 'Copy email address',
      copied: 'Email address copied.', copyFailed: 'Copy is unavailable. You can select and copy the address.',
      backTop: 'Back to top', closeProject: 'Close project details', dialogContext: 'Project focus', dialogApproach: 'My approach',
      repoLink: 'Explore on GitHub', discussLink: "Let's discuss this project",
      pageTitle: 'Ömer Can Gümüş — DevOps & MLOps',
      metaDescription: 'Ömer Can Gümüş — DevOps, MLOps and cloud infrastructure. Experience at Beko, selected projects and open source contributions.'
    }
  };

  const projects = {
    starops: {
      category: 'EDGE MLOPS / ANOMALY DETECTION',
      tags: ['Python', 'FastAPI', 'Isolation Forest', 'LSTM Autoencoder', 'PostgreSQL', 'Docker'],
      tr: {
        title: 'Star-Ops', summary: translations.tr.starDescription,
        context: 'Altı uydudan oluşan bir simülasyon ortamında, telemetri verisini izleyen ve olağan dışı davranışları tespit eden bir sistem. Model çıktısının yanında modelin kendisinin sağlığını da takip etmeye odaklanıyor.',
        approach: ['Isolation Forest, LSTM Autoencoder ve SPC/EWMA yöntemlerini bir anomali tespit yaklaşımında bir araya getirdim.', 'KS testi ve PSI analizi ile veri dağılımındaki değişimleri izledim.', 'Edge-MLOps mimarisini API, veri katmanı ve Docker ile çalıştırılabilir bir yapıda tasarladım.']
      },
      en: {
        title: 'Star-Ops', summary: translations.en.starDescription,
        context: 'A system that monitors telemetry and detects unusual behavior in a six-satellite simulation environment. It focuses on the health of the models as well as their predictions.',
        approach: ['Combined Isolation Forest, LSTM Autoencoder and SPC/EWMA methods in an anomaly detection ensemble.', 'Monitored shifts in data distributions with KS tests and PSI analysis.', 'Designed an Edge-MLOps architecture with an API, a data layer and Docker packaging.']
      }
    },
    oracle: {
      category: 'AI / DATABASE ANALYSIS', tags: ['Python', 'Streamlit', 'Oracle', 'Rule-based Analysis', 'LLM'],
      tr: {
        title: translations.tr.oracleTitle, summary: translations.tr.oracleDescription,
        context: 'Büyük Oracle execution plan çıktılarında bir uzmanın ilk inceleyeceği noktaları kanıtlarıyla öne çıkarmak. Asistanın amacı karar vermek değil, incelemeyi daha anlaşılır ve odaklı hâle getirmek.',
        approach: ["ID ve Parent ID üzerinden planın ağaç yapısını kurarak join, tarama, predicate ve partition pruning bulgularını değerlendirdim.", 'Deterministik analiz motoru ile bulguları belirleyip önceliklendirdim.', 'LLM katmanını, motorun ürettiği bulguları daha açık bir dille anlatmak için kullandım; arayüzü Streamlit ile hazırladım.']
      },
      en: {
        title: translations.en.oracleTitle, summary: translations.en.oracleDescription,
        context: 'Highlighting evidence-backed areas an expert would review first in a large Oracle execution plan. The assistant supports a focused review, with the final judgment left to the expert.',
        approach: ['Reconstructed the plan tree using ID and Parent ID to evaluate joins, scans, predicates and partition pruning.', 'Identified and prioritized findings with a deterministic rule engine.', 'Used an LLM to explain the engine findings in clearer language, with a Streamlit interface.']
      }
    },
    reliability: {
      category: 'DEVOPS / AIOPS / OBSERVABILITY', tags: ['Python', 'Kubernetes', 'AWS EKS', 'Prometheus', 'Terraform'],
      repository: 'https://github.com/omercangumus/cloud-native-reliability-platform',
      tr: {
        title: 'Cloud-Native Reliability Platform', summary: translations.tr.reliabilityDescription,
        context: 'Dağıtık mikroservisler için telemetri, anomali tespiti, SLO değerlendirmesi ve simüle iyileştirme komutlarını birleştiren bir mimari prototip.',
        approach: ['Z-Score, EMA ve PSI ile anomali ve veri kayması sinyallerini izleme akışlarına bağladım.', 'Geri alınabilir iyileştirme komutlarını simüle edilen bir akışta modelledim.', 'FastAPI, Redis ve Prometheus/Grafana bileşenlerini Kubernetes ve Terraform altyapı tanımlarıyla bir araya getirdim.']
      },
      en: {
        title: 'Cloud-Native Reliability Platform', summary: translations.en.reliabilityDescription,
        context: 'An architecture prototype combining telemetry, anomaly detection, SLO evaluation and simulated recovery commands for distributed microservices.',
        approach: ['Connected Z-Score, EMA and PSI signals to anomaly and data drift monitoring.', 'Modeled reversible recovery commands in a simulated workflow.', 'Combined FastAPI, Redis and Prometheus/Grafana with Kubernetes and Terraform infrastructure definitions.']
      }
    },
    ghostcost: {
      category: 'CLOUD / FINOPS / AUTOMATION', tags: ['Python', 'FastAPI', 'AWS', 'Docker', 'CI/CD'],
      website: 'https://ghostcost.com/',
      tr: {
        title: 'GhostCost', summary: translations.tr.costDescription,
        context: 'EC2, RDS, EBS, S3, Lambda, ECS ve ağ kaynakları gibi farklı AWS servislerindeki maliyet optimizasyon fırsatlarını sistematik olarak inceleyen bir proje.',
        approach: ['Kaynakları servis bazlı deterministik kontrollerle inceleyen bir tespit motoru geliştirdim.', 'Uyarlanabilir eşikler ve aksiyon önerileriyle bulguları önceliklendiren bir PriorityEngine tasarladım.', 'Uygulamayı Docker ve otomatik testleri içeren bir CI/CD akışıyla paketledim.']
      },
      en: {
        title: 'GhostCost', summary: translations.en.costDescription,
        context: 'A project for systematically examining cost optimization opportunities across AWS services, including EC2, RDS, EBS, S3, Lambda, ECS and networking.',
        approach: ['Built a detection engine with service-specific deterministic resource checks.', 'Designed a PriorityEngine with adaptive thresholds and action playbooks to prioritize findings.', 'Packaged the application with Docker and a CI/CD workflow including automated tests.']
      }
    },
    cosmic: {
      category: 'MLOPS / SIGNAL PROCESSING / OPEN SOURCE',
      repository: 'https://github.com/omercangumus/-cosmic-pipeline',
      tags: ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'PyTorch', 'Docker'],
      tr: {
        title: 'Cosmic Pipeline', summary: translations.tr.cosmicDescription,
        context: 'TUA Astro Hackathon için geliştirilen açık kaynak telemetri işleme hattı. Veri boşlukları, sıçramalar, sensör donması ve kayma gibi farklı bozulmaları katmanlı bir yaklaşımla ele alıyor.',
        approach: ['Deterministik kontrolleri Z-score, kayan pencere, Isolation Forest ve LSTM Autoencoder ile birleştirdim.', 'Ensemble kararı sonrasında yalnızca anomali olarak işaretlenen noktaları onaracak bir akış kurdum.', 'Gradio arayüzünde veri yükleme, sonuç karşılaştırması ve doğrulama adımlarını bir araya getirdim.']
      },
      en: {
        title: 'Cosmic Pipeline', summary: translations.en.cosmicDescription,
        context: 'An open source telemetry processing pipeline developed for the TUA Astro Hackathon. It uses a layered approach to data gaps, spikes, frozen sensors and drift.',
        approach: ['Combined deterministic checks with Z-score, sliding windows, Isolation Forest and LSTM Autoencoder.', 'Designed a workflow that repairs only samples flagged as anomalies after ensemble voting.', 'Brought data upload, result comparison and validation together in a Gradio interface.']
      }
    },
    aegis: {
      category: 'AIOPS / PREDICTIVE MAINTENANCE / MVP',
      repository: 'https://github.com/omercangumus/-AegisOps',
      demo: 'https://omercangumus.github.io/aegisops-ui-concept/',
      tags: ['FastAPI', 'scikit-learn', 'Pandas', 'SQLite', 'Docker Compose'],
      tr: {
        title: 'AegisOps', summary: translations.tr.aegisDescription,
        context: 'Sıcaklık, basınç, titreşim ve devir gibi ekipman telemetrisini işleyen kestirimci bakım MVP’si. Bağlantılı UI konsepti, projenin ayrı bir arayüz gösterimidir.',
        approach: ['Simüle ekipman verilerini kural tabanlı kontroller ve Isolation Forest ile değerlendirdim.', 'Tespitleri FastAPI ve SQLite üzerinden incelenebilir bakım olaylarına dönüştürdüm.', 'Yerel çalışma ortamını Docker Compose ile tanımladım; arayüz konseptini ayrıca hazırladım.']
      },
      en: {
        title: 'AegisOps', summary: translations.en.aegisDescription,
        context: 'A predictive maintenance MVP processing equipment temperature, pressure, vibration and RPM telemetry. The linked UI concept is a separate presentation of the interface.',
        approach: ['Evaluated simulated equipment data with rule-based checks and Isolation Forest.', 'Turned detections into reviewable maintenance events with FastAPI and SQLite.', 'Defined a local environment with Docker Compose and prepared a separate UI concept.']
      }
    }
  };

  let language = 'tr';
  let selectedProject = null;
  let lastFocusedElement = null;
  let copyTimer;
  const dialog = document.getElementById('project-dialog');
  const nav = document.getElementById('navigation');
  const menuButton = document.querySelector('.menu-toggle');
  const count = document.querySelector('.project-count');

  function updateCount() {
    const visible = [...document.querySelectorAll('.project-card')].filter(card => !card.hidden).length;
    count.textContent = `${String(visible).padStart(2, '0')} ${translations[language].projectWord}`;
  }

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', translations[language][open ? 'menuClose' : 'menuOpen']);
    menuButton.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
  }

  function fillDialog(id) {
    const project = projects[id];
    const content = project[language];
    document.getElementById('dialog-category').textContent = project.category;
    document.getElementById('dialog-title').textContent = content.title;
    document.getElementById('dialog-summary').textContent = content.summary;
    document.getElementById('dialog-context').textContent = content.context;
    const approach = document.getElementById('dialog-approach');
    approach.replaceChildren(...content.approach.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    }));
    const stack = document.getElementById('dialog-stack');
    stack.replaceChildren(...project.tags.map(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      return span;
    }));
    const link = document.getElementById('dialog-link');
    const destination = project.repository || project.website;
    link.href = destination || `mailto:omercangumus3@gmail.com?subject=${encodeURIComponent(content.title)}`;
    document.getElementById('dialog-link-text').textContent = translations[language][project.repository ? 'repoLink' : project.website ? 'visitProject' : 'discussLink'];
    if (destination) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.removeAttribute('target');
      link.removeAttribute('rel');
    }
    const demo = document.getElementById('dialog-demo');
    demo.hidden = !project.demo;
    if (project.demo) demo.href = project.demo;
  }

  function setLanguage(next) {
    if (!translations[next]) return;
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = translations[next][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const value = translations[next][element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === next)));
    document.title = translations[next].pageTitle;
    document.querySelector('meta[name="description"]').content = translations[next].metaDescription;
    document.querySelector('meta[property="og:locale"]').content = next === 'tr' ? 'tr_TR' : 'en_US';
    document.querySelector('meta[property="og:description"]').content = translations[next].metaDescription;
    menuButton.setAttribute('aria-label', translations[next][nav.classList.contains('is-open') ? 'menuClose' : 'menuOpen']);
    document.querySelector('.copy-status').textContent = '';
    updateCount();
    if (selectedProject) fillDialog(selectedProject);
    try {
      localStorage.setItem('ocg-language', next);
      localStorage.setItem('preferredLang', next);
    } catch { /* The language switch also works without local storage. */ }
  }

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('.project-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
      updateCount();
    });
  });

  document.querySelectorAll('.project-open').forEach(button => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.addEventListener('click', () => {
      selectedProject = button.dataset.project;
      lastFocusedElement = button;
      fillDialog(selectedProject);
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
    });
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    selectedProject = null;
    if (lastFocusedElement) lastFocusedElement.focus({ preventScroll: true });
  });

  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    setMenu(open);
    if (open) nav.querySelector('a').focus();
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (nav.classList.contains('is-open') && !event.target.closest('.header')) setMenu(false);
  });
  const mobile = window.matchMedia('(max-width: 700px)');
  const onViewportChange = event => { if (!event.matches) setMenu(false); };
  if (mobile.addEventListener) mobile.addEventListener('change', onViewportChange);

  document.querySelector('.copy-email').addEventListener('click', async () => {
    const button = document.querySelector('.copy-email');
    const status = document.querySelector('.copy-status');
    clearTimeout(copyTimer);
    try {
      await navigator.clipboard.writeText('omercangumus3@gmail.com');
      button.querySelector('use').setAttribute('href', '#i-check');
      status.textContent = translations[language].copied;
      copyTimer = setTimeout(() => {
        button.querySelector('use').setAttribute('href', '#i-copy');
        status.textContent = '';
      }, 3500);
    } catch {
      const address = document.querySelector('.email-row > a');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(address);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = translations[language].copyFailed;
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
        }
      }
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }

  document.getElementById('year').textContent = String(new Date().getFullYear());
  let initialLanguage = 'tr';
  try { initialLanguage = localStorage.getItem('ocg-language') || localStorage.getItem('preferredLang') || 'tr'; } catch { /* Default to Turkish when storage is unavailable. */ }
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage === 'tr' || queryLanguage === 'en') initialLanguage = queryLanguage;
  setLanguage(initialLanguage === 'en' ? 'en' : 'tr');
})();
