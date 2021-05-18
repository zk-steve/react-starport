import { App as Application } from 'react'
import SpAmountSelect from './SpAmountSelect.vue'

import { registerComponent } from './../../utils/plugins/index'

export const Plugin = {
	install(vue: Application): void {
		registerComponent(vue, SpAmountSelect)
	},
}

export default SpAmountSelect
