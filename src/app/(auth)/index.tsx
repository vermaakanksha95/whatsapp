import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePath from '@/src/constants/ImagePath';
import { moderateScale, verticalScale } from "react-native-size-matters";
import { router } from 'expo-router';

const Auth = () => {
    const [isLoading,setIsLoading] = useState(false);
    let navigate_to_welcome = () => {
        router.push("/(auth)/terms_agree");
    };
    let loading_timeout = () => {
        setIsLoading(true);
        setTimeout(navigate_to_welcome,3000);
    }
    useEffect(() => {
        const timeout =  setTimeout (loading_timeout,2000);
        return () => {
            clearTimeout(timeout)
        }
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image style={styles.logo_style} source={ImagePath.logo} />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
          <ActivityIndicator size={moderateScale(40)} color={"#0CCC83"}/>
          <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 70,
  },
  header: {},
  body: {
    alignItems:'center',
},
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent:'flex-end'
  },
  from_text: {
    fontSize: 12,
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "black",
  },
  logo_style: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "black",
    fontWeight:'bold'
},
loading_text:{
    fontSize:moderateScale(15),
    color:"#00A884",
    fontWeight:'bold',
    marginTop:verticalScale(4),
    alignItems:'center'
}
});

export default Auth