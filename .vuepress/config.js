module.exports = {
  title: "janis.codes",
  description: "Have a look at what I am doing",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "About", link: "/about/" },
      { text: "Imprint", link: "/imprint/" }
    ],
    serviceWorker: {
      updatePopup: true
    },
    repo: "Carnageous/janis.codes",
    repoLabel: "Contribute!"
  },
  plugins: [
    [
      "@vuepress/plugin-medium-zoom",
      {
        selector: ".theme-default-content img"
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ]
  ]
};
