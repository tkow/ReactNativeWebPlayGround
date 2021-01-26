import React from 'react'
import { BaseButton } from './index'
import { BuiltinStyledPressableButton, StyledPressableButton } from './style'
import { StyleSheet, Text as Typography } from 'react-native'
import { action } from '@storybook/addon-actions'

const styles = StyleSheet.create({
  text: { padding: 8 },
})

export const Story = () => (
  <>
    <BaseButton onPress={action('onPress')}>
      <Typography style={styles.text}>Click Me!</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}
      leadingComponent={<Typography>{'\u2714'}</Typography>}
    >
      <Typography style={styles.text}>With Leading Component</Typography>
    </BaseButton>
    <BaseButton
      onPress={action('onPress')}
      tailingComponent={<Typography>{'\u2714'}</Typography>}
    >
      <Typography style={styles.text}>With Tailing Component</Typography>
    </BaseButton>

  </>
)

export const BuiltinPressableStyleTest = () =>(
  <BuiltinStyledPressableButton
    onPress={action('onPress')}
    style={(state) => {
      return {
        opacity: state.pressed ? 0.4 : 1,
      }
    }}
  >
    <Typography style={styles.text}>builtin styled.Pressable</Typography>
  </BuiltinStyledPressableButton>
)

export const StyledExtendPressableTest = () =>(
  <StyledPressableButton
    onPress={action('onPress')}
    style={(state) => {
      return {
        opacity: state.pressed ? 0.4 : 1,
      }
    }}
  >
    <Typography style={styles.text}>builtin styled.Pressable</Typography>
  </StyledPressableButton>
)


export default {
  title: 'elements/Buttons/BaseButton',
}
