import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

// TODO: Make this into global thing that is shared throughout applicatoin
// for localization and managment of copy
const copy = {
  chatList: {
    loading: 'Loading chats',
    postChatButton: 'Add chats',
    noChats: "There does't seem to be any chats here mate..",
  },
};

const url =
  'https://localhost:5000/api/chats' ||
  'https://undefined-backend.herokuapp.com/api/chats';

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  // TODO: Add statemachine

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newChats = (await axios.get(url)).data;
        console.log(newChats);
        setChats(newChats);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setChats([]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const postChat = async () => {
    const name = 'Jocke123' + Math.random().toString() + '';
    setLoading(true);
    try {
      const newChat = (await axios.post(url, { name })).data;
      console.log(newChat);
      setChats([...chats, newChat]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View>
      {loading && <Text>{copy.chatList.loading}</Text>}

      {/* TODO: Add as input */}
      <TouchableOpacity onPress={() => postChat()}>
        <Text>{copy.chatList.postChatButton}</Text>
      </TouchableOpacity>

      {/* TODO: make this into chatlist component */}
      {chats ? (
        <View>
          {chats.map((chat) => (
            <Text key={chat._id}>{chat.name}</Text>
          ))}
        </View>
      ) : (
        <Text>{copy.chatList.noChats}</Text>
      )}
    </View>
  );
};

export default ChatList;
