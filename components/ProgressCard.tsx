import React from "react";
import { View, Text } from "react-native";
import { Card, CardContent } from "./ui/Card";
import { Progress } from "./ui/Progress";
import Animated, { 
  useAnimatedStyle, 
  interpolate,
  withTiming,
  Extrapolation
} from 'react-native-reanimated';

interface ProgressCardProps {
  scrollY: Animated.SharedValue<number>;
}

export const ProgressCard = ({ scrollY }: ProgressCardProps) => {
  // Animate the card opacity and transform
  const cardAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 100],
      [1, 0],
      Extrapolation.CLAMP
    );
    
    return {
      opacity: withTiming(opacity, { duration: 200 }),
    };
  });

  return (
    <View className="px-4 mt-6 relative">
      {/* Main Card */}
      <Animated.View style={cardAnimatedStyle}>
        <Card className="w-full h-36 bg-green-800 border-none">
          <CardContent className="p-4">
            <Text className="text-white text-sm font-semibold font-['Poppins'] leading-[17.5px] mb-3.5">
              Formation des Acteurs Communautaires de Santé sur le Paquet
              de Services Communautaires
            </Text>
            <View className="mt-3">
              <View className="flex-row justify-between mb-1">
                <Text className="text-white text-[10px] font-bold">
                  44%
                </Text>
                <Text className="text-white text-[10px] font-normal font-['Poppins']">
                  3/7 modules
                </Text>
              </View>
              <Progress
                value={44}
                className="h-2.5 bg-[#1b1b1b7a] rounded-[50px]"
                indicatorClassName="bg-[#00d827] rounded-[50px]"
              />
            </View>
          </CardContent>
        </Card>
      </Animated.View>
    </View>
  );
}; 