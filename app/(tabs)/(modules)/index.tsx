import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { ModuleCard } from "@/components/ModuleCard";
import { modules } from "@/utils/mockData";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { CurrentModule } from "@/components/CurrentModule";
import { Progress } from "@/components/ui/Progress";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { Link } from "expo-router";

export default function ModulesScreen() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const currentModule = modules.find((m) => m.status === "in_progress");

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      <View className="bg-[#1b1b1b] pb-4 relative">
        <View className="flex-row px-4 pb-4 mt-4">
          <Text className="text-white text-xl font-medium text-center flex-1">
            Modules
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

      <Animated.ScrollView
        className="flex-1 bg-[#f9f9f9]"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <View className="p-4 gap-6">
          {/* Current Module Section */}
          <View className="gap-2">
            <Text className="font-medium text-zinc-900 text-sm py-2">
              Module en cours...
            </Text>
            {currentModule && (
              <Link
                href={{
                  pathname: "/modules/[id]",
                  params: { id: currentModule.id }
                }}
                asChild
              >
                <CurrentModule
                  id={currentModule.id}
                  moduleNumber={currentModule.moduleNumber}
                  title={currentModule.title}
                  currentLesson={currentModule.currentLesson || 1}
                  totalLessons={currentModule.lessons}
                  duration={currentModule.duration}
                  progress={75} // This should be calculated based on current lesson
                />
              </Link>
            )}
          </View>

          {/* All Modules Section */}
          <View className="gap-2">
            <Text className="font-medium text-zinc-900 text-sm">
              Tous les modules
            </Text>
            <View className="gap-4">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  moduleNumber={module.moduleNumber}
                  title={module.title}
                  lessons={module.lessons}
                  status={
                    module.status as "completed" | "in_progress" | "upcoming"
                  }
                  currentLesson={module.currentLesson}
                />
              ))}
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
