import {Text, TouchableOpacity, View,Button, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useState } from 'react';


export default AddBlogButton  = ({navigation}) => {
    return ( 
      <View style={tw `items-center bg-gray-500 rounded-lg px-2 py-1 mb-2 w-28`}>
       <TouchableOpacity onPress={() =>navigation.navigate("CreateScreen")}>
       <Text style={tw `text-white text-center `}>Add Blog</Text>
       </TouchableOpacity>
       </View>
     );
  }
