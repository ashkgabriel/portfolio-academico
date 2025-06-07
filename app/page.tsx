"use client";

import Image from "next/image";

import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-start py-2 max-w-4xl mx-auto">
      <div className="flex flex-row animate-slide-in-left justify-center">
        <Image
          alt="Gabriel"
          className="rounded-full border-spacing-0 border-2 border-zinc-600 dark:border-zinc-300 transition-all duration-300 ease-in-out hover:scale-105"
          height={100}
          src={"https://github.com/ashkgabriel.png"}
          width={100}
        />
        <div className="flex flex-col text-center mx-8 justify-center">
          <h1 className="text-4xl font-bold">Gabriel Fortes Ashikaga</h1>
          <h2 className="text-2xl text-zinc-600 dark:text-zinc-300">
            {t("job.position")}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {t("company.location")}
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("about.title")}</h2>
        <div className="space-y-3 text-justify">
          <p>{t("about.description1")}</p>
          <p>{t("about.description2")}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("education.title")}</h2>
        <div className="space-y-3">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
            <p className="font-medium">{t("education.software")}</p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
            <p className="font-medium">{t("education.engineering")}</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("experience.title")}</h2>
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700">
          <h3 className="text-xl font-semibold mb-2">
            {t("experience.company")}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-3">
            {t("experience.role")}
          </p>
          <div className="space-y-2 text-sm">
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.mobile")}`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.backend")}`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.web")}`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.database")}`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.devops")}`,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: `• ${t("experience.mentoring")}`,
              }}
            />
            <p>• {t("experience.leadership")}</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("skills.frontend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("skills.mobile")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "React Native", "Expo", "Swift", "Kotlin"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("skills.backend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C# ASP.NET",
                  "NestJS",
                  "Node.js",
                  "Python",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("skills.database")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Prisma",
                  "TypeORM",
                  "Mongoose",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("skills.devops")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "Git",
                  "CI/CD",
                  "Firebase",
                  "OneSignal",
                  "AWS",
                  "SemVer",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("soft.skills.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>{t("soft.skill.mentoring")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>{t("soft.skill.training")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>{t("soft.skill.teamwork")}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("soft.skill.problem.solving")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("soft.skill.learning")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>{t("soft.skill.communication")}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
