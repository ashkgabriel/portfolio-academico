import { Link } from "@heroui/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen py-2">
      <div className="flex flex-row">
        <Image
          alt="Gabriel"
          className="rounded-full"
          height={100}
          src={"https://github.com/ashkgabriel.png"}
          width={100}
        />
        <div className="flex flex-col text-center mx-8 justify-center">
          <h1 className="text-4xl font-bold">Gabriel Fortes Ashikaga</h1>
          <h2 className="text-2xl">Desenvolvedor de Software</h2>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="text-2xl font-bold">Introdução</h2>
        <p>Olá! Meu nome é Gabriel e sou desenvolvedor de software.</p>
        <p>Tenho experiência com desenvolvimento web, mobile e desktop.</p>
        <p>
          Atualmente estou estudando Desenvolvimento de Software Multiplataforma
          na{" "}
          <Link
            className="font-extrabold text-zinc-600 dark:text-zinc-300 underline hover:text-zinc-800 dark:hover:text-zinc-400"
            href="https://fatecvotorantim.cps.sp.gov.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Fatec Votorantim
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
