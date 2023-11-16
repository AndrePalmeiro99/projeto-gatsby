import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import ReactPaginate from "react-paginate"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.allMdx.nodes.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.allMdx.nodes.slice(startIndex, endIndex);

  const handlePageChange = ({ selected: page }) => {
    setCurrentPage(page);
  }

  return (
    <Layout>
      <p>Esses são os últimos posts adicionados:</p>
      <ul>
        {currentItems.map((node) => (
          <article key={node.id} className="posts">
            <h2>
              <Link to={`/posts/${node.frontmatter.slug}`} style={{color: '#2E86C1'}}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Postado em: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
      <div className="pagination-container">
      <ReactPaginate
        activeClassName={"item_active"}
        breakLabel={'...'}
        containerClassName={"pagination"}
        nextLabel={">>"}
        onPageChange={handlePageChange}
        pageCount={totalPages}
        previousLabel={"<<"}
      />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Posts</title>

export default Posts
