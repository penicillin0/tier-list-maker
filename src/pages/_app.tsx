import type { AppProps } from 'next/app'
import 'remixicon/fonts/remixicon.css'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}