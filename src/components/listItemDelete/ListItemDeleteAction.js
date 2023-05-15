import { View ,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../config/colors';
import styles from './ListItemDeleteStyle';
const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
     <Icon name='delete' size={35} color={colors.white}/>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction
