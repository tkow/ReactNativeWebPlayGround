import React from 'react'
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Easing,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { AnimatedView } from './style'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  main: {
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    color: "white",
    flex: 1,
  },
})

type Props = {
  visible: boolean
  actionLabel?: string
  onDismiss: () => void
  onAction?: () => void
  duration?: number
  children: React.ReactNode
}
export const Snackbar: React.FC<Props> = ({
  children,
  visible,
  onDismiss,
  actionLabel = 'DISMISS',
  onAction,
  duration = 4000,
}: Props) => {
  const animated = React.useRef(new Animated.Value(0)).current

  const appear = React.useCallback(() => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start()
  }, [animated])

  const hide = React.useCallback(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start()
  }, [animated])

  React.useEffect(() => {
    if (visible) {
      appear()
      setTimeout(() => {
        onDismiss()
      }, duration)
    } else {
      hide()
    }
  }, [visible, animated, appear, hide, duration, onDismiss])
  return (
    <SafeAreaView pointerEvents="box-none" style={styles.container}>
      <AnimatedView
        style={[
          styles.main,
          {
            opacity: animated,
            transform: [
              {
                scale: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.7, 1],
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.body}>{children}</View>
        {onAction ? (
          <TouchableOpacity
            onPress={() => {
              onAction()
              onDismiss()
            }}
          >
            <Text style={{color: 'white'}}>{actionLabel}</Text>
          </TouchableOpacity>
        ) : null}
      </AnimatedView>
    </SafeAreaView>
  )
}
