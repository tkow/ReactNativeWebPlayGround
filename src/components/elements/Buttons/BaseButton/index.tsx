import * as React from 'react'
import { PressableProps, StyleSheet } from 'react-native'
import { Button } from './style'

type Props = {
  /**
   * Component to be displayed on the left side of the button
   */
  leadingComponent?: React.ReactNode
  /**
   * Component to be displayed on the right side of the button
   */
  tailingComponent?: React.ReactNode
  className?: string
} & PressableProps

export const BaseButton: React.FC<Props> = ({
  children,
  leadingComponent,
  tailingComponent,
  style,
  ...rest
}: Props) => {
  return (
    <Button
      style={(state) => {
        return {
          opacity: state.pressed ? 0.4 : 1,
          ...StyleSheet.flatten(style),
        }
      }}
      accessibilityRole="button"
      {...rest}
    >
      {leadingComponent && leadingComponent}
      {children}
      {tailingComponent && tailingComponent}
    </Button>
  )
}
