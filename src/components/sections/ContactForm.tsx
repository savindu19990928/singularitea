import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { company, enquirySubjects } from '../../data/content';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { EASE } from '../ui/Reveal';

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const empty: FormState = { name: '', email: '', company: '', subject: enquirySubjects[0], message: '' };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
      if (submitError) setSubmitError(null);
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please share a little more detail.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    setSubmitError(null);

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || 'N/A',
      topic: form.subject,
      message: form.message.trim(),
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setSubmitError(
        'Failed to send your message. Please try again or email us directly at ' + company.email
      );
    }
  };

  const field =
    'w-full rounded-xl border bg-white/70 px-4 py-3 text-plum placeholder:text-plum/40 outline-none transition-colors duration-150 focus:border-copper focus:bg-white';
  const label = 'mb-1.5 block text-sm font-medium text-plum';

  return (
    <div className="rounded-3xl bg-cream p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex min-h-[460px] flex-col items-center justify-center text-center"
            role="status"
          >
            <CheckCircle2Icon className="h-12 w-12 text-leaf" />
            <h3 className="mt-5 font-serif text-2xl text-plum">Message Sent Successfully</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-plum/75">
              Thank you for reaching out. We’ve received your message and will reply to{' '}
              <span className="font-medium text-plum">{form.email}</span> within two working days.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(empty);
                setStatus('idle');
                setSubmitError(null);
              }}
              className="mt-7 rounded-full border border-plum/25 px-6 py-2.5 text-sm font-medium text-plum transition-colors duration-150 hover:border-copper hover:text-copper"
            >
              Write another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5"
          >
            <div>
              <h2 className="font-serif text-2xl text-plum sm:text-3xl">Send us a message</h2>
              <p className="mt-2 text-sm text-plum/70">Fields marked * are required.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>
                  Name *
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  className={`${field} ${errors.name ? 'border-copper' : 'border-plum/15'}`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
                {errors.name && (
                  <p id="name-err" className="mt-1.5 text-sm text-copper">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                  className={`${field} ${errors.email ? 'border-copper' : 'border-plum/15'}`}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                />
                {errors.email && (
                  <p id="email-err" className="mt-1.5 text-sm text-copper">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className={label}>
                  Company
                </label>
                <input
                  id="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={update('company')}
                  className={`${field} border-plum/15`}
                  placeholder="Optional"
                />
              </div>
              <div>
                <label htmlFor="subject" className={label}>
                  Topic
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={update('subject')}
                  className={`${field} border-plum/15`}
                >
                  {enquirySubjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className={label}>
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={update('message')}
                className={`${field} resize-none ${errors.message ? 'border-copper' : 'border-plum/15'}`}
                placeholder="Tell us how we can work together"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-err' : undefined}
              />
              {errors.message && (
                <p id="message-err" className="mt-1.5 text-sm text-copper">
                  {errors.message}
                </p>
              )}
            </div>

            {submitError && (
              <div className="flex items-start gap-3 rounded-xl border border-copper/30 bg-copper/10 p-4 text-sm text-copper">
                <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <p>{submitError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-[background-color,transform] duration-150 hover:bg-copper active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:justify-self-start"
            >
              {status === 'sending' ? (
                <>
                  Sending message...
                  <Loader2Icon className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <SendIcon className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}