import {StyleSheet} from 'react-native';

export const ss = StyleSheet.create({
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