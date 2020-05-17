export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&family=Sedgwick+Ave&display=swap'
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [
		'~assets/scss/style.scss'
	],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources'
	],
	/*
  ** Style Resources configuration
  */
	styleResources: {
		scss: [
			'~assets/scss/*.scss'
		]
	},
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
