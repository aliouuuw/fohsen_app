import React from "react";
import { View, Text } from "react-native";
import { Card, CardContent } from "./ui/Card";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import { forumPosts } from "../utils/mockData";

export const ForumSection = () => {
  return (
    <View>
      <Text className="font-medium text-sm text-[#1b1b1b] mb-3">
        Accédez au forum
      </Text>
      <View className="flex-col gap-2">
        {forumPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none"
          >
            <CardContent className="p-3">
              <View className="flex-col gap-[9px]">
                <View className="flex-row items-center gap-[13px]">
                  <Avatar className="w-[51px] h-[51px]">
                    <AvatarImage source={post.avatar} alt={post.author} />
                  </Avatar>
                  <View className="flex-col gap-1 flex-1">
                    <View className="flex-row items-center gap-1 flex-wrap">
                      <Text className="font-medium text-sm text-[#1b1b1b] font-['Inter']">
                        {post.author}
                      </Text>
                      <View className="flex-row items-center gap-1">
                        <View className="w-[5px] h-[5px] bg-[#043b14] rounded-[2.5px]" />
                        <Badge className="bg-transparent p-0 h-auto">
                          <Text className="text-[#043b14] text-xs font-normal">
                            {post.role}
                          </Text>
                        </Badge>
                      </View>
                    </View>
                    <Text className="text-[10px] font-light text-[#5d5d5d] font-['Inter']">
                      {post.timeAgo}
                    </Text>
                  </View>
                </View>
                <Text className="text-xs font-normal text-[#1b1b1b] font-['Inter']">
                  {post.content}
                </Text>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </View>
  );
}; 