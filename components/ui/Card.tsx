import React from "react";
import { View } from "react-native";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <View className={`bg-white rounded-[5px] shadow ${className}`}>
    {children}
  </View>
);

export const CardContent = ({ children, className }: CardProps) => (
  <View className={`p-3.5 ${className}`}>{children}</View>
); 