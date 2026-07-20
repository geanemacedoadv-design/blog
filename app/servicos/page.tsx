import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Serviços de advocacia imobiliária: contratos, usucapião, due diligence, litígios, condomínios e tributação de operações com imóveis.'
};

const servicos = [
  {
    id: 'contratos', titulo: 'Contratos imobiliários',
    texto: 'Elaboração e revisão de contratos de compra e venda, promessa, permuta, locação residencial e comercial e built to suit, com cláusulas adequadas ao seu risco.'
  },
  {
    id: 'regularizacao', titulo: 'Regularização de imóveis',
    texto: 'Usucapião judicial e extrajudicial, retificação de área e de registro, inventário e partilha envolvendo imóveis e destravamento de matrículas.'
  },
  {
    id: 'due-diligence', titulo: 'Due diligence imobiliária',
    texto: 'Análise de matrícula, certidões, ônus e riscos do vendedor antes da aquisição — inclusive em leilões e imóveis na planta.'
  },
  {
    id: 'litigios', titulo: 'Litígios imobiliários',
    texto: 'Distrato de imóvel na planta, atraso na entrega de obra, vícios construtivos, ações de despejo e adjudicação compulsória.'
  },
  {
    id: 'condominios', titulo: 'Condomínios e incorporação',
    texto: 'Assessoria a síndicos, administradoras, construtoras e incorporadoras: convenções, assembleias, cobrança e registro de incorporação.'
  },
  {
    id: 'tributario', titulo: 'Tributário imobiliário',
    texto: 'ITBI, ITCMD, ganho de capital na venda de imóveis e estruturação de holding familiar para o patrimônio imobiliário.'
  }
];

export default function Servicos() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="selo mb-4">Serviços</p>
      <h1 className="font-display text-4xl font-semibold mb-4">Áreas de atuação</h1>
      <p className="text-grafite mb-10 max-w-2xl">
        Atuação judicial e extrajudicial em Direito Imobiliário, com atendimento em
        Salvador/BA e, no âmbito consultivo, em todo o Brasil.
      </p>
      <div className="space-y-8">
        {servicos.map(s => (
          <section key={s.id} id={s.id} className="bg-white border border-tinta/10 rounded-md p-7">
            <h2 className="font-display text-2xl font-semibold mb-2">{s.titulo}</h2>
            <p className="text-grafite mb-4">{s.texto}</p>
            <Link href="/contato/" className="text-latao hover:text-argila text-sm">
              Fale sobre seu caso →
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
