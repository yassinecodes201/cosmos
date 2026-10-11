import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
