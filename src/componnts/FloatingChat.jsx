import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const FloatingChat = () => {
  return (
    <>
      <style>
        {`
          @keyframes neonPulse {
            0% {
              box-shadow:
                0 0 8px rgba(0, 140, 255, 0.6),
                0 0 15px rgba(0, 140, 255, 0.4),
                0 0 25px rgba(0, 140, 255, 0.2);
            }
            50% {
              box-shadow:
                0 0 15px rgba(0, 140, 255, 0.9),
                0 0 30px rgba(0, 140, 255, 0.7),
                0 0 45px rgba(0, 140, 255, 0.4);
            }
            100% {
              box-shadow:
                0 0 8px rgba(0, 140, 255, 0.6),
                0 0 15px rgba(0, 140, 255, 0.4),
                0 0 25px rgba(0, 140, 255, 0.2);
            }
          }

          @keyframes halo {
            0% {
              transform: scale(0.9);
              opacity: 0.5;
            }
            100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }
        `}
      </style>

      <a
        href="https://t.me/Visco_admin"
        target="_blank"
        rel="noopener noreferrer"
        className="
    fixed bottom-6 z-50
    w-[70px] h-[70px]
    rounded-full bg-[#004b93]
    flex items-center justify-center
    transition-all duration-300
    hover:scale-110
  "
        style={{
          right: "25px", // 👈 o‘ngdan kamroq masofa
          animation: "neonPulse 2.2s infinite ease-in-out",
        }}
      >
        {/* Neon halo animation */}
        <span
          className="
            absolute w-[120px] h-[120px]
            rounded-full bg-[#008cff]/20
          "
          style={{
            animation: "halo 2s infinite",
          }}
        ></span>

        <BsChatDotsFill className="text-white text-3xl relative z-10" />
      </a>
    </>
  );
};

export default FloatingChat;
