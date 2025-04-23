import React from "react";
import { View } from "react-native";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => (
  <View className={`py-0.5 px-1 rounded ${className}`}>
    {children}
  </View>
); 