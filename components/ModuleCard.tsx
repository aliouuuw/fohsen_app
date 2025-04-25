import React from "react";
import { View } from "./View";
import { Text } from "./Text";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ModuleCardProps = {
  moduleNumber: string;
  title: string;
  lessons: number;
  status: "completed" | "in_progress" | "upcoming";
  currentLesson?: number;
};

export function ModuleCard({ moduleNumber, title, lessons, status, currentLesson }: ModuleCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "bg-green-600";
      case "in_progress":
        return "bg-blue-600";
      case "upcoming":
        return "bg-zinc-300";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Terminé";
      case "in_progress":
        return "En cours";
      case "upcoming":
        return "À venir";
    }
  };

  return (
    <View className="py-4 px-3 bg-white rounded-[5px] flex-row items-center gap-4 mb-3 shadow-sm shadow-zinc-300">
      <View className={`w-1 h-full rounded-r-md ${getStatusColor()}`} />
      <View className="flex-1 gap-2">
        <View className="flex-row justify-between items-center">
          <Text className="text-zinc-600 text-sm font-medium">{moduleNumber}</Text>
          <View className="w-7 h-7 items-center justify-center bg-gray-100 rounded-full">
            {status !== "upcoming" && (
              <View className={`w-5 h-5 rounded-full ${status === "completed" ? "bg-green-600" : "bg-blue-600"} items-center justify-center`}>
                {status === "completed" && <FontAwesome name="check" size={12} color="white" />}
                {status === "in_progress" && <FontAwesome name="play-circle" size={12} color="white" />}
              </View>
            )}
          </View>
        </View>
        <Text className="text-black text-base font-semibold leading-tight">{title}</Text>
        <View className="flex-row items-center gap-2 mt-1">
          <Text className={`text-sm ${status === "in_progress" ? "text-blue-600 font-medium" : "text-zinc-600 font-normal"}`}>
            {lessons} leçons
          </Text>
          <Text className="text-zinc-400">•</Text>
          <Text className={`text-sm ${status === "in_progress" ? "text-blue-600 font-medium" : "text-zinc-600 font-normal"}`}>
            {status === "in_progress" && currentLesson ? `${currentLesson}/${lessons}` : getStatusText()}
          </Text>
        </View>
      </View>
    </View>
  );
} 