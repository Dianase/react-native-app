import React from "react";
import {View, Text, StyleSheet, Button, Image} from 'react-native'


export default function Home({ navigation }){
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/srbjs6l8gsg2lscg2p6j'}}/>
      <Text style={styles.textStyles}>Welcome Home</Text>
      <Button title="See details" onPress={()=> navigation.navigate('Details')}/>
      <Button title="See coffee" onPress={()=> navigation.navigate('Coffee')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    fontSize: 48,
    textAlign: 'center'
  }
})