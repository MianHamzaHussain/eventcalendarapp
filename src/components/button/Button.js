import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import getStyles from './ButtonStyle'
const Button = ({title,onPress,color}) => {
    const styles=getStyles(color)
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
export default Button