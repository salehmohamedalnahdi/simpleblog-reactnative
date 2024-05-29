import React from 'react';
import {Text, View ,ScrollView,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from "../components/form"

export default function CreateScreen({ navigation }) {

 
    const AddBlog = async(values) => {

      const response= await fetch('https://simbleblog-backend.onrender.com/create', {
        method: 'POST',
        body: JSON.stringify({
          title:values.title,
          content: values.content,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result= await response.json();
    console.log(result);
    }

    return (
    <View >
      <Form AddBlog={AddBlog} navigation={navigation} />
    </View>
  )
}


