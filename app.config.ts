export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'vue-cheat-sheets.ru',
      description: 'Шпаргалки по Vue3 и Nuxt',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Шпаргалки по Vue3 и Nuxt',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/krivospitsky/vue-cheat-sheets.ru',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2025',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/krivospitsky/vue-cheat-sheets.ru',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'На этой странице',
      links: [{
        title: 'Звезды на GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/krivospitsky/vue-cheat-sheets.ru',
        target: '_blank',
      }, {
        title: 'Создать Issue',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/krivospitsky/vue-cheat-sheets.ru/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});