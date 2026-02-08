import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Contact — Y22",
  description: "Get in touch with the Y22 team."
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-h1 text-center mb-6 text-primary-text-light dark:text-primary-text-dark">
            Get in <span className="text-stream">Touch</span>
          </h1>
          <p className="text-body-lg text-center text-subtle-text-light dark:text-subtle-text-dark mb-16">
            Have questions about Y22? Want a demo? We&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary-text-light dark:text-primary-text-dark">First Name</label>
                <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl glass-strong border border-card-border-light dark:border-white/10 bg-transparent focus:border-stream/50 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-primary-text-light dark:text-primary-text-dark">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl glass-strong border border-card-border-light dark:border-white/10 bg-transparent focus:border-stream/50 focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-primary-text-light dark:text-primary-text-dark">Email</label>
              <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl glass-strong border border-card-border-light dark:border-white/10 bg-transparent focus:border-stream/50 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-primary-text-light dark:text-primary-text-dark">Company</label>
              <input type="text" placeholder="Acme Corp" className="w-full px-4 py-3 rounded-xl glass-strong border border-card-border-light dark:border-white/10 bg-transparent focus:border-stream/50 focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-primary-text-light dark:text-primary-text-dark">Message</label>
              <textarea rows={5} placeholder="Tell us about your sales team and goals..." className="w-full px-4 py-3 rounded-xl glass-strong border border-card-border-light dark:border-white/10 bg-transparent focus:border-stream/50 focus:outline-none transition-colors resize-none" />
            </div>
            <button className="btn-primary w-full py-4 justify-center text-lg">
              Send Message
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
