import React from 'react'
import { Text } from 'react-native'
import { Snackbar } from './index'
import { action } from '@storybook/addon-actions'

export const SnackbarStory = () => {
  const [visible, setVisible] = React.useState(true)
  return (
    <Snackbar
      visible={visible}
      onAction={action('onAction')}
      onDismiss={() => {
        setVisible(false)
      }}
    >
      <Text style={{color: 'white'}} >Hello SnackBar!</Text>
    </Snackbar>
  )
}


export default {
  title: 'elements/Snackbar/Snackbar',
}
