import * as React from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Layout from '../Components/Layout'
import '../style/style.scss'

const IndexPage = () => {
  return (
    <main>
        <Header />
        <Layout />
        <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Real Researcher</title>
