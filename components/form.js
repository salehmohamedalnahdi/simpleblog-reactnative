import React from 'react';
import {Text, View ,ScrollView,Button,TextInput} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import ValidationForm from "../utility/validationForm"

export default function Form({ AddBlog }) {
    const validation =ValidationForm()

    return (
    <View style={tw `mx-2 mt-8 flex `}>
        <Formik
        initialValues={{ title: '', content: ''}}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          AddBlog(values);
          
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={tw ` border border-blue-400 h-12 px-2`}
              placeholder='type title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <Text style={tw `text-sm mb-2`}>{props.errors.title}</Text>
            <TextInput
            multiline 
            style={tw `border border-blue-400 h-40 px-2`}
            placeholder='type content'         
            onChangeText={props.handleChange("content")}
            value={props.values.content}
            />
            <Text style={tw `text-sm mb-2`}>{props.errors.content}</Text>
             <Button color='brown' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}

      </Formik>
    </View>
  )
}



