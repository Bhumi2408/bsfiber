import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import GalleryItem from "@/components/GalleryItem";
import SectionHeading from "@/components/SectionHeading";
import { collection, contact, features, gallery, images, reviews, stats, steps } from "@/data/site";

const sectionX = "px-4 md:px-5 lg:px-[100px]";

export default function Home() {
  const [big, ...small] = collection;

  return (
    <>
      <Header />

      <main>
        {/* Hero: banner on desktop/tablet, portrait image on mobile */}
        <section
          className="hidden min-h-[800px] bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: `url("${images.heroDesktop}")` }}
        />
        <section className="md:hidden">
          <Image src={images.heroMobile} alt="" width={1080} height={1350} priority sizes="100vw" className="w-full" />
        </section>

        {/* Our Collection */}
        <SectionHeading
          anim="zoom"
          eyebrow="OUR COLLECTION"
          title="Fountain Designs"
          eyebrowSize="md:text-[22px]"
          text={
            <>
              Modern fountain designs crafted to enhance any space with elegance and calm,
              <br />
              blending style and functionality to create a soothing, premium, and visually appealing atmosphere.
            </>
          }
        />
        <section className="p-2.5 lg:px-[100px] lg:py-[50px]">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-[58.229%_1fr]">
            <GalleryItem {...big} heightClass="h-[315px] md:h-[650px]" sizes="(max-width: 767px) 100vw, 60vw" />
            <div className="flex flex-col gap-5">
              {small.map((item) => (
                <GalleryItem key={item.src} {...item} heightClass="h-[315px]" sizes="(max-width: 767px) 100vw, 40vw" />
              ))}
            </div>
          </div>
        </section>

        {/* Fountain Gallery */}
        <SectionHeading eyebrow="RANGE" title="Our Fountain Gallery" bg="bg-cream" dividerMobile="w-[30%]" />
        <Reveal anim="fade-up" id="products" className="bg-cream px-[30px] py-20 lg:px-[100px] lg:pb-20 lg:pt-5">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-x-[15px] gap-y-2.5 md:grid-cols-3">
            {gallery.map((item) => (
              <GalleryItem
                key={item.src}
                {...item}
                dark
                heightClass="h-[350px] md:h-[500px]"
                sizes="(max-width: 767px) 100vw, 33vw"
              />
            ))}
          </div>
        </Reveal>

        {/* Design Process */}
        <SectionHeading
          anim="zoom"
          eyebrow="OUR CRAFT"
          title="The Design Process"
          text={
            <>
              From initial concept to the first cascade of water, every step is guided by passion,
              <br />
              precision, and decades of expertise.
            </>
          }
        />
        <section className="-mt-5 px-2.5 pb-2.5 lg:mt-0 lg:px-[100px] lg:pb-[70px] lg:pt-[30px]">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.title} className="group flex flex-col items-center gap-[15px] p-2.5 text-center">
                <div className="flex size-[85px] items-center justify-center rounded-full border-[3px] border-gold-light bg-gold-pale text-[35px] text-gold-light transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                  <i className={s.icon} />
                </div>
                <h3 className="text-xl font-bold leading-snug text-heading">{s.title}</h3>
                <p className="text-[15px]">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <SectionHeading
          anim="fade-up"
          eyebrow="The Difference"
          title="Why Choose Royal Fountains"
          bg="bg-beige"
          dividerMobile="w-[30%]"
        />
        <Reveal anim="fade-up" id="aboutus" className={`bg-beige py-[30px] ${sectionX}`}>
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((col, i) => (
              <div key={i} className="flex flex-col gap-5">
                {col.map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-[15px] bg-white p-5 text-start transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex size-[65px] items-center justify-center rounded-full bg-sand text-[25px] text-gold">
                      <i className={f.icon} />
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-heading">{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats */}
        <section className={`bg-beige pb-[50px] pt-5 ${sectionX}`}>
          <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-2.5 py-[30px] text-center">
                <div className="font-roboto text-[40px] font-semibold leading-none text-heading md:text-[50px]">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="font-roboto-slab text-[15px] leading-[2.5] text-heading md:text-[19px]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <SectionHeading anim="slide-up" eyebrow="Client Stories" title="Reviews" />
        <Reveal anim="slide-up" className={`pb-[50px] pt-2.5 md:pb-20 ${sectionX}`}>
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-[10px] bg-[#F7F5F5] px-5 py-[30px] text-center md:p-10">
                <div className="text-[22px] font-semibold leading-tight text-heading">{r.name}</div>
                <div className="mb-[15px] mt-2.5 text-[15px] tracking-[3px] text-[#FFCC00]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Contact */}
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Begin Your Fountain Journey"
          bg="bg-beige"
          text={
            <>
              Ready to transform your space with a bespoke royal fountain?
              <br />
              Our design consultants are here to bring your vision to life.
            </>
          }
        />
        <Reveal anim="fade-up" id="contactus" className={`bg-beige pb-[60px] pt-[30px] md:pb-[100px] md:pt-[50px] ${sectionX}`}>
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-2">
            <ContactForm />
            <Image
              src={images.contact}
              alt=""
              width={1024}
              height={1024}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="w-full object-cover md:h-[540px]"
            />
          </div>
        </Reveal>
      </main>

      <Footer />

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-[25px] right-[25px] z-[150] flex size-[54px] items-center justify-center rounded-full bg-[#49E670] text-[30px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}
