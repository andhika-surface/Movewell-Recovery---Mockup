import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onBookingClick?: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-gray-900">
              Movewell Recovery - Your Modern Bodywork Studio in Jakarta
            </h1>
            <p className="text-gray-600 max-w-md">
              Recovery. Stretch. Massage - We help athletes, professionals, and everyday movers care for their bodies and move better.
            </p>
            <button 
              onClick={onBookingClick}
              className="bg-[#1B5F8F] text-white px-8 py-4 rounded-lg hover:bg-[#154A72] transition-colors"
            >
              Book Your Session
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2MjMyMTIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Physical therapist working with client"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
