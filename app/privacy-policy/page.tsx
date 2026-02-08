import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Privacy Policy — Y22",
  description: "Y22 privacy policy and data handling practices."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-h1 text-center mb-6 text-primary-text-light dark:text-primary-text-dark">
            Privacy <span className="text-stream">Policy</span>
          </h1>
          <p className="text-body-lg text-center text-subtle-text-light dark:text-subtle-text-dark mb-16">
            Last updated: February 2026
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">1. Information We Collect</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                We collect information you provide directly, including name, email, company details, and payment information. We also collect call recordings, CRM data, and usage analytics to provide and improve our AI-powered sales training services.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">2. How We Use Your Data</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                Your data is used to train AI roleplay personas specific to your ICP, provide real-time call assistance through Whisper, generate call scores and coaching recommendations, and improve platform performance. We never sell your data to third parties.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">3. Data Security</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                We implement industry-standard encryption, access controls, and security practices. All call recordings and AI training data are encrypted at rest and in transit. We are SOC 2 Type II compliant.
              </p>
            </div>

            <div className="p-8 rounded-[24px] glass-strong border border-card-border-light dark:border-white/10">
              <h2 className="text-h4 mb-4 text-primary-text-light dark:text-primary-text-dark">4. Contact Us</h2>
              <p className="text-body-md text-subtle-text-light dark:text-subtle-text-dark leading-relaxed">
                For privacy-related inquiries, contact us at privacy@y22.ai or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
