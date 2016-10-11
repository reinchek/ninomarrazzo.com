<template>
	<div class="container">
		<nmHeader></nmHeader>
	</div>

</template>

<script>
	var compHeader = require('vue!./components/parts/nmHeader.vue');

	module.exports = {
		components: {
			nmHeader: compHeader,
		},

		data: function() {
			return {}
		}
	}
</script>