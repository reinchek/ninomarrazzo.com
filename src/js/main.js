var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router');

var components = {
	nm: require('vue!../../src/NinoMarrazzo.vue'),
	nmHedaer: require('vue!../../src/components/parts/nmHeader.vue'),
	nmContents: require('vue!../components/parts/nmContents.vue'),
	nmMainMenu: require('vue!../components/parts/nmMainMenu.vue'),
	nmArticles: require('vue!../components/nmArticles.vue'),
};

Vue.use(VueRouter);

var router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			components: {
 				default: components.nm,
 				nmContents: components.nmContents,
			},
			children: [
				{
					path: '',
					component: components.nmMainMenu,
				}
			],
		},
		{
			path: '/blog',
			name: 'nmblog',
			components: {
				default: components.nm,
			},
			children: [
				{
					path: '',
					component: components.nmArticles,
				},
			],
		},
	],
});

new Vue({
  el: '#nm',
  data: {
  }, 

  components: {
  	nm: components.nm,
	nmHeader: components.nmHeader,
	nmContents: components.nmContents,
	nmMainMenu: components.nmMainMenu,
	nmArticles: components.nmArticles,
  },

  computed: {
  	name: function() {
  		return this.persons[0].name + ' & ' + this.persons[1].name;	
  	},
  },

  router: router,
});