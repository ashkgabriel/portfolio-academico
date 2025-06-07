"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  pt: {
    "nav.home": "Home",
    "nav.about": "Sobre",
    "about.title": "Sobre Mim",
    "education.title": "Formação Acadêmica",
    "experience.title": "Experiência Profissional",
    "skills.title": "Competências Técnicas",
    "skills.frontend": "Frontend",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend",
    "skills.database": "Banco de Dados",
    "skills.devops": "DevOps & Ferramentas",
    "soft.skills.title": "Soft Skills & Liderança",
    "about.description1":
      "Desenvolvedor de software apaixonado por tecnologia, atualmente trabalhando na Mind Group, uma softwarehouse onde tenho a oportunidade de trabalhar com tecnologias modernas e contribuir para projetos inovadores.",
    "about.description2":
      "Estudante de Desenvolvimento de Software Multiplataforma na Fatec Votorantim, sempre buscando aprender e aplicar novas tecnologias em projetos práticos.",
    "education.engineering": "Bacharel em Engenharia Elétrica - Facens",
    "education.software":
      "Tecnólogo em Desenvolvimento de Software Multiplataforma - Fatec Votorantim",
    "job.position": "Desenvolvedor de Software",
    "company.location": "Mind Group • Fatec Votorantim",
    "experience.company": "Mind Group",
    "experience.role": "Desenvolvedor de Software",
    "experience.mobile":
      "Desenvolvimento mobile com <strong>Flutter</strong>, <strong>Expo</strong> e código nativo em <strong>Swift</strong> e <strong>Kotlin</strong>",
    "experience.backend":
      "Backend development com <strong>C# ASP.NET</strong>, <strong>Node.js</strong> e <strong>TypeScript</strong>",
    "experience.web":
      "Desenvolvimento web com <strong>React</strong>, <strong>Next.js</strong> e <strong>NestJS</strong>",
    "experience.database":
      "Trabalho com bancos de dados <strong>PostgreSQL</strong>, <strong>MySQL</strong> e <strong>MongoDB</strong> utilizando ORMs como <strong>Prisma</strong>, <strong>TypeORM</strong> e <strong>Mongoose</strong>",
    "experience.devops":
      "Experiência com <strong>Docker</strong>, <strong>Firebase</strong>, <strong>OneSignal</strong> e deploy em app stores",
    "experience.mentoring":
      "Mentoria de estagiários e treinamentos em <strong>Git</strong>, <strong>CI/CD</strong>, <strong>Docker</strong>, <strong>SemVer</strong>, <strong>AWS</strong> e <strong>ORMs</strong>",
    "experience.leadership":
      "Participação em iniciativas para implementação de melhorias organizacionais",
    "soft.skill.mentoring": "Mentoria e tutoria de estagiários",
    "soft.skill.training": "Ministrante de treinamentos técnicos",
    "soft.skill.teamwork": "Trabalho colaborativo em equipe",
    "soft.skill.problem.solving": "Resolução de problemas complexos",
    "soft.skill.learning": "Aprendizado contínuo",
    "soft.skill.communication": "Comunicação técnica efetiva",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "about.title": "About Me",
    "education.title": "Academic Background",
    "experience.title": "Professional Experience",
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.mobile": "Mobile",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.devops": "DevOps & Tools",
    "soft.skills.title": "Soft Skills & Leadership",
    "about.description1":
      "Software developer passionate about technology, currently working at Mind Group, a software house where I have the opportunity to work with modern technologies and contribute to innovative projects.",
    "about.description2":
      "Student of Multiplatform Software Development at Fatec Votorantim, always seeking to learn and apply new technologies in practical projects.",
    "education.engineering": "Bachelor's in Electrical Engineering - Facens",
    "education.software":
      "Technology in Multiplatform Software Development - Fatec Votorantim",
    "job.position": "Software Developer",
    "company.location": "Mind Group • Fatec Votorantim",
    "experience.company": "Mind Group",
    "experience.role": "Software Developer",
    "experience.mobile":
      "Mobile development with <strong>Flutter</strong>, <strong>Expo</strong> and native code in <strong>Swift</strong> and <strong>Kotlin</strong>",
    "experience.backend":
      "Backend development with <strong>C# ASP.NET</strong>, <strong>Node.js</strong> and <strong>TypeScript</strong>",
    "experience.web":
      "Web development with <strong>React</strong>, <strong>Next.js</strong> and <strong>NestJS</strong>",
    "experience.database":
      "Working with <strong>PostgreSQL</strong>, <strong>MySQL</strong> and <strong>MongoDB</strong> databases using ORMs like <strong>Prisma</strong>, <strong>TypeORM</strong> and <strong>Mongoose</strong>",
    "experience.devops":
      "Experience with <strong>Docker</strong>, <strong>Firebase</strong>, <strong>OneSignal</strong> and app store deployment",
    "experience.mentoring":
      "Mentoring interns and training on <strong>Git</strong>, <strong>CI/CD</strong>, <strong>Docker</strong>, <strong>SemVer</strong>, <strong>AWS</strong> and <strong>ORMs</strong>",
    "experience.leadership":
      "Participation in initiatives for organizational improvements implementation",
    "soft.skill.mentoring": "Mentoring and tutoring interns",
    "soft.skill.training": "Technical training instructor",
    "soft.skill.teamwork": "Collaborative teamwork",
    "soft.skill.problem.solving": "Complex problem solving",
    "soft.skill.learning": "Continuous learning",
    "soft.skill.communication": "Effective technical communication",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
