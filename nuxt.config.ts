export default defineNuxtConfig({
  css: ["/assets/styles/main.scss"], // add
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: { 
    head: {
      title : 'CarCare - Car Renting Company',
      meta: [
        { hid: 'description', name: 'description', content: 'Its a complete solution for your car search, car renting, car advise' }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          tagPosition: 'bodyClose'
        },       
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
  },
});