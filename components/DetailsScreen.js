import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker'

export default function DetailsScreen({navigation}){
  const [image, setImage] = useState(null)
  const [firstName, setFirstName] = useState()
  const pickImage = async () => {
    const _image = await ImagePicker.launchImageLibraryAsync();
    if(!_image.cancelled){
      setImage(_image.uri)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello there { firstName || 'Guest' }! </Text>
      {image && <Image source={{uri: image}} style={styles.image} />}
      <Text style={styles.textStyle}>These are the details</Text>
      <Button title="Select Photo" onPress={pickImage}/>
      <TextInput 
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"/>
      <Button title=" < Back" onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 28,
    textAlign: 'center',
  },
  image: {
    width: 360,
    height: 240,
    alignSelf: 'center'
  }, 
  title: {
    fontSize: 64,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12, 
    borderWidth: 1,
  }

})