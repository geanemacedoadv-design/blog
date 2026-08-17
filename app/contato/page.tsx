import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o escritório Geane de Almeida Macedo | Advocacia Imobiliária, em Salvador/BA.'
};

export default function Contato() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="selo mb-4">Contato</p>
      <h1 className="font-display text-4xl font-semibold mb-4">Fale sobre seu caso</h1>
      <p className="text-grafite mb-10">
        Preencha o formulário abaixo. As mensagens são registradas com segurança e
        respondidas em até 3 dias úteis. Você também pode escrever para
        <strong> geanemacedo.adv@gmail.com</strong> ou pelo WhatsApp <strong>(71) 99639-6622</strong>.
      </p>
     <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
  <iframe
    src="https://docs.google.com/forms/d/e/1TCfMdF1X8MpYU9SC4iBJtGZah4GGa7s4KLJiTy_84hI/viewform?embedded=true"
    width="100%"
    height="1600"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    title="Formulário de contato — Geane de Almeida Macêdo Advocacia"
  >
    Carregando…
  </iframe>
</div>
      <p className="mt-8 text-xs text-grafite">
        Os dados enviados são utilizados exclusivamente para responder ao seu contato,
        nos termos da LGPD (Lei nº 13.709/2018). O envio deste formulário não cria
        relação advogado-cliente.
      </p>
    </div>
  );
}
