import React, { forwardRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card, CardContent } from "./ui/Card";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type CurrentModuleProps = {
  moduleNumber: string;
  title: string;
  currentLesson: number;
  totalLessons: number;
  duration: string;
  progress: number;
  id: string;
  onPress?: () => void;
};

export const CurrentModule = forwardRef<any, CurrentModuleProps>(
  (
    {
      moduleNumber,
      title,
      currentLesson,
      totalLessons,
      duration,
      progress,
      onPress,
    },
    ref
  ) => {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} ref={ref}>
        <View className="w-full">
          <View className="relative">
            <Image
              className="w-full h-[130px] rounded-t-[5px]"
              alt="Photo module"
              source={require("../assets/images/photo-module.png")}
            />
            <Card className="bg-white rounded-t-none rounded-b-[5px] shadow-sm shadow-zinc-300 border-none">
              <View className="w-full h-[3px] bg-transparent">
                <View className="w-[90%] h-[3px] bg-slate-800" />
              </View>
              <CardContent className="p-3.5">
                <View className="flex-col gap-2">
                  <Text className="text-xs font-normal text-black">
                    {moduleNumber}
                  </Text>
                  <Text className="text-sm font-semibold text-[#1b1b1b] font-['Poppins']">
                    {title}
                  </Text>
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <FontAwesome
                        name="clock-o"
                        size={18}
                        color="#1b1b1b"
                      />
                      <Text className="font-['Poppins'] font-normal italic text-[10px] text-[#1b1b1b] ml-2">
                        {duration}
                      </Text>
                    </View>
                    <Text className="font-['Poppins'] font-normal text-[10px] text-[#7f7f7f]">
                      {currentLesson}/{totalLessons} leçons
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
); 