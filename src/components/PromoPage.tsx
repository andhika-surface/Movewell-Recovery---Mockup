import { Sparkles, Tag, Clock, Check } from "lucide-react";
import { promosData, type PromoData } from "../data/promos";

interface PromoPageProps {
  onBookingClick?: () => void;
}

export default function PromoPage({ onBookingClick }: PromoPageProps) {
  const promoData: PromoData = promosData;

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-gray-900">{promoData.header.title}</h1>
          </div>
          <p className="text-blue-600 mb-2">{promoData.header.subtitle}</p>
          <div className="text-gray-600 max-w-2xl mx-auto space-y-1">
            <p><span className="text-gray-900">Location:</span> {promoData.header.location}</p>
            <p><span className="text-gray-900">Period:</span> {promoData.header.period}</p>
            <p><span className="text-gray-900">Booking:</span> {promoData.header.booking}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Opening Month Rates */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-gray-900">1. Opening Month Rates</h2>
            </div>
            <p className="text-gray-600 mb-6">Discover our special introductory prices for single sessions:</p>
            <div className="space-y-4">
              {promoData.openingRates.map((rate, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                  <div className="text-gray-900">{rate.duration}</div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-sm">{rate.regularPrice}</span>
                    <span className="text-blue-600">{rate.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-6">
              Choose your preferred duration and focus, whether you want to relax, stretch, or mix it up.
            </p>
          </div>

          {/* Early-Bird Voucher Packs */}
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <h2 className="">2. Early-Bird Voucher Packs</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Purchase your vouchers now and redeem them anytime within the next three months. Limited to first 50 buyers.
            </p>

            <div className="space-y-4 mb-6">
              {promoData.voucherPacks.map((pack, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="text-white">{pack.title}</div>
                    <div className="text-orange-400">{pack.price}</div>
                  </div>
                  <div className="text-gray-400 text-sm">({pack.pricePerSession})</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-gray-300 mb-3">Each voucher is valid for 30 minutes and can be used flexibly:</p>
              <ul className="space-y-2">
                {promoData.voucherFlexibility.map((option, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-400" />
                    <span className="text-gray-300">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Take Advantage Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-gray-900 mb-6 text-center">Why Take Advantage of This Offer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Get up to 14% off regular rates during our founding month</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Flexibility</h3>
              <p className="text-gray-600">Use vouchers however you like - perfect for regular maintenance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">Limited Time</h3>
              <p className="text-gray-600">Only 50 voucher packages available - don't miss out!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="mb-4">Ready to Lock in These Special Rates?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book your session now or secure your voucher package before they're gone!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookingClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book Your Session
            </button>
            <a 
              href="https://wa.me/628111728128"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
