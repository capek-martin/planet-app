import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PlanetProvider } from "./contexts/planetContext";
import StyledComponentsRegistry from "./utils/registry";
import { LoadingProvider } from "./contexts/loadingContext";
import GlobalStyle from "./globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
            <ToastContainer />
            <GlobalStyle />
            <PlanetProvider>{children}</PlanetProvider>
          </LoadingProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
