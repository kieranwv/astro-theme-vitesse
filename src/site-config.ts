export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Vitesse theme for Astro',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'kaivanwong@outlook.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/kaivanwong',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/kaivanwong',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/kaivan-wong-a42441291',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/hikaivanwong',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: 'https://youtube.com/@kaivanwong',
      icon: 'i-simple-icons-youtube',
    },
    {
      text: 'Bilibili',
      href: 'https://space.bilibili.com/19001420',
      icon: 'i-simple-icons-bilibili',
    },
    {
      text: '微博',
      href: 'https://weibo.com/u/5605059021',
      icon: 'i-simple-icons-sinaweibo',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Getting Started',
        href: '/getting-started',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: '404 Page',
        href: '/404',
      },
      {
        text: 'Astro Page',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kaivanwong/vitesse-astro-theme',
      },
    ],
  },
}

export default siteConfig
