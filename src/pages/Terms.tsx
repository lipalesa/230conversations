export default function Terms() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-8">Terms of Use</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-slate-300">
          <p className="text-sm text-gray-500 dark:text-slate-500">Last updated: November 2, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using the 230 Conversations website, you accept and agree to be bound by
              the terms and provisions of this agreement. If you do not agree to these terms, please do
              not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Use of Website</h2>
            <p>
              This website is provided for informational and community-building purposes. You agree to use
              this website only for lawful purposes and in a way that does not infringe upon the rights of
              others or restrict their use and enjoyment of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and videos, is the
              property of 230 Conversations or its content suppliers and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">User Conduct</h2>
            <p>When engaging with our community, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Treat others with respect and kindness</li>
              <li>Not post or share offensive, harmful, or inappropriate content</li>
              <li>Respect the privacy of others</li>
              <li>Not use our platform for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Limitation of Liability</h2>
            <p>
              230 Conversations shall not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your use of this website or participation in our events
              and programs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately
              upon posting to the website. Your continued use of the website after changes are posted
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
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
