<template>
	<div class="sp-layout">
		<slot name="sidebar"></slot>
		<div class="sp-fill">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'react'
export default defineComponent({
	name: 'SpLayout',
})
</script>
