import { PropsWithChildren } from "react";

import LayoutProvider from "../_providers/LayoutProvider";
import Head from "next/head";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
