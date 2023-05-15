import { Image, View,TouchableHighlight } from 'react-native';
import React from 'react';
import Text from '../text/Text';
import styles from './ListItemStyle';
import {Swipeable} from 'react-native-gesture-handler';
import McIcon from "react-native-vector-icons/MaterialCommunityIcons"

const ListItem = ({title, subTitle, image,onPress, renderRightActions,IconComponent}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={styles.highlightColor}>
    <View style={styles.container}>
      <View>
      {IconComponent}
       {image && <Image source={image} style={styles.image} /> } 
      </View>
      <View style={styles.detailCon}>
        <Text text={title} style={styles.title} numberOfLines={1}/>
       {subTitle&& <Text text={subTitle} style={styles.subTitle} numberOfLines={1}/>} 
      </View>
      <McIcon name="chevron-right" size={25} color={styles.iconColor}/>

    </View>
    </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

