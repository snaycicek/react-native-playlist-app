import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, Button, TextInput, TouchableOpacity, ScrollView, Image, Linking} from 'react-native';
import { playList } from './array';
import {ss} from './style';

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

