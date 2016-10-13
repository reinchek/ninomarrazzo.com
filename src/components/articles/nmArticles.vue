<template lang="jade">
	div.articles
		div Articles!
		nmArticle(v-for="article in articles", :article="article")
		router-link(to="test") contents
</template>

<script>
	var compArticle = require('vue!./nmArticle.vue');
	var RESTServer  = 'http://172.17.0.3';

	module.exports = {
		components: {
			nmArticle: compArticle,
		},
		data: function() {
			return {
				articles: function() {
					this.$http.get(RESTServer + '/articles/all').then(function(response) {
						// success callback
						console.log('Moooostr!');
						return true;
					}, function(response) {
						// error callback
						console.log('loot!');
						return false;
					});
				}
			}
		}
	}
</script>