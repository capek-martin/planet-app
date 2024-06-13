import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PlanetProvider } from "./contexts/planetContext";
import StyledComponentsRegistry from "./contexts/registry";
import { LoadingProvider } from "./contexts/loadingContext";
import GlobalStyle from "./globalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planet explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <LoadingProvider>
            <GlobalStyle />
            <PlanetProvider>{children}</PlanetProvider>
          </LoadingProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
