import React, { useEffect, useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Question (FAQ)
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className={`cursor-pointer rounded-lg border shadow-sm transition-colors duration-300 
                  ${
                    isOpen
                      ? "bg-lime-50 border-lime-300"
                      : "bg-white border-gray-200"
                  }`}
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </span>
                </div>

                <div
                  className={`px-5 pb-4 text-gray-600 transition-all duration-300 overflow-hidden
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="pt-1">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>


        <div className="flex justify-center">
          <button className="btn bg-lime-300 hover:bg-lime-400 text-gray-800 border-none rounded-full px-8 gap-2">
            See More FAQ&apos;s
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
