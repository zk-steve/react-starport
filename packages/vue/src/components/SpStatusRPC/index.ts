import { App as Application } from 'react'
import SpStatusRPC from './SpStatusRPC.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpStatusRPC)
	},
}

export default SpStatusRPC
