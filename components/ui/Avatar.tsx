import React from "react";
import { View, Image, Text } from "react-native";

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

interface AvatarImageProps {
  source: any;
  alt: string;
  className?: string;
}

export const Avatar = ({ children, className }: AvatarProps) => (
  <View className={`rounded-full overflow-hidden ${className}`}>
    {children}
  </View>
);

export const AvatarImage = ({ source, alt, className }: AvatarImageProps) => (
  <Image
    source={source}
    className={`w-full h-full ${className}`}
    accessibilityLabel={alt}
  />
);

export const AvatarFallback = ({ children, className }: AvatarProps) => (
  <View
    className={`w-full h-full items-center justify-center bg-gray-200 ${className}`}
  >
    <Text className="text-gray-600 font-medium">{children}</Text>
  </View>
); 