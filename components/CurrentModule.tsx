import React from "react";
import { View, Text, Image } from "react-native";
import { Card, CardContent } from "./ui/Card";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type CurrentModuleProps = {
  moduleNumber: string;
  title: string;
  currentLesson: number;
  totalLessons: number;
  duration: string;
  progress: number;
};

export const CurrentModule = ({ moduleNumber, title, currentLesson, totalLessons, duration, progress }: CurrentModuleProps) => {
  return (
    <View>
      <View className="w-full">
        <View className="relative">
          <Image
            className="w-full h-[130px] rounded-t-[5px]"
            alt="Photo module"
            source={require("../assets/images/photo-module.png")}
          />
          <Card className="rounded-t-none rounded-b-[5px] shadow-sm shadow-zinc-300 border-none">
            <View className="w-full h-[3px] bg-slate-200">
              <View className="w-[90%] h-[3px] bg-green-500" />
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
    </View>
  );
}; 