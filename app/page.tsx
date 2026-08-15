import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

const areas = [
  ['Contratos imobiliários', 'Compra e venda, promessa, permuta, locação e built to suit com segurança jurídica.'],
  ['Regularização de imóveis', 'Usucapião judicial e extrajudicial, retificação de registro, adjudicação compulsória e inventário com imóveis.'],
  ['Direito registral e extrajudicial', 'Atuação perante Cartórios de Registro de Imóveis, Tabelionatos e demais serviços extrajudiciais.'],
  ['Due diligence imobiliária', 'Análise de riscos, documentos e certidões antes de comprar, vender ou investir em imóveis.'],
  ['Litígios imobiliários', 'Atuação em conflitos relacionados a imóveis, contratos, distratos, vícios construtivos e obrigações imobiliárias.'],
  ['Tributário imobiliário', 'ITBI, ITCMD, ganho de capital e outras questões tributárias relacionadas ao patrimônio imobiliário.']
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-tinta text-pergaminho">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">

            <div>
              <p className="selo !text-latao !border-latao/50 mb-6">
                Salvador · Bahia · Direito Imobiliário
              </p>

              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-latao">
                Geane de Almeida Macedo · OAB-BA 70.923
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Segurança jurídica para quem compra, vende, regulariza e investe em imóveis.
              </h1>

              <p className="mt-6 max-w-2xl text-pergaminho/80 text-lg leading-relaxed">
                Advocacia Imobiliária e atuação extrajudicial com conteúdo técnico,
                linguagem acessível e atendimento dedicado.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5571996396622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-latao text-tinta font-semibold px-6 py-3 rounded hover:bg-latao/90"
                >
                  Fale comigo pelo WhatsApp
                </a>

                <Link
                  href="/blog/"
                  className="border border-pergaminho/40 px-6 py-3 rounded hover:border-latao hover:text-latao"
                >
                  Ler o blog
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-pergaminho/70">
                <a
                  href="mailto:geanemacedo.adv@gmail.com"
                  className="hover:text-latao"
                >
                  geanemacedo.adv@gmail.com
                </a>

                <a
                  href="https://www.instagram.com/geanemacedoadv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-latao"
                >
                  @geanemacedoadv
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative max-w-md">
                <div className="absolute -inset-3 rounded-2xl border border-latao/40"></div>

                <img
                  src="/GEANE%20PERFIL.jpeg"
                  alt="Geane de Almeida Macedo, advogada"
                  className="relative w-full rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold mb-3">
          Áreas de atuação
        </h2>

        <p className="max-w-2xl text-grafite mb-8">
          Atuação jurídica voltada à proteção patrimonial, segurança dos negócios
          imobiliários e soluções extrajudiciais.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {areas.map(([t, d]) => (
            <div
              key={t}
              className="bg-white border border-tinta/10 rounded-md p-6 hover:border-latao/60 transition"
            >
              <h3 className="font-display text-lg font-semibold mb-2">
                {t}
              </h3>

              <p className="text-sm text-grafite leading-relaxed">
                {d}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/servicos/"
          className="inline-block mt-6 text-latao hover:text-argila"
        >
          Conhecer todos os serviços →
        </Link>
      </section>

      {/* SOBRE GEANE */}
      <section className="bg-pergaminho border-y border-tinta/10">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">

            <div className="flex justify-center">
              <img
                src="/GEANE%20OAB.jpeg"
                alt="Geane de Almeida Macedo, advogada"
                className="w-full max-w-sm rounded-xl object-cover shadow-lg"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-latao mb-3">
                Conheça Geane
              </p>

              <h2 className="font-display text-3xl font-semibold mb-5">
                Advocacia com olhar técnico, estratégico e extrajudicial.
              </h2>

              <p className="text-grafite leading-relaxed mb-4">
                Geane de Almeida Macedo é advogada, OAB-BA 70.923, com atuação
                concentrada em Direito Imobiliário, regularização de imóveis,
                Direito Registral e procedimentos extrajudiciais.
              </p>

              <p className="text-grafite leading-relaxed mb-6">
                O trabalho combina análise jurídica, acompanhamento documental
                e atuação perante os serviços extrajudiciais, buscando soluções
                seguras e adequadas às particularidades de cada situação.
              </p>

              <Link
                href="/sobre/"
                className="text-latao font-semibold hover:text-argila"
              >
                Conheça minha trajetória →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ARTIGO EM DESTAQUE */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-latao mb-3">
              Conteúdo jurídico em destaque
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
              Registros Imobiliários na Era Digital
            </h2>

            <p className="text-xl font-medium text-tinta mb-4">
              A interoperabilidade jurídica como desafio da transformação digital
            </p>

            <p className="text-grafite leading-relaxed mb-6">
              Uma reflexão sobre a transformação digital dos registros
              imobiliários, a interoperabilidade entre sistemas e os desafios
              jurídicos relacionados à circulação de documentos e informações.
            </p>

            <a
              href="https://juridicocerto.com/p/geane-de-almeida-ma/artigos/registros-imobiliarios-na-era-digital-a-interoperabilidade-juridica-como-desafio-da-transformacao-digital-7916"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tinta text-pergaminho font-semibold px-6 py-3 rounded hover:bg-tinta/90"
            >
              Ler o artigo completo →
            </a>
          </div>

          <div className="border border-latao/40 rounded-xl p-8 bg-white">
            <p className="text-sm text-grafite mb-3">
              Artigo publicado
            </p>

            <p className="font-display text-2xl font-semibold">
              Geane de Almeida Macedo
            </p>

            <p className="mt-2 text-sm text-grafite">
              Direito Imobiliário · Registros Públicos · Transformação Digital
            </p>
          </div>

        </div>
      </section>

      {/* ATUAÇÃO E ATUALIZAÇÃO */}
      <section className="bg-tinta text-pergaminho">
        <div className="mx-auto max-w-6xl px-5 py-16">

          <p className="text-sm uppercase tracking-[0.2em] text-latao mb-3">
            Atuação e atualização profissional
          </p>

          <h2 className="font-display text-3xl font-semibold mb-8">
            Conhecimento também se constrói com presença e participação.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <img
                src="/Cong%20Ibradim%20Nordeste%20-%20Recife.jpg"
                alt="Geane de Almeida Macedo no Congresso IBRADIM Nordeste"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-3 text-sm text-pergaminho/80">
                Congresso IBRADIM Nordeste
              </p>
            </div>

            <div>
              <img
                src="/ibrADIM.jpg"
                alt="Geane de Almeida Macedo em evento do IBRADIM"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-3 text-sm text-pergaminho/80">
                Atualização e Direito Imobiliário
              </p>
            </div>

            <div>
              <img
                src="/TJ%20BA%20MULHERES.jpeg"
                alt="Geane de Almeida Macedo em evento no Tribunal de Justiça da Bahia"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-3 text-sm text-pergaminho/80">
                Participação institucional
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ÚLTIMOS ARTIGOS */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl font-semibold mb-8">
          Últimos artigos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map(p => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <Link
          href="/blog/"
          className="inline-block mt-6 text-latao hover:text-argila"
        >
          Ver todos os artigos →
        </Link>
      </section>

      {/* CONTATO */}
      <section className="bg-pergaminho border-t border-tinta/10">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-latao mb-3">
            Entre em contato
          </p>

          <h2 className="font-display text-3xl font-semibold mb-4">
            Vamos conversar sobre o seu caso?
          </h2>

          <p className="max-w-2xl mx-auto text-grafite mb-7">
            Para informações sobre Direito Imobiliário, regularização de
            imóveis e procedimentos extrajudiciais, entre em contato.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/5571996396622"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-latao text-tinta font-semibold px-6 py-3 rounded hover:bg-latao/90"
            >
              WhatsApp — clique aqui
            </a>

            <a
              href="mailto:geanemacedo.adv@gmail.com"
              className="border border-tinta/30 px-6 py-3 rounded hover:border-latao hover:text-latao"
            >
              Enviar e-mail
            </a>

            <a
              href="https://www.instagram.com/geanemacedoadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-tinta/30 px-6 py-3 rounded hover:border-latao hover:text-latao"
            >
              Instagram
            </a>

          </div>

          <p className="mt-8 text-sm text-grafite">
            Geane de Almeida Macedo · OAB-BA 70.923 · Salvador, Bahia
          </p>

        </div>
      </section>
    </>
  );
}
