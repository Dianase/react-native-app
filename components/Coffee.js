import React, {useState, useEffect} from 'react'
import {Text, Button, ScrollView} from 'react-native'

export default function Coffee(){
  const [coffeList, setCoffeeList] = useState()
  const [temperature, setTemperature] = useState('hot')
  useEffect(()=> {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then(response => response.json())
      .then(setCoffeeList)
      .catch(alert)
  }, [temperature])
  return(
   
    <ScrollView >
       <View>
    <Button title="Hot" onPress={() => setTemperature('hot')}/>
      <Button title="Cold" onPress={() => setTemperature('cold')}/>
      {!coffeList
      ?<Text>Loading...</Text>
      : coffeList.map(item => <Text key={item.id}>{item.title}</Text>)}
      </View>
    </ScrollView>
    
  )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignContent: 'center',
//     justifyContent: 'center',
//   }
