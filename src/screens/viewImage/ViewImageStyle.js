import {StyleSheet} from "react-native"
import colors from "../../config/colors"

const ViewImageStyle = StyleSheet.create({container:{
    flex:1,
    backgroundColor:colors.black,
},
closeButton: {
    top: 40,
    left: 30,
  },
  deleteButton:{
    top: 40,
    position: 'absolute',
    right: 30,
  },
  img:{
    height: '100%', width: '100%'
  }
})


export default ViewImageStyle