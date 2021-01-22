import '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import 'sanitize.css'
import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
)

addParameters({
  layout: 'fullscreen',
  options: {
    panelPosition: 'right',
  },
  doc: {
    inlineStories: true,
    iframeHeight: '60px',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
})
