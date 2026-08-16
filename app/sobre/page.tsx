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
          Geane de Almeida Macêdo é advogada, inscrita na Ordem dos Advogados do Brasil – Seccional Bahia, sob o nº <strong>70.923</strong>, com atuação nas áreas de Direito Imobiliário e Direito Extrajudicial.
</p>
        <p>
          É graduada em Direito e Administração de Empresas, pós-graduada em Direito Público e em Regularização Imobiliária Extrajudicial e Avaliação Imobiliária. Atua também como Perita Judicial e avaliadora imobiliária, integrante do Cadastro Nacional de Avaliadores Imobiliários (CNAI), com habilitação para emissão de Parecer Técnico de Avaliação Mercadológica (PTAM).
        </p>

        <p>
          Possui experiência em regularização de imóveis, adjudicação compulsória, usucapião extrajudicial, inventários, due diligence imobiliária, avaliação imobiliária, contratos e procedimentos registrais e cartorários, com atuação consultiva e estratégica voltada à segurança jurídica patrimonial.
        </p>

        <p>
          É membro do Instituto Brasileiro de Direito Imobiliário – IBRADIM, da Comissão Especial de Apoio à Advocacia junto aos Cartórios Extrajudiciais e da Comissão de Direito Imobiliário da Bahia, além de atuar como Conselheira da Jovem Advocacia da Ordem dos Advogados do Brasil – Seção Bahia.
        </p>

        <p>
          O escritório atende pessoas físicas, investidores, corretores, construtoras e incorporadoras em contratos, regularização de imóveis, due diligence e litígios imobiliários, sempre com comunicação clara e orientação preventiva.
        </p>

        <h2>Como o blog funciona?</h2>

        <p>
          Este blog publica conteúdo informativo sobre Direito Imobiliário em linguagem acessível, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021. Nenhum artigo substitui a análise do seu caso concreto.
        </p>
      </div>
    </div>
  );
}
