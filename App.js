import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import db from './localdb'

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      text : '',
      chunks : []
    }

  }
  render() {
    return (
      <View style={styles.container}>
      <Header
        backgroundColor ={'purple'}
      centerComponent ={{text:'Monkey Chunky',
      style :{color : 'white',fontSize :20}
      }}>
        </Header> 

<Image
style = {styles.imageIcon}
source = {{uri :'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}

>

</Image>
<TextInput 
style ={styles.inbox}
onChangeText = {(text) =>{
this.setState({text :text})
}}
value = {this.state.text}
>

</TextInput>

<TouchableOpacity
style = {styles.goButton}
onPress = {()=>{
  this.setState({ chunks :db[this.state.text].chunks})
}}>
  <Text> GO </Text>
</TouchableOpacity>
<View>
{this.state.chunks.map(item => {
  return (
    <TouchableOpacity style = { styles.chunkButton}>
  <Text style = {styles.disptext}>{item} </Text>

</TouchableOpacity>
)})}

</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop : 40,
    
  },
  inbox: {
    marginTop :200,
    width :'40%',
    height : 40,
    alignSelf : 'center',
    textAlign : 'center',
    borderWidth : 2
  },
  disptext : {
    textAlign : 'center',
    fontSize : 35
  },
  goButton : {
    width :'40%',
    height : 30,
    alignSelf : 'center',
    marginTop : 30,
    marginLeft : '30%',
  },
  imageIcon : {
    width : 150,
    height : 150,
    marginLeft : 95
  },
  chunkButton :{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
