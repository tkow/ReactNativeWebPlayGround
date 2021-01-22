import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'mochi-cross-platform-components',
})

addons.setConfig({
  theme,

  showRoots: true,
})
