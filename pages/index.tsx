import Head from '../components/partials/head'
import Nav from '../components/partials/nav'
import Footer from '../components/partials/footer'
import Top from './_top'

export default function Home(): JSX.Element {
  return (
    <div>
      <Head />
      <Nav />
      <Top />
      <Footer />
    </div>
  )
}
