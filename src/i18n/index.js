import { ref, computed } from "vue";

// Module-level ref — shared singleton across all components
const currentLang = ref(localStorage.getItem("portfolio-lang") || "en");

const messages = {
  en: {
    nav: {
      home: "Home",
      career: "Career",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      role: "Software Engineer",
      bio: "Focused on scalable architectures, distributed systems, and high-performance APIs. Passionate about backend development and clean software design. Currently building enterprise systems with .NET, Java, and cloud-native technologies.",
      downloadCV: "Download CV",
    },
    career: {
      pageTitle: "Career",
      present: "Present",
      jobs: {
        confience: {
          title: "Software Engineer — Confience",
          description:
            "Working on enterprise systems and distributed architectures with a strong focus on scalability and performance. Building and maintaining high-throughput APIs using C# with .NET, following Clean Architecture and DDD principles. Integrated with Azure DevOps pipelines, Kubernetes orchestration, RabbitMQ messaging, and SQL Server.",
        },
        qyonBackend: {
          title: "Backend Developer — QYON Sistemas Inteligentes",
          description:
            "Focused on backend development using Python with FastAPI and Flask for REST APIs, Java with Spring Boot, and VueJS for frontend features. Worked with SQL databases, Docker, Kubernetes, and web scraping frameworks at scale.",
        },
        qyonTrainee: {
          title: "Trainee — QYON Sistemas Inteligentes",
          description:
            "Started as a programming trainee building REST APIs with Python (FastAPI, Flask), SQLAlchemy ORM, and Java with Spring Boot. Gained hands-on experience with SQL databases and backend architecture patterns.",
        },
        sys8: {
          title: "Trainee Full-Stack — 8SYS Desenvolvimento de Sistemas LTDA.",
          description:
            "Worked on the production and maintenance of the company's web platform using HTML5, CSS3, JavaScript with jQuery, and PHP for backend APIs.",
        },
      },
    },
    skills: {
      pageTitle: "Skills",
      subtitle: "Technologies and concepts I work with",
      categories: {
        languages: "Languages & Frameworks",
        architecture: "Architecture & Concepts",
        infrastructure: "Infrastructure & DevOps",
        cloud: "Cloud & Databases",
      },
    },
    projects: {
      pageTitle: "Projects",
      subtitle: "See all my work on",
      featured: "Featured",
      github: "GitHub",
      live: "Live",
      items: {
        askflow: {
          description:
            "Full-stack social platform composed of a Vue 3 / Quasar frontend (AskFlow.WebApp) and a high-performance ASP.NET Core backend (AskFlow.API), built with Clean Architecture, JWT authentication, and Docker support.",
        },
        gitfind: {
          description:
            "GitHub profile and repository explorer. Search any GitHub user and browse their public repositories instantly.",
        },
        calculator: {
          description:
            "Clean and functional web calculator with a modern interface and keyboard support.",
        },
      },
    },
    contact: {
      pageTitle: "Contact me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Email sent successfully!",
      error: "Failed to send email. Please try again.",
    },
    darkMode: {
      light: "Light mode",
      dark: "Dark mode",
    },
  },

  "pt-BR": {
    nav: {
      home: "Início",
      career: "Carreira",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    home: {
      role: "Engenheiro de Software",
      bio: "Focado em arquiteturas escaláveis, sistemas distribuídos e APIs de alta performance. Apaixonado por desenvolvimento backend e design de software limpo. Atualmente construindo sistemas empresariais com .NET, Java e tecnologias cloud-native.",
      downloadCV: "Baixar Currículo",
    },
    career: {
      pageTitle: "Carreira",
      present: "Atual",
      jobs: {
        confience: {
          title: "Engenheiro de Software — Confience",
          description:
            "Atuando em sistemas empresariais e arquiteturas distribuídas com foco em escalabilidade e performance. Construção e manutenção de APIs de alta throughput com C# e .NET, seguindo princípios de Clean Architecture e DDD. Integrado com pipelines Azure DevOps, orquestração Kubernetes, mensageria RabbitMQ e SQL Server.",
        },
        qyonBackend: {
          title: "Desenvolvedor Backend — QYON Sistemas Inteligentes",
          description:
            "Focado no desenvolvimento backend com Python usando FastAPI e Flask para REST APIs, Java com Spring Boot e VueJS para features de frontend. Trabalhei com bancos de dados SQL, Docker, Kubernetes e frameworks de web scraping em escala.",
        },
        qyonTrainee: {
          title: "Trainee — QYON Sistemas Inteligentes",
          description:
            "Início como trainee de programação construindo REST APIs com Python (FastAPI, Flask), SQLAlchemy ORM e Java com Spring Boot. Experiência prática com bancos de dados SQL e padrões de arquitetura backend.",
        },
        sys8: {
          title: "Trainee Full-Stack — 8SYS Desenvolvimento de Sistemas LTDA.",
          description:
            "Trabalhei na produção e manutenção da plataforma web da empresa usando HTML5, CSS3, JavaScript com jQuery e PHP para APIs backend.",
        },
      },
    },
    skills: {
      pageTitle: "Habilidades",
      subtitle: "Tecnologias e conceitos com os quais trabalho",
      categories: {
        languages: "Linguagens e Frameworks",
        architecture: "Arquitetura e Conceitos",
        infrastructure: "Infraestrutura e DevOps",
        cloud: "Cloud e Bancos de Dados",
      },
    },
    projects: {
      pageTitle: "Projetos",
      subtitle: "Veja todo meu trabalho no",
      featured: "Destaque",
      github: "GitHub",
      live: "Ao vivo",
      items: {
        askflow: {
          description:
            "Plataforma social full-stack composta por um frontend Vue 3 / Quasar (AskFlow.WebApp) e um backend ASP.NET Core de alta performance (AskFlow.API), construído com Clean Architecture, autenticação JWT e suporte a Docker.",
        },
        gitfind: {
          description:
            "Explorador de perfis e repositórios do GitHub. Pesquise qualquer usuário e navegue pelos repositórios públicos instantaneamente.",
        },
        calculator: {
          description:
            "Calculadora web limpa e funcional com interface moderna e suporte a teclado.",
        },
      },
    },
    contact: {
      pageTitle: "Entre em contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar",
      sending: "Enviando...",
      success: "E-mail enviado com sucesso!",
      error: "Falha ao enviar e-mail. Tente novamente.",
    },
    darkMode: {
      light: "Modo claro",
      dark: "Modo escuro",
    },
  },
};

export function useI18n() {
  const t = computed(() => messages[currentLang.value]);

  function toggleLang() {
    currentLang.value = currentLang.value === "en" ? "pt-BR" : "en";
    localStorage.setItem("portfolio-lang", currentLang.value);
  }

  return { t, currentLang, toggleLang };
}
