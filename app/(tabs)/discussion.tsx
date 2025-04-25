import React, { useState } from 'react';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { SafeAreaView, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Card, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { forumPosts } from '@/utils/mockData';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Progress } from '@/components/ui/Progress';

export default function DiscussionScreen() {
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Général');

  const topics = [
    'Général', 
    'PCIME', 
    'Paludisme', 
    'Grossesse', 
    'Vaccination'
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      {/* Header */}
      <View className="bg-[#1b1b1b] pb-4 relative">
        <View className="flex-row px-4 pb-4 mt-4">
          <Text className="text-white text-xl font-medium text-center flex-1">
            Discussion
          </Text>
          <TouchableOpacity className="self-end">
            <FontAwesome name="bell" size={24} color="white" />
            <View className="absolute -top-0.5 right-1 w-2 h-2 bg-red-500 rounded-full"></View>
          </TouchableOpacity>
        </View>
        <View
          className="w-full h-2.5 bg-slate-200 mt-2 absolute bottom-0 left-0"
        >
          <Progress
            value={44}
            className="h-2.5 w-full bg-slate-200"
            indicatorClassName="bg-green-600"
          />
        </View>
      </View>

      <View className="flex-1 bg-[#f9f9f9]">
        {/* Topics Selector */}
        <View className="px-4 py-3">
          <FlatList
            data={topics}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => setSelectedTopic(item)}
                className={`px-4 py-2 mx-1 rounded-full ${selectedTopic === item ? 'bg-[#1b1b1b]' : 'bg-white border border-gray-300'}`}
              >
                <Text 
                  className={`text-xs font-medium ${selectedTopic === item ? 'text-white' : 'text-[#1b1b1b]'}`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Forum Posts */}
        <FlatList
          data={forumPosts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
          renderItem={({ item }) => (
            <Card
              className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-3"
            >
              <CardContent className="p-3">
                <View className="flex-col gap-[9px]">
                  <View className="flex-row items-center gap-[13px]">
                    <Avatar className="w-[51px] h-[51px]">
                      <AvatarImage source={item.avatar} alt={item.author} />
                    </Avatar>
                    <View className="flex-col gap-1 flex-1">
                      <View className="flex-row items-center gap-1 flex-wrap">
                        <Text className="font-medium text-sm text-[#1b1b1b] font-['Inter']">
                          {item.author}
                        </Text>
                        <View className="flex-row items-center gap-1">
                          <View className="w-[5px] h-[5px] bg-[#043b14] rounded-[2.5px]" />
                          <Badge className="bg-transparent p-0 h-auto">
                            <Text className="text-[#043b14] text-xs font-normal">
                              {item.role}
                            </Text>
                          </Badge>
                        </View>
                      </View>
                      <Text className="text-[10px] font-light text-[#5d5d5d] font-['Inter']">
                        {item.timeAgo}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-xs font-normal text-[#1b1b1b] font-['Inter']">
                    {item.content}
                  </Text>
                  
                  {/* Post actions */}
                  <View className="flex-row justify-end items-center gap-4 mt-1">
                    <TouchableOpacity className="flex-row items-center">
                      <FontAwesome name="thumbs-o-up" size={14} color="#666" />
                      <Text className="text-[10px] text-[#666] ml-1">12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                      <FontAwesome name="comment-o" size={14} color="#666" />
                      <Text className="text-[10px] text-[#666] ml-1">3</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </CardContent>
            </Card>
          )}
        />

        {/* Message Input */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2"
        >
          <View className="flex-row items-center mb-8">
            <TextInput
              className="flex-1 bg-[#f2f2f2] rounded-[20px] px-4 py-2 text-sm mr-2"
              placeholder="Écrivez votre message..."
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity 
              className="w-10 h-10 bg-[#1b1b1b] rounded-full items-center justify-center"
              disabled={!message.trim()}
            >
              <FontAwesome name="send" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
