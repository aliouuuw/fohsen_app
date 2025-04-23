import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { UserProfile } from "@/components/UserProfile";
import { ProgressCard } from "@/components/ProgressCard";
import { CurrentModule } from "@/components/CurrentModule";
import { ForumSection } from "@/components/ForumSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "@/components/Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AccueilScreen() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(
            interpolate(
              scrollY.value,
              [0, 100],
              [0, -100],
              Extrapolation.CLAMP
            ),
            { duration: 300 }
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      {/* Safe header that respects the status bar */}
      <SafeAreaView className="bg-[#1b1b1b] pb-4">
        <UserProfile scrollY={scrollY} />
      </SafeAreaView>

      {/* Scrollable Content */}
      <Animated.ScrollView
        className="flex-1 bg-[#f9f9f9]"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        // Remove contentContainerStyle paddingTop
      >
        <View>
          {/* Header Card */}
          <View className="bg-[#1b1b1b] py-6 relative">
            <Animated.View style={cardAnimatedStyle}>
              <ProgressCard scrollY={scrollY} />
            </Animated.View>
          </View>
        </View>

        {/* Main content */}
        <View className="flex-col w-full px-4 gap-8 mt-4 pb-10">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-medium text-sm text-[#1b1b1b] mb-3">
                Poursuivez le module en cours
              </Text>
              {/* TODO: make it a link (Link component to be built) to the modules screen */}
            </View>
            <CurrentModule
              moduleNumber="Module 4"
              title="Prise en Charge Intégrée des Maladies de l'Enfant - PCIME"
              currentLesson={3}
              totalLessons={4}
              duration="30min"
              progress={50}
            />
          </View>
          <ForumSection />
          <ResourcesSection />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
