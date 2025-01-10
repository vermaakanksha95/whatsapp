import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Auth = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text>Auth</Text>
      <Link href={"/Login"}>Login</Link>
    </View>
  )
}

export default Auth