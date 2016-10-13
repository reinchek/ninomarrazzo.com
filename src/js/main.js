var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

var components = {
	nm: require('vue!../../src/NinoMarrazzo.vue'),
	
	nmHedaer: require('vue!../../src/components/parts/nmHeader.vue'),
	
	nmContents: require('vue!../components/parts/nmContents.vue'),
	
	nmMainMenu: require('vue!../components/parts/nmMainMenu.vue'),

	nmArticles: require('vue!../components/articles/nmArticles.vue'),
};

Vue.use(VueRouter);
Vue.use(VueResource);


var router = new VueRouter({
	history: true,
	routes: [
		{
			path: '/',
			components: {
 				default: components.nm,
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
		{
			path: '/test',
			name: 'nmtest',
			transition: 'slide-fade',
			components: {
				default: components.nmContents,
			},
		},
	],
});

var Vue = new Vue({
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

  http: {
    root: '/',
    headers: {
    }
  }
});

console.log(Vue);