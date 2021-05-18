import { App as Application } from 'react'
import SpAccountList from './SpAccountList.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpAccountList)
	},
}

// use(Plugin);

export default SpAccountList
