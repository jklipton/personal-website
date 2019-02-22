const path = require('path');
const PAGINATION_OFFSET = 4;

const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

const pluckTags = edges =>
  Object.keys(
    edges.reduce((acc, value) => {
      value.node.frontmatter.tags.forEach(tag => {
        if (!acc[tag]) {
          acc[tag] = tag;
        }
      });

      return acc;
    }, {}),
  );

const groupByTag = edges =>
  edges.reduce((acc, value) => {
    value.node.frontmatter.tags.forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(value);
    });
    return acc;
  }, {});

const createTagPages = (createPage, edges) => {
  const tags = pluckTags(edges);
  const posts = groupByTag(edges);

  Object.keys(posts).forEach(tag => {
    createPaginatedPages(
      createPage,
      posts[tag],
      `/tags/${tag}`,
      { tags, activetag: tag },
    );
  });
};

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node;
    const next = i === edges.length - 1 ? null : edges[i + 1].node;

    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: { 
        id: node.id,
        prev, 
        next
      }, //ADD PREV NEXT
    });
  });
};

const createBlog = (createPage, edges) => {
  const tags = pluckTags(edges);

  createPaginatedPages(createPage, edges, '/', { tags });
};

const createPaginatedPages = (
  createPage,
  edges,
  pathPrefix,
  context,
) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET);

    if (!acc[pageIndex]) {
      acc[pageIndex] = [];
    }

    acc[pageIndex].push(value.node.id);

    return acc;
  }, []);

  pages.forEach((page, index) => {
    if (index > 0 && pathPrefix == "/") {
      pathPrefix = "/posts";
    }
    const previousPagePath = pathPrefix == "/" ?`/posts/${index + 1}`  : `${pathPrefix}/${index + 1}` ;
    let nextPagePath =
      index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`;
    if (index === 1 && pathPrefix == "/posts") {
      nextPagePath = "/";
    }

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`, //PATH PREFIX?
      component: blogPostTemplate,
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              description
              path
              tags
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
  if (errors) {
    return Promise.reject(errors);
  }

  const { edges } = data.allMarkdownRemark;

  createBlog(actions.createPage, edges);
  createPosts(actions.createPage, edges);
  createTagPages(actions.createPage, edges);
});

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `allMarkdownRemark`) {
//     const parent = getNode(node.parent);
      
//     createNodeField({
//       name: 'id',
//       node,
//       value: node.id,
//     });

//     createNodeField({
//       name: 'path',
//       node,
//       value: node.path,
//     });

//     createNodeField({
//       name: 'title',
//       node,
//       value: node.frontmatter.title,
//     });

//     createNodeField({
//       name: 'date',
//       node,
//       value: node.frontmatter.date || '',
//     });

//     createNodeField({
//       name: 'description',
//       node,
//       value: node.frontmatter.description,
//     });
    
//     createNodeField({
//       name: 'tags',
//       node,
//       value: node.frontmatter.tags || [],
//     });
//   }
// };