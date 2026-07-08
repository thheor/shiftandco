import { useState, useEffect, type MouseEvent } from "react";
import { Link } from "react-router";

export function ProductCard({
  className,
  name,
  price,
  images,
  href,
}: {
  className?: string;
  name: string;
  price: string;
  images: string[];
  href: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const nextSlide = () => {
    const isLastIndex = currentIndex === images.length - 1;
    const nextIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      className={`group relative max-w-64 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={href}>
        <div
          className="flex w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image} className="w-full shrink-0 overflow-hidden">
              <img
                src={image}
                alt={name}
                className={`w-full aspect-3/4 object-cover rounded-xs hover:scale-105 transition duration-400 ease-in-out`}
              />
            </div>
          ))}
        </div>
        <h3 className="text-foreground text-base/5 font-poppins group-hover:underline py-2">
          SHIFTNCO - {name}
        </h3>
        <p className="text-foreground/90 text-sm">Rp {price},00 IDR</p>
      </Link>
    </div>
  );
}
