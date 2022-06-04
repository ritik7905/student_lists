import LayoutPrimary from '../common/layout/LayoutPrimary'
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutPrimary>
      <Component {...pageProps} />
    </LayoutPrimary>
  )
}

export default MyApp
