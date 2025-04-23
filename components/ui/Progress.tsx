import React from "react";
import { View } from "react-native";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export const Progress = ({
  value,
  className,
  indicatorClassName,
}: ProgressProps) => (
  <View
    className={`w-full h-2.5 bg-gray-200 overflow-hidden ${className}`}
  >
    <View
      className={`h-full bg-green-600 rounded-r-md ${indicatorClassName}`}
      style={{ width: `${value}%` }}
    />
  </View>
); 