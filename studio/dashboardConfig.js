export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8da102b88501cfa37a0668',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-always-learning-studio',
                  apiId: 'f35cc726-bb32-4738-95d8-86dea12f5b17'
                },
                {
                  buildHookId: '5d8da102ecaded236f167829',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-always-learning',
                  apiId: '6502a67c-aacd-41d5-8fd7-367e32021580'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LUKERHYS/sanity-gatsby-blog-always-learning',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-always-learning.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
