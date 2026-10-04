import React from 'react';
import { BuildingIcon, MailIcon, MapPinIcon, MessageCircleIcon } from 'lucide-react';
import { audiences, company, images } from '../data/content';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../components/sections/ContactForm';

const details = [
{ icon: MailIcon, label: 'Email', value: company.email, href: `mailto:${company.email}` },
{
  icon: MessageCircleIcon,
  label: 'WhatsApp',
  value: company.whatsappDisplay,
  href: `https://wa.me/${company.whatsappNumber}`
},
{
  icon: MapPinIcon,
  label: 'Corporate address',
  value: company.address,
  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`
},
{ icon: BuildingIcon, label: 'Company', value: company.name }];


export function Contact() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let’s share Ceylon with the world."
        intro="Whether you are a distributor, grower, partner, or simply passionate about Ceylon Tea, we’d love to hear from you."
        image={images.cup}
        alt="Hands holding a glass cup of Ceylon tea" />
      

      <section className="w-full bg-forest py-24 text-cream sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Get in touch</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 leading-relaxed text-cream/75">
                Reach us directly by email or WhatsApp, or send a message using the form.
              </p>
            </Reveal>
            <ul className="mt-10 divide-y divide-cream/15 border-y border-cream/15">
              {details.map((d, i) => {
                const content =
                <>
                    <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber" />
                    <span>
                      <span className="block text-sm text-cream/60">{d.label}</span>
                      <span
                      className={`mt-0.5 block text-lg text-cream ${
                      d.href ? 'transition-colors duration-150 group-hover:text-amber' : ''}`
                      }>
                      
                        {d.value}
                      </span>
                    </span>
                  </>;

                return (
                  <Reveal as="li" key={d.label} delay={0.08 + i * 0.04}>
                    {d.href ?
                    <a
                      href={d.href}
                      target={d.href.startsWith('http') ? '_blank' : undefined}
                      rel={d.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-start gap-4 py-5">
                      
                        {content}
                      </a> :

                    <div className="flex items-start gap-4 py-5">{content}</div>
                    }
                  </Reveal>);

              })}
            </ul>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Audiences */}
      <section className="w-full bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-plum sm:text-4xl">
              Who we’d love to hear from
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) =>
            <Reveal
              key={a.title}
              delay={i * 0.04}
              className="border-t border-plum/20 pt-6 sm:pr-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
              
                <h3 className="font-serif text-xl text-plum sm:text-2xl">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-plum/75">{a.text}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full bg-sand py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-serif text-3xl text-plum sm:text-4xl">Visit us in Ratnapura</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <address className="mt-6 not-italic text-lg leading-relaxed text-plum/80">
                <span className="block font-medium text-plum">{company.name}</span>
                {company.addressLines.map((l) =>
                <span key={l} className="block">
                    {l}
                  </span>
                )}
              </address>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors duration-150 hover:bg-copper">
                
                <MapPinIcon className="h-4 w-4" />
                Open in Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl bg-cream lg:col-span-8">
            <iframe
              title="Singularitea office location in Ratnapura"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              className="h-[340px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
          </Reveal>
        </div>
      </section>
    </>);

}