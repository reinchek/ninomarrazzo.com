<template lang="jade">
	.container
		nmHeader
		transition(name="slide-fade")
			router-view.has-text-centered <!-- nmMainManu.vue -->
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