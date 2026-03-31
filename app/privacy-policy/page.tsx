export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-gradient text-center">
        Privacy Policy
      </h1>

      <p className="mb-6">
        This Privacy Policy explains how information is collected, used, and protected when you visit this website.
      </p>

      {/* Info Collection */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Information I Collect</h2>
      <p className="mb-4">
        When you use the contact form, I may collect your name, email address, and message content. This information is provided voluntarily by you.
      </p>

      {/* Usage */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">How I Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to your inquiries</li>
        <li>To communicate regarding projects or collaboration</li>
        <li>To improve website experience</li>
      </ul>

      {/* Storage */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Data Storage</h2>
      <p className="mb-4">
        Your information is not sold or shared with third parties. Messages may be processed through secure email services.
      </p>

      {/* Cookies */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Cookies</h2>
      <p className="mb-4">
        This website may use basic cookies or analytics tools to improve performance and user experience.
      </p>

      {/* Security */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Security</h2>
      <p className="mb-4">
        Reasonable measures are taken to protect your data, but no method of transmission over the internet is 100% secure.
      </p>

      {/* Rights */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Your Rights</h2>
      <p className="mb-4">
        You may request deletion of your data by contacting me directly.
      </p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact me through the contact form on this website.
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Last updated: {new Date().getFullYear()}
      </p>
    </section>
  );
}