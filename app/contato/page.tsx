import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

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
        respondidas em até 2 dias úteis. Você também pode escrever para
        <strong> [email@dominio.com.br]</strong> ou pelo WhatsApp <strong>[(71) 9 0000-0000]</strong>.
      </p>
      <ContactForm />
      <p className="mt-8 text-xs text-grafite">
        Os dados enviados são utilizados exclusivamente para responder ao seu contato,
        nos termos da LGPD (Lei nº 13.709/2018). O envio deste formulário não cria
        relação advogado-cliente.
      </p>
    </div>
  );
}
