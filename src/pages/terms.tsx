import React from 'react';
import Layout from '@/components/layout/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
      {/* Terms and Conditions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-teal-500 pb-2">
            Tech Hive - Terms and Conditions
          </h1>

          {/* Anchor Links */}
          <nav className="mb-8 space-y-2">
            {[
              '1. Intellectual Property',
              '2. User Responsibilities',
              '3. Limitation of Liability',
              '4. Modifications to Terms',
              '5. Contact Information',
            ].map((title, idx) => (
              <a
                key={idx}
                href={`#section-${idx + 1}`}
                aria-label={`Navigate to ${title}`}
                className="block text-teal-500 hover:underline text-sm"
              >
                {title}
              </a>
            ))}
          </nav>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <p className="text-gray-600">
              Welcome to Tech Hive, your go-to hub for the latest electronics and cutting-edge technology. By using our website, you agree to the following terms and conditions. Please read them carefully. If you do not agree with any part of these terms, you must not use this website.
            </p>

            {/* Sections */}
            {[
              {
                id: 'section-1',
                title: '1. Intellectual Property',
                content:
                  'All content, including product images, text, and design, is the intellectual property of Tech Hive. Unauthorized reproduction or distribution of any content is strictly prohibited. Any misuse may result in legal action.',
              },
              {
                id: 'section-2',
                title: '2. User Responsibilities',
                content:
                  'Users must comply with all applicable laws and refrain from engaging in harmful activities on this website, such as hacking, fraud, or misuse of our technology and services.',
              },
              {
                id: 'section-3',
                title: '3. Limitation of Liability',
                content:
                  'Tech Hive is not liable for any damages arising from the use or inability to use our website, products, or services. This includes damages to devices, software, or data loss due to interactions with our site.',
              },
              {
                id: 'section-4',
                title: '4. Modifications to Terms',
                content:
                  'We reserve the right to update these terms at any time without prior notice. By continuing to use our site, you accept the latest terms and conditions.',
              },
              {
                id: 'section-5',
                title: '5. Contact Information',
                content: (
                  <>
                    If you have any questions or concerns about our terms, please contact us at{' '}
                    <a href="mailto:support@techhive.com" className="text-teal-500 hover:underline">
                      support@techhive.com
                    </a>
                    .
                  </>
                ),
              },
            ].map((section) => (
              <div key={section.id} id={section.id} className="max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Reminder */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            These terms and conditions were last updated on December 23, 2024. Please review them periodically for updates.
          </p>
        </div>
      </footer>
    </Layout>
  );
};

export default TermsAndConditions;
