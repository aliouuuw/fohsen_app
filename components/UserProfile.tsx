import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, AvatarImage } from "./ui/Avatar";
import { FontAwesome } from "@expo/vector-icons";
import { Progress } from "./ui/Progress";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolation,
} from "react-native-reanimated";

interface UserProfileProps {
  scrollY: Animated.SharedValue<number>;
}

export const UserProfile = ({ scrollY }: UserProfileProps) => {
  // Animate the progress bar to become a bottom border
  const progressBarStyle = useAnimatedStyle(() => {
    const progressOpacity = interpolate(
      scrollY.value,
      [0, 100],
      [0, 1],
      Extrapolation.CLAMP
    );

    return {
      opacity: withTiming(progressOpacity, { duration: 450 }),
    };
  });
  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View className="flex-row items-center gap-4 mt-3">
          <Avatar className="w-[43px] h-[43px]">
            <AvatarImage
              source={require("../assets/images/profile-picture.png")}
              alt="Profile"
            />
          </Avatar>
          <View className="flex-col">
            <Text className="text-[#d5d5d5] text-[10px] font-light font-['Poppins']">
              Salut,
            </Text>
            <Text className="text-white text-sm font-medium font-['Poppins']">
              Fatima Ndiaye
            </Text>
          </View>
        </View>
        <TouchableOpacity className="relative">
          <FontAwesome name="bell" size={24} color="white" />
          <View className="absolute -top-0.5 right-1 w-2 h-2 bg-red-500 rounded-full"></View>
        </TouchableOpacity>
      </View>
      <Animated.View style={progressBarStyle} className="w-full h-2.5 bg-slate-200 mt-2">
        <Progress
          value={44}
          className="h-2.5 w-full bg-slate-200"
          indicatorClassName="bg-green-600"
        />
      </Animated.View>
    </View>
  );
};
