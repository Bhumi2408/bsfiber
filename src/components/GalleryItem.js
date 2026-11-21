import Image from "next/image";

// Image card with title/price pinned to the bottom; fades in on hover (always visible on mobile).
export default function GalleryItem({ src, title, price, heightClass, sizes, dark = false }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <Image
        src={src}
        alt={title}
        width={1024}
        height={1024}
        sizes={sizes}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${heightClass}`}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-linear-to-b from-transparent from-40% px-[30px] pb-[25px] transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${
          dark ? "to-[#1f1f1f]/80" : "to-[#222]/80"
        }`}
      >
        <div className="font-roboto text-[22px] font-semibold leading-snug text-white">{title}</div>
        <div className="text-lg text-white/70">{price}</div>
      </div>
    </div>
  );
}
