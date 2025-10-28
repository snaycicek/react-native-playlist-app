import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, Button, TextInput, TouchableOpacity, ScrollView, Image, Linking} from 'react-native';
import { playList } from './array';

export default class App extends Component{
  state={
    i: true,
  }

  likeEvent = (itemx:any)=>{
    itemx.likeEvnt = !itemx.likeEvnt
    this.setState({i: !this.state.i})
  }

  render(){
    return(
      <View style={ss.container}>
        <ScrollView style={ss.centerArea}>
          { 
            playList.map((item, indis)=>
              <View key={indis} style={ss.field}>

                <View style={ss.coverField}>
                  <TouchableOpacity
                    onPress={()=>{Linking.openURL(item.urlx)}}
                    activeOpacity={.9}
                  >
                    <Image
                      source={item.coverx}
                      style={ss.cover}
                    />
                  </TouchableOpacity>
                </View>

                <View style={ss.textField}>
                  <TouchableOpacity
                    onPress={()=>{Linking.openURL(item.urlx)}}
                    activeOpacity={.9}
                  >
                    <Text style={ss.textName}>{item.namex}</Text>
                    <Text style={ss.textGroup}>{item.groupx}</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={ss.likeField}>
                  <TouchableOpacity
                    onPress={()=>this.likeEvent(item)}
                    activeOpacity={.8}
                  >
                    <Image
                      source={item.likeEvnt ? item.likex: item.dontlikex}
                      style={ss.like}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const ss = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#999966',
    alignItems:'center',  //scrollview ortalamak için
  },

  centerArea:{
    height:'100%',
    width:'85%',
    borderRadius:20,
  },

  field:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ffffff80',
    marginVertical:3,
    borderRadius:20,
  },

  coverField:{
    flex:2,
  },

  textField:{
    flex:4,
    justifyContent:'center',
  },

  likeField:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  cover:{
    height:75,
    width:75,
    borderRadius:20,
  },

  like:{
    height:50,
    width:50,
  },

  textName:{
    fontSize:19,
    color:'black',
    fontWeight:'400',
  },

  textGroup:{
    fontSize:14,
    marginTop:6,
  },

});