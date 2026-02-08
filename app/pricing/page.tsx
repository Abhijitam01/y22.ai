import type { Metadata } from "next";
import Pricing from "../_components/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Y22",
  description: "Simple, transparent pricing for sales teams of all sizes. Start training with AI today.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Pricing />
    </main>
  );
}

