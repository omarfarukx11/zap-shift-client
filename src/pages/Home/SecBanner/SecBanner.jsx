import React from "react";

const SecBanner = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="bg-[#002C3E] rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content Section */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Merchant and Customer Satisfaction
                <br />
                <span className="text-accent">Is Our First Priority</span>
              </h1>

              <p className="text-lg lg:text-xl mb-8 text-gray-200">
                We offer the lowest delivery charge with the highest value along
                with
                <br />
                100% safety of your product. Patricio counter delivers your
                parcels in every
                <br />
                corner of Bangladesh right on time
              </p>

              <div className="divider divider-accent my-4 w-24"></div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="btn btn-accent text-lg font-semibold px-8 py-3">
                  Become a Merchant
                </button>
                <button className="btn btn-outline btn-accent text-lg font-semibold px-8 py-3">
                  Earn with ZapShift Courier
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#004258] to-[#001f2b]"></div>

              {/* Foreground Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 rounded-xl w-full h-3/4 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center text-white p-4">
                    <div className="text-5xl mb-4">🚚</div>
                    <p className="text-xl font-semibold">Your Image Here</p>
                    <p className="text-sm mt-2">
                      Replace with your foreground image
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-base-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Implementation Notes:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Replace the background gradient with your background image</li>
            <li>Replace the foreground placeholder with your product image</li>
            <li>
              Custom colors can be adjusted in the Tailwind config if needed
            </li>
            <li>This component is fully responsive</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecBanner;
