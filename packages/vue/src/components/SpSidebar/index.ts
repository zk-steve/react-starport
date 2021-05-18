import { App as Application } from 'react'
import SpSidebar from './SpSidebar.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpSidebar)
	},
}

export default SpSidebar
