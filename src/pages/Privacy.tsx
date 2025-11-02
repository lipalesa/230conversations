export default function Privacy() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: November 2, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p>
              230 Conversations ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Information you provide when registering for events or subscribing to newsletters</li>
              <li>Usage data and analytics about how you interact with our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Communicate with you about events, programs, and ministry updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send periodic emails about events and content you may find interesting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-2">
              Email: <a href="mailto:info@230conversations.org" className="text-[#a57614] dark:text-[#d4a574] hover:underline">
                info@230conversations.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
