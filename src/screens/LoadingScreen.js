import React from 'react'
import {View,ActivityIndicator,Image,Text} from 'react-native'

const LoadingScreen=()=>{
      return(
            <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}>
            <Image style={{width:250,height:150,margin:100}} source={require('../../assets/loadingImage.gif')}/>
                  <ActivityIndicator size='large' color='black'/>
            </View>
      )
}

export default LoadingScreen