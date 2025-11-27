import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

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
    <div className="py-14 px-4 ">
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
                      ? "bg-[#C3DFE2] border-[#2B8282]"
                      : "bg-white border-gray-200"
                  }`}
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
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
          <div className="flex items-center justify-center">
            <button className="btn bg-primary text-xl font-bold p-8 rounded-xl ">
              See More FAQ’s
            </button>
            <span className="bg-black p-6 rounded-[50%] text-primary -rotate-45">
              <FaArrowRight className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
