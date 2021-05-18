<template>
	<div class="SpBlockDisplayFull">
		<pre>{{ block }}</pre>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'react'
export default defineComponent({
	name: 'SpBlockDisplayFull',
	props: {
		block: Object,
	},
	data() {
		return {
			txs: [],
		}
	},
})
</script>
