import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Terms & Conditions — Y22",
  description: "Y22 terms of service and conditions of use."
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-h1 text-center mb-6 text-primary-text-light dark:text-primary-text-dark">
            Terms & <span className="text-stream">Conditions</span>
          </h1>
          <p className="text-body-lg text-center text-subtle-text-light dark:text-subtle-text-dark mb-16">
            Last updated: February 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">1. Acceptance of Terms</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                By accessing and using Y22 (&quot;the Platform&quot;), you agree to these Terms and Conditions. If you do not agree, please do not use the Platform.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">2. Service Description</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                Y22 provides AI-powered sales training services including AI roleplay, real-time call assistance (Whisper), automated call scoring, and coaching recommendations. Services are provided on a subscription basis.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">3. User Responsibilities</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                Users must ensure they have proper consent for call recording and AI analysis in their jurisdiction. Users are responsible for the accuracy of data provided and compliance with local regulations.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">4. Contact</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                For questions about these terms, contact us at legal@y22.ai.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
