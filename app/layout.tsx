import type { Metadata } from "next";
import "./globals.css";
import ClientEffects from "./_components/ClientEffects";

export const metadata: Metadata = {
  title: "Y22 — AI Sales Training & Real-Time Coaching for B2B Teams",
  description: "Y22 trains your reps with AI buyers modeled on your ICP, coaches them live during real calls, and scores every conversation — so your team closes more deals, faster."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="/legacy.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const root = document.documentElement;
                if (savedTheme === 'dark') {
                  root.classList.add('dark');
                } else if (savedTheme === 'light') {
                  root.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  root.classList.add('dark');
                } else {
                  root.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <main>{children}</main>
        <ClientEffects />
      </body>
    </html>
  );
}
