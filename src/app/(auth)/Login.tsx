import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonComp from '@/src/components/atoms/buttonComp';
import AntDesign from "@expo/vector-icons/AntDesign";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}> What’s my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <View style={styles.dropdown_container}>
            <View />
            <Text style={styles.dropdown_title}>India</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </View>
          <View style={styles.horizontal_line} />
          <View style={styles.input_container}/>
          <View style={styles.country_code}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title="NEXT" style={{ paddingHorizontal: scale(20) }} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  header: {
    gap:verticalScale(50)
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container:{},
  input_container: {},
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
  },
  link_description: {
    color: "#0C42CC",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },
  dropdown_container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(20)
  },
  dropdown_title:{
    fontSize:moderateScale(16),
    fontWeight:500
  },
  input:{},
  country_code:{}
});

export default Login