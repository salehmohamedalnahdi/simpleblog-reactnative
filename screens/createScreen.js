import React from 'react';
import {Text, View ,ScrollView,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Form from "../components/form"

export default function CreateScreen({ navigation }) {

 
    const AddBlog = async(values) => {

      const response= await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
          title:values.title,
          body: values.content,
          userId: 3,
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
      <Form AddBlog={AddBlog} />
    </View>
  )
}



/* <ScrollView>
              {data ? (
               data.map((item)=> <>
               <Text key={item.id} style={tw`text-white font-semibold `}>Title: {item.title} </Text>
               <Text style={tw`text-white `}>Discription: </Text>
               </>)
              ) : (<Text></Text> )
              }
              </ScrollView>*/