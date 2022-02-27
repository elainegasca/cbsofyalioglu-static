module.exports = {
  siteUrl: 'https://www.cbsofyalioglu.com',
  changefreq: 'monthly',
  priority: 0.5,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    '/post*',
    "/archive*",
    '/featured*',
    '/productivity',
    '/code',
    '/uretkenlik',
    '/programlama',
    '/travel',
    '/design',
    '/how-to',
    '/post/adonisjs-solidjs',
    '/post/adonisjs-solidjs',
    '/post/adonisjs5-tailwind',
    '/post/canva-pro-ucretsiz',
    '/post/canva-pro-ucretsiz',
    '/featured/content-creation-tools',
    '/post/content-creation-tools',
    '/featured/django-and-modern-js-libraries-svelte',
    '/post/e-bulten-hazirlama-siteleri',
    '/post/en-iyi-blog-siteleri',
    '/featured/en-iyi-blog-siteleri',
    '/post/free-design-resources',
    '/featured/free-design-resources',
    '/post/free-design-resources',
    '/post/introduction-to-web-rtc',
    '/post/next-js-development-within-nx-workspace',
    '/post/not-alma-uygulamasi-ve-teknikleri',
    '/featured/not-tutma-teknikleri-zettelkasten-metodu',
    '/featured/notion-sablonlari-ve-ucretsiz-site-olusturmak',
    '/post/obsidian-not-alma-uygulamasi',
    '/post/proje-yonetim-uygulamalari',
    '/post/python-vs-javascript',
    '/featured/solidjs-and-reactive-primitives',
    '/post/solidjs-and-reactive-primitives',
    '/post/self-hosted-confluence',
    '/post/ucretsiz-wordpress-blog-acma',
    '/archive/video-archive',
    '/post/wordpress-vs-jamstack',
    '/post/yetenekli-dijital-not-tutma-uygulamasi-tiddlywiki',
    '/bookmarks/design-tools',
    '/bookmarks/dev-tools',
    '/code/django-and-modern-js-libraries-backend/',
    '/code/django-and-modern-js-libraries-react/',
    '/code/django-and-modern-js-libraries-svelte/',
    "/archive/video-archive/"
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, 'https://www.cbsofyalioglu.com/post/is-it-safe-to-travel-through-istanbul-airport/'),
    await config.transform(config, '/post/django-and-modern-js-libraries-backend/'),
    await config.transform(config, '/post/django-and-modern-js-libraries-svelte/'),
    await config.transform(config, '/post/django-and-modern-js-libraries-react/'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      //{
      //  userAgent: 'test-bot',
      //  allow: ['/path', '/path-2'],
      //},
      //{
      //  userAgent: 'black-listed-bot',
      //  disallow: ['/sub-path-1', '/path-2'],
      //},
    ],
    additionalSitemaps: [
      //'/my-custom-sitemap-1.xml',
      //'/my-custom-sitemap-2.xml',
      //'/my-custom-sitemap-3.xml',
    ],
  },
}
