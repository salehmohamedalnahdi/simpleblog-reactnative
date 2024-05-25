import {Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';



export default DeleteButton = ({navigation,id}) => {
  const DeleteBlog= async(id,navigation) => {;
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
        method: 'DELETE',
      });
    const result= await response.json();
    console.log("Done",result);
    navigation.navigate("HomeScreen")
  };
    return ( 
      <View style={tw `bg-red-500 rounded-lg px-2 py-1 mt-2 w-16`}>
       <TouchableOpacity onPress={()=>DeleteBlog(id,navigation)}>
       <Text style={tw `text-white text-center `}>Delete</Text>
       </TouchableOpacity>
       </View>
     );
  }
