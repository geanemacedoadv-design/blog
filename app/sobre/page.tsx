import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a advogada Geane de Almeida Macedo, atuação em Direito Imobiliário judicial e extrajudicial em Salvador/BA.'
};

export default function Sobre() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="selo mb-4">Sobre a advogada</p>
      <h1 className="font-display text-4xl font-semibold mb-8">Geane de Almeida Macedo</h1>
      <div className="prose-artigo">
        <p>
          Advogada inscrita na OAB/BA sob o nº <strong>70.923</strong>, com atuação
          concentrada em <strong>Direito Imobiliário</strong> — contencioso e
          extrajudicial — e atuação complementar em Direito Tributário aplicado a
          operações imobiliárias.
        </p>
        <p>
          [Formação: bacharel em Direito pela instituição • ; pós-graduação em • .
          Substitua este parágrafo pelo seu mini currículo real.]
        </p>
        <p>
          O escritório atende pessoas físicas, investidores, corretores, construtoras e
          incorporadoras em contratos, regularização de imóveis, due diligence e
          litígios imobiliários, sempre com comunicação clara e orientação preventiva.
        </p>
        <h2>Como o blog funciona</h2>
        <p>
          Este blog publica conteúdo informativo sobre Direito Imobiliário em linguagem
          acessível, em conformidade com o Código de Ética e Disciplina da OAB e o
          Provimento 205/2021. Nenhum artigo substitui a análise do seu caso concreto.
        </p>
      </div>
      <Link href="/contato/" className="inline-block mt-8 bg-tinta text-pergaminho px-6 py-3 rounded hover:bg-tinta/90">
        Entrar em contato
      </Link>
    </div>
  );
}
