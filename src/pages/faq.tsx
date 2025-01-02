// src/pages/faq.tsx
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

const faqs = [
  {
    question: "What types of products do you offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Do your products come with a warranty?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What is your return policy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How do I track my order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How do I cancel my order?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Can I modify my order after it is placed?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How can I subscribe to your newsletter?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more questions here if needed
];

const FaqPage = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedAnswer, setEditedAnswer] = useState<string>("");

  const toggleAnswer = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const handleEdit = (index: number, answer: string) => {
    setEditingIndex(index);
    setEditedAnswer(answer);
  };

  const handleSave = (index: number) => {
    faqs[index].answer = editedAnswer;
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <Layout>
      {/* Title Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions we receive.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Question Section */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
                role="button"
                tabIndex={0}
                aria-expanded={openIndices.includes(index)}
              >
                <h3 className="font-semibold text-gray-800 text-xl">{faq.question}</h3>
                <span
                  className={`text-gray-600 text-2xl font-bold transform transition-transform duration-300 ${
                    openIndices.includes(index) ? "rotate-45" : ""
                  }`}
                >
                  ...
                </span>
              </div>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndices.includes(index) ? "max-h-screen mt-4" : "max-h-0"
                }`}
              >
                {editingIndex === index ? (
                  <div>
                    <textarea
                      value={editedAnswer}
                      onChange={(e) => setEditedAnswer(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows={4}
                    />
                    <div className="mt-2 flex justify-between">
                      <a
                        href="#"
                        onClick={() => handleSave(index)}
                        className="text-teal-500 text-sm font-semibold hover:underline"
                      >
                        Save
                      </a>
                      <a
                        href="#"
                        onClick={handleCancel}
                        className="text-gray-500 text-sm font-semibold hover:underline"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-base">{faq.answer}</p>
                )}
              </div>

              {/* Edit Link */}
              {editingIndex !== index && (
                <a
                  href="#"
                  onClick={() => handleEdit(index, faq.answer)}
                  className="text-gray-600 mt-2 text-sm font-semibold hover:underline"
                >
                  Edit
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
