import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Card, CardContent } from "./ui/Card";
import { usefulResources } from "../utils/mockData";

export const ResourcesSection = () => {
  return (
    <View>
      <Text className="font-medium text-sm text-[#1b1b1b] mb-3">
        Consultez les fiches utiles
      </Text>
      <View className="flex-col gap-4">
        {usefulResources.map((resource) => (
          <TouchableOpacity key={resource.id}>
            <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none">
              <CardContent className="px-3 py-4 flex-row justify-between items-center">
                <Text className="font-semibold italic text-xs text-[#1b1b1b] font-['Inter'] flex-1 mr-2">
                  {resource.title}
                </Text>
                <Image
                  className="w-[7px] h-[11px]"
                  alt="Vector"
                  source={require("../assets/images/vector.svg")}
                />
              </CardContent>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}; 