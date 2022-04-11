import '../styles/global.css'
import Header from '../components/header'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <div>
    <Header></Header>
    <Component {...pageProps} />
  </div>
  
}