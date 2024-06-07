import { PropsWithChildren } from "react";

import LayoutProvider from "../_providers/LayoutProvider";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
      <Script src="https://js.hcaptcha.com/1/api.js" />
    </html>
  );
}
