// src/components/Loading.jsx
import { useTranslation } from "react-i18next";

export default function Loading() {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Orqa fon: hira va blur */}
      <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-md"></div>

      {/* Spinner va matn */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>
        <p className="text-white text-xl md:text-2xl font-semibold drop-shadow-lg">
          {t("loading")}...
        </p>
      </div>
    </div>
  );
}
