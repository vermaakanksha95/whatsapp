import {  Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const ButtonComp = ({title}:any) => {
  return (
    <TouchableOpacity style={styles.button_container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#00A884",
    width:"100%",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(10),
    borderRadius:moderateScale(4),
    alignItems:"center"
  },
  button_text:{
    fontSize:moderateScale(14),
    color:"white"
    
  }
});

export default ButtonComp