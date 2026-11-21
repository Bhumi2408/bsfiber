import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  anim = "fade",
  bg = "",
  eyebrowSize = "md:text-2xl",
  dividerMobile = "w-1/2",
}) {
  return (
    <Reveal anim={anim} className={`flow-root px-2.5 pb-2.5 pt-5 lg:px-[100px] lg:pb-0 lg:pt-[50px] ${bg}`}>
      <h2 className={`text-center font-roboto text-[22px] font-normal leading-5 text-gold ${eyebrowSize}`}>
        {eyebrow}
      </h2>
      <h2 className="mt-5 text-center font-playfair text-[28px] font-bold leading-[1.3em] text-heading md:text-[45px] md:leading-[60px]">
        {title}
      </h2>
      <div className={`mx-auto mb-5 mt-2.5 border-t-[2.4px] border-gold md:w-[17%] ${dividerMobile}`} />
      {text && (
        <p className="mx-auto max-w-[1140px] text-center font-lato text-base md:text-lg">{text}</p>
      )}
    </Reveal>
  );
}
