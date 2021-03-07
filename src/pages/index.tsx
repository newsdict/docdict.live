import Head from '../components/portals/head'
import Nav from '../components/portals/nav'
import Footer from '../components/portals/footer'
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
