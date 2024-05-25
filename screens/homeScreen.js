import React from 'react';
import {Text, View ,ScrollView,Button,TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import FetchAPI from "../utility/fetchApI"
import AddButton from "../components/addButton"
import DeleteButton from "../components/deleteButton"


export default function HomeScreen({ navigation }) {

   const data=FetchAPI()
    return (
    <View style={tw `m-2`}>
      <ScrollView>
      <AddButton navigation={navigation}/>
       {data && (
        data.map(item=><>
        
         <View style={tw `border-4 bg-blue-300 border-blue-300 text-black font-bold px-2 mb-1`}>
            <Text style={tw `p-2 font-bold `}>Title:{item.title} </Text>
            <View style={tw ` px-2 mb-2 `}>
              <Text style={tw `text-sm `}>Content: {item.body}</Text>
              <Text style={tw `text-gray-500 text-sm`}>CreatedAt{item.id}</Text>
              <DeleteButton navigation={navigation} id={item.id} />
            </View>
         </View>  
        </>)
       )}
      </ScrollView>
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