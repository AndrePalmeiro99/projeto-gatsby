import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
      <h1 className="cabeca">Bem-Vindo ao Nosso Mundo de Humor e Inspiração</h1>

    <section>
      <h2>Sobre Nós</h2>
      <p>Bem-vindo ao nosso site dedicado a trazer um sorriso ao seu rosto e inspirar seu dia! Aqui, você encontrará uma mistura de piadas engraçadas para alegrar o seu humor e frases motivacionais para alimentar a sua alma.</p>

      <h2>O que Oferecemos</h2>
      <p>Navegue pelas diversas seções do nosso site para descobrir uma coleção única de piadas hilárias que certamente farão você rir ou mergulhe nas profundezas da inspiração com nossas poderosas frases motivacionais.</p>

      <h2>Junte-se à Diversão!</h2>
      <p>Estamos aqui para proporcionar momentos leves e positivos. Sinta-se à vontade para explorar, compartilhar com amigos e familiares, e não se esqueça de dar uma olhada nas atualizações regulares com novas piadas e frases que certamente iluminarão o seu dia.</p>
    </section>
  </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Início</title>
