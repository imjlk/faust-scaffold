import "../../faust.config";
import '@/styles/globals.css'
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
