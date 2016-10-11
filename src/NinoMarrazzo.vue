<template>
	<div class="container">
		<nmHeader></nmHeader>

		<div class="columns">
		  <div class="column">
		    First column
		  </div>
		  <div class="column">
		    Second column
		  </div>
		  <div class="column">
		    Third column
		  </div>
		  <div class="column">
		    Fourth column
		  </div>
		</div>

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