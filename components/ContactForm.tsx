'use client';
import { useState } from 'react';

/**
 * INTEGRAÇÃO COM GOOGLE FORMS (respostas caem no Google Sheets/Docs):
 * 1. Crie um Google Form com os campos: Nome, E-mail, Telefone, Assunto, Mensagem.
 * 2. Abra o formulário publicado, clique com o botão direito > "Inspecionar" e localize
 *    os atributos name="entry.XXXXXXXX" de cada campo.
 * 3. Substitua abaixo GOOGLE_FORM_ID e os quatro entry.XXXX pelos seus.
 * O README.md do projeto tem o passo a passo completo.
 */
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/GOOGLE_FORM_ID/formResponse';

const ENTRIES = {
  nome: 'entry.1111111111',
  email: 'entry.2222222222',
  telefone: 'entry.3333333333',
  assunto: 'entry.4444444444',
  mensagem: 'entry.5555555555'
};

const inputCls =
  'w-full rounded border border-tinta/20 bg-white px-4 py-3 text-sm focus:border-latao';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'enviando' | 'ok' | 'erro'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('enviando');
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    body.append(ENTRIES.nome, String(data.get('nome') ?? ''));
    body.append(ENTRIES.email, String(data.get('email') ?? ''));
    body.append(ENTRIES.telefone, String(data.get('telefone') ?? ''));
    body.append(ENTRIES.assunto, String(data.get('assunto') ?? ''));
    body.append(ENTRIES.mensagem, String(data.get('mensagem') ?? ''));
    try {
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body });
      form.reset();
      setStatus('ok');
    } catch {
      setStatus('erro');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Nome completo
          <input name="nome" required autoComplete="name" className={inputCls} />
        </label>
        <label className="grid gap-1 text-sm">
          E-mail
          <input name="email" type="email" required autoComplete="email" className={inputCls} />
        </label>
        <label className="grid gap-1 text-sm">
          Telefone / WhatsApp
          <input name="telefone" autoComplete="tel" className={inputCls} />
        </label>
        <label className="grid gap-1 text-sm">
          Assunto
          <select name="assunto" className={inputCls} defaultValue="Contratos">
            <option>Contratos</option>
            <option>Regularização / Usucapião</option>
            <option>Due diligence / Compra segura</option>
            <option>Litígio imobiliário</option>
            <option>Condomínio / Incorporação</option>
            <option>Tributário imobiliário</option>
            <option>Outro</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        Mensagem
        <textarea name="mensagem" rows={5} required className={inputCls} />
      </label>
      <button
        type="submit"
        disabled={status === 'enviando'}
        className="justify-self-start bg-tinta text-pergaminho px-6 py-3 rounded hover:bg-tinta/90 disabled:opacity-60"
      >
        {status === 'enviando' ? 'Enviando…' : 'Enviar mensagem'}
      </button>
      {status === 'ok' && (
        <p role="status" className="text-sm text-latao">Mensagem enviada. Retornaremos em breve.</p>
      )}
      {status === 'erro' && (
        <p role="alert" className="text-sm text-argila">
          Não foi possível enviar agora. Tente novamente ou escreva por e-mail.
        </p>
      )}
    </form>
  );
}
