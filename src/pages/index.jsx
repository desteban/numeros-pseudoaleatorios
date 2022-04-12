import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Números pseudoaleatorios</h1>
    <p>
      Los números pseudoaleatorios son números que se generan en el proceso de
      parecer aleatorios, pero en realidad no lo son. Desde un punto de vista
      estadístico, las secuencias de números pseudoaleatorios no muestran ningún
      patrón o regularidad aparente, a pesar de ser generadas por algoritmos
      completamente deterministas donde las mismas condiciones iniciales siempre
      producen los mismos resultados.
    </p>
  </Layout>
)

export default IndexPage
