import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > docHeight * 0.5) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          @keyframes neonPulse {
            0% {
              box-shadow:
                0 0 8px rgba(0, 140, 255, 0.6),
                0 0 18px rgba(0, 140, 255, 0.4),
                0 0 30px rgba(0, 140, 255, 0.2);
            }
            50% {
              box-shadow:
                0 0 16px rgba(0, 140, 255, 0.9),
                0 0 35px rgba(0, 140, 255, 0.7),
                0 0 55px rgba(0, 140, 255, 0.4);
            }
            100% {
              box-shadow:
                0 0 8px rgba(0, 140, 255, 0.6),
                0 0 18px rgba(0, 140, 255, 0.4),
                0 0 30px rgba(0, 140, 255, 0.2);
            }
          }

          @keyframes halo {
            0% {
              transform: scale(0.9);
              opacity: 0.5;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 left-6 z-50
          w-[60px] h-[60px]
          rounded-full bg-[#004b93]
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
          ${
            show
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
          }
        `}
        style={{ animation: "neonPulse 2.2s infinite ease-in-out" }}
      >
        <span
          className="absolute w-[110px] h-[110px] rounded-full bg-[#008cff]/20"
          style={{ animation: "halo 2s infinite" }}
        />

        <ArrowUp
          size={26}
          strokeWidth={2.5}
          className="text-white relative z-10"
        />
      </button>
    </>
  );
};

export default ScrollToTop;
