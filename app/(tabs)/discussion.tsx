import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { SafeAreaView } from 'react-native';

export default function DiscussionScreen() {
  return (
    <SafeAreaView className="bg-[#1b1b1b]">
      <View className="flex items-center justify-center bg-white h-full">
        <Text className="text-xl font-bold">Discussion</Text>
      </View>
    </SafeAreaView>
  );
}
