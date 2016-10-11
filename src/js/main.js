var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router');

var components = {
	nmHedaer: require('vue!../../src/components/parts/nmHeader.vue'),
};

Vue.use(VueRouter);

var router = new VueRouter({
	history: false,
	routes: [
		{
			path: '/',
			name: 'nm',
			components: {
 				default: require('vue!../../src/NinoMarrazzo.vue'),
			}
		},
	],
});

new Vue({
  el: '#nm',
  data: {
  }, 

  computed: {
  	name: function() {
  		return this.persons[0].name + ' & ' + this.persons[1].name;	
  	},
  },

  router: router,
});