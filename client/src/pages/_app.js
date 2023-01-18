import '@/styles/globals.css'
import Layouts from './components/layouts'


export default function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}