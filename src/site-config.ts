export const siteConfig = {
  author: 'Kaivan Wong',
  title: 'Vitesse theme for Astro',
  subtitle: 'Supports Vue and UnoCSS.',
  description: 'Vitesse theme for Astro blog, supports Vue and UnoCSS.',
  image: {
    src: '/preview.jpg',
    alt: 'Vitesse theme for Astro - Supports Vue and UnoCSS.',
  },
  email: '',
  headerNavLinks: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
  ],
  hero: {
    title: 'Welcome to Vitesse Theme for Astro',
    text: `<p>Experience the perfect blend of efficiency and aesthetics with Vitesse Theme for Astro. Inspired by the sleek design of antfu.me, this template seamlessly integrates Vue and Unocss to provide you with a cutting-edge development experience.</p>
    <p><b>Key Features:</b></p>
    <ol>
      <li><b>Vue Support:</b> Harness the power of Vue.js to build dynamic and interactive web applications. Vitesse Theme for Astro ensures smooth integration and efficient utilization of Vue components for enhanced functionality.</li>
      <li><b>Unocss Integration:</b> Streamline your styling process with Unocss, a utility-first CSS framework. By utilizing only the styles you need, Unocss optimizes your codebase for performance without compromising on design flexibility.</li>
      <li><b>Sleek Design:</b> Drawing inspiration from the modern aesthetic of antfu.me, Vitesse Theme for Astro offers a clean and visually appealing design. From crisp typography to intuitive layouts, every element is crafted with attention to detail to elevate your web presence.</li>
      <li><b>Customizable Components:</b> Tailor your web applications to suit your unique requirements with Vitesse Theme's customizable components. Whether you're building a portfolio, blog, or e-commerce site, our flexible components adapt to your needs with ease.</li>
      <li><b>Performance Optimization:</b> Deliver lightning-fast user experiences with Vitesse Theme for Astro's focus on performance optimization. By minimizing unnecessary bloat and prioritizing efficient code practices, your applications will load swiftly and operate seamlessly across devices.</li>
    </ol>
    <p>Elevate your web development journey with Vitesse Theme for Astro. Experience the perfect synergy of Vue, Unocss, and modern design principles to create stunning web applications that captivate and engage your audience.</p>
     `,
    image: {
      src: 'hero.jpg',
      alt: '',
    },
    socialLinks: [],
  },
  pageNavLinks: [
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Notes',
      href: '/notes',
    },
    {
      text: 'Reading',
      href: '/reading',
    },
  ],
  projects: [
    {
      title: 'Develop Templates',
      projects: [
        {
          text: 'Frosty Web',
          description: 'A clean and minimalist website template designed to showcase content with style.',
          icon: 'i-carbon-webhook',
          href: '',
        },
      ],
    },
    {
      title: 'Framework',
      projects: [
        {
          text: 'Pixel Craft',
          description: 'Frontend framework for crafting pixel-perfect web applications with a responsive design.',
          icon: 'i-carbon-pen-fountain',
          href: '',
        },
        {
          text: 'Aurora UI',
          description: 'Modern UI library designed to streamline frontend development with modular components.',
          icon: 'i-carbon-mountain',
          href: '',
        },
        {
          text: 'Nimbus CSS',
          description: 'Lightweight CSS framework for building responsive websites with a flexible grid system.',
          icon: 'i-carbon-face-satisfied',
          href: '',
        },
      ],
    },
    {
      title: 'Library',
      projects: [
        {
          text: 'Zenith Scroll',
          description: 'Smooth-scrolling JavaScript library for creating immersive scrolling experiences.',
          icon: '',
          href: '',
        },
        {
          text: 'Polaris JS',
          description: 'Lightweight JavaScript library for creating smooth animations and transitions.',
          icon: 'i-carbon-tools-alt',
          href: '',
        },
      ],
    },
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Sponsor',
      href: '/sponsor',
    },
    {
      text: 'Contact Me',
      href: 'mailto:kaivanwong@outlook.me',
    },
    {
      text: 'Github Repo',
      href: 'https://github.com/kaivanwong/vitesse-astro-theme',
    },
  ],
}

export default siteConfig
