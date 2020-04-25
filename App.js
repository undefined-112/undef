import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios'


const copy = {
  postChatButton: 'Add chats',
  noChats: "There does't seem to be any chats here mate.."
}

const url = 'https://undefined-backend.herokuapp.com/api/chats'

export const App = () => {
  const [chats, setChats] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const chats = (await axios.get(url)).data
        setChats(chats)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setChats([])
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  
  const postChat = async (name) => {
    setLoading(true)
    
    try {
      const newChat = (await axios.post(url, { name })).data
      console.log(newChat)
      setChats([...chats, newChat])
      setLoading(false)
      a
    } catch(error ) {
      console.error(error)
      setLoading(false)
    }
  }

  const doPostChat = async () => {
    postChat('Erisk chat' + Math.random().toString() + '')
  }


  return (
    <View>
      <Text>Hej</Text>
      {loading && (<Text> Weee are loooaaading</Text>)}

      <TouchableOpacity onPress={() => doPostChat()}><Text>{copy.postChatButton}</Text></TouchableOpacity>

      {chats ? (
        <View>
          {chats.map(chat => (
            <Text key={chat._id}>{chat.name}</Text>
          ))}
        </View>
      ) : <Text>{copy.noChats}</Text>}
      
    </View>
  );
};

