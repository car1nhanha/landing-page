import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
