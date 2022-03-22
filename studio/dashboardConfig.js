export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62396ddc2fc59867405dc103',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y3w2dgbq',
                  apiId: 'e6ec0940-5151-4f1e-a1c3-8a01a7e582a8'
                },
                {
                  buildHookId: '62396ddc27c6df6608f156fb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vafyv3y8',
                  apiId: 'c95a9f67-ffc3-45ae-ac17-f1ad2b85b680'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jareddarkweb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vafyv3y8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
