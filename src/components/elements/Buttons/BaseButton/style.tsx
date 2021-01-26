import React, { useMemo } from 'react'

import styled from 'styled-components/native'
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native'

type MergePressableStylesFn = (
  style?: RNPressableProps['style'],
) => RNPressableProps['style']

const mergePressableStyles: MergePressableStylesFn = (style) => {
  if (typeof style === 'function') return style
  if (Array.isArray(style)) {
    return (state) => {
      return style.map((sty: any) => {
        return typeof sty === 'function' ? sty(state) : sty
      })
    }
  }
  return style
}

export const Pressable: React.FC<RNPressableProps> = ({
  style,
  ...props
}: RNPressableProps) => {
  const _style = useMemo(() => mergePressableStyles(style), [style])
  return <RNPressable style={_style} {...props} />
}

export const Button = styled(Pressable)<RNPressableProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BuiltinStyledPressableButton = styled.Pressable<RNPressableProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const StyledPressableButton = styled(Pressable)<RNPressableProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
