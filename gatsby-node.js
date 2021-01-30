const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      },
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPost.nodes.forEach((post) => {
    createPage({
      path: post.url,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: { ...post },
    })
  })


  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/page.js'),
      context: { ...page },
    })
  })
}
