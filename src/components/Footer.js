import Image from "next/image";
import { contact, images } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#aboutus" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contactus" },
];

function Heading({ children }) {
  return (
    <h4 className="mb-6 font-playfair text-[22px] font-bold text-heading">
      {children}
      <span className="mt-2 block h-[2px] w-10 bg-gold" />
    </h4>
  );
}

function ContactRow({ icon, children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[15px] text-gold">
        <i className={icon} />
      </span>
      <div className="pt-2 text-[15px] leading-relaxed text-body">{children}</div>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f3ede4] text-body">
      <div className="h-[3px] bg-linear-to-r from-transparent via-gold to-transparent" />

      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.3fr] lg:px-0">
        {/* About */}
        <div>
          <Image src={images.logo} alt="BS Fiber" width={300} height={300} className="mb-6 w-[130px]" />
          <p className="mb-6 text-[15px] leading-relaxed">
            We create elegant and modern fountain designs that enhance every space. With a focus on quality and
            precision, we deliver beautiful water features from concept to installation.
          </p>
          <div className="flex gap-3">
            {[
              { href: contact.social.instagram, icon: "fab fa-instagram", label: "Instagram" },
              { href: contact.social.facebook, icon: "fab fa-facebook-f", label: "Facebook" },
              { href: `https://wa.me/${contact.whatsapp}`, icon: "fab fa-whatsapp", label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener"
                className="flex size-10 items-center justify-center rounded-full border border-heading/20 text-heading transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <Heading>Quick Links</Heading>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-2.5 text-[15px] transition-colors duration-300 hover:text-gold"
                >
                  <i className="fas fa-chevron-right text-[10px] text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <Heading>Contact Us</Heading>
          <ul className="space-y-5">
            <ContactRow icon="fas fa-map-marker-alt">
              BS fiber product, 160/5 swarn park Mundka, Delhi - 110041
              <br />
              Near rajdhani Park metro staon pillar number 482 se left
            </ContactRow>
            <ContactRow icon="fas fa-phone-alt">
              {contact.phones.split(", ").map((p, i) => (
                <span key={p}>
                  {i > 0 && ", "}
                  <a href={`tel:${p}`} className="transition-colors hover:text-gold">{p}</a>
                </span>
              ))}
            </ContactRow>
            <ContactRow icon="far fa-envelope">
              <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-gold">
                {contact.email}
              </a>
            </ContactRow>
          </ul>
        </div>
      </div>

      <div className="bg-heading">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-2 px-5 py-5 text-center text-sm text-white/70 md:flex-row lg:px-0">
          <p>Copyright © 2026 BS Fiber Product. All Right Reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://www.cybertricksmedia.com" target="_blank" rel="noopener" className="text-gold hover:underline">
              Cybertricksmedia Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
