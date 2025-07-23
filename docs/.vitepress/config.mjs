import { defineConfig } from 'vitepress'
const base = "/CSIP/"
export default defineConfig({
  base,
  head: [
    ["link", { rel: "icon", href: `${base}logo32.ico` }],
  ],
  title: "CSIP",
  themeConfig: {
    logo: '/logo256.ico',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Download', link: '/download' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TXiang-lab/CSIP' }
    ],
     footer: {
      message: 'Copyright © 2025 HZAU CSIP (Comprehensive Selection Index for Pigs). All rights reserved.',
      copyright: '📧  Email：cmzhang@webmail.hzau.edu.cn'
    }
  }
})
