<template lang="jade">
	.container
		nmHeader
		router-view.center-block <!-- nmMainManu.vue -->
</template>

<script>
	var compHeader   = require('vue!./components/parts/nmHeader.vue');

	module.exports = {
		components: {
			nmHeader: compHeader,
		},

		data: function() {
			return {}
		}
	}
</script>