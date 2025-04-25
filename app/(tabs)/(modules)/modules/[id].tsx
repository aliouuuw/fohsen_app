import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { Text } from "@/components/Text";
import { View } from "@/components/View";
import { useLocalSearchParams, router } from "expo-router";
import { Progress } from "@/components/ui/Progress";
import { modules } from "@/utils/mockData";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Card, CardContent } from "@/components/ui/Card";

export default function ModuleDetailsScreen() {
  const { id } = useLocalSearchParams();
  const moduleId = typeof id === "string" ? id : Array.isArray(id) ? id[0] : "";
  
  // Find the module with the matching ID
  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <SafeAreaView className="flex-1 bg-[#1b1b1b]">
        <View className="p-4">
          <Text className="text-white text-lg">Module not found</Text>
          <TouchableOpacity 
            onPress={() => router.back()}
            className="mt-4 bg-white py-2 px-4 rounded-md"
          >
            <Text className="text-[#1b1b1b] text-center">Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      {/* Header with back button and title */}
      <View className="bg-[#1b1b1b] pb-4 relative">
        <View className="flex-row px-4 pb-2 mt-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-medium text-center flex-1">
            {module.moduleNumber}
          </Text>
        </View>
        {/* Progress bar - matches the style in other screens */}
        <View className="w-full h-2.5 bg-slate-200 mt-2 absolute bottom-0 left-0">
          <Progress
            value={module.currentLesson ? (module.currentLesson / module.lessons) * 100 : 0}
            className="h-2.5 w-full bg-slate-200"
            indicatorClassName="bg-green-600"
          />
        </View>
      </View>

      <ScrollView className="flex-1 bg-[#f9f9f9]">
        <View className="p-4">
          {/* Lesson title - matches text style from other screens */}
          <Text className="font-medium text-zinc-900 text-base mb-4">
            Cours 3 : Prise en charge intégrée des maladies de l'enfant
          </Text>
          
          {/* Introduction content - matches text style from other components */}
          <Text className="text-black text-xs font-normal mb-6">
            La Prise en Charge Intégrée des Maladies de l'Enfant (PCIME) est une approche qui vise à améliorer la santé des enfants de moins de 5 ans. Dans ce module, nous explorerons les différentes stratégies pour identifier, évaluer et traiter les maladies infantiles courantes.
            {'\n\n'}
            À travers ce cours, vous découvrirez comment reconnaître les signes de danger, évaluer l'état nutritionnel et hydrique, et mettre en place des actions adaptées pour améliorer la santé des enfants dans votre communauté.
          </Text>
          
          {/* Objective box - Using Card component for consistency */}
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-6">
            <CardContent className="p-3.5">
              <Text className="text-zinc-900 text-sm font-semibold mb-2">
                📌 Objectif
              </Text>
              <Text className="text-black text-xs font-normal">
                Vous donner les connaissances et outils nécessaires pour identifier et prendre en charge efficacement les maladies courantes chez les enfants.
              </Text>
            </CardContent>
          </Card>
          
          {/* Video section - improved with actual image and play button overlay */}
          <View className="w-full h-48 relative mb-6 rounded-[5px] overflow-hidden">
            <Image
              source={require("@/assets/images/photo-module.png")}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <View className="w-12 h-12 rounded-full bg-white/30 items-center justify-center">
                <FontAwesome name="play" size={24} color="white" />
              </View>
            </View>
            <View className="absolute bottom-0 left-0 right-0 h-8 bg-black/60 flex-row items-center px-3">
              <Text className="text-white text-xs font-normal">Vidéo: Identification des signes de danger</Text>
            </View>
          </View>
          
          {/* Main content sections - Using Card for consistency */}
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-6">
            <CardContent className="p-3.5">
              <View className="gap-4">
                <View>
                  <Text className="text-black text-xs font-semibold mb-1">
                    Pourquoi la PCIME est-elle importante ?
                  </Text>
                  <Text className="text-black text-xs font-normal">
                    Dans beaucoup de villages, les enfants de moins de 5 ans sont particulièrement vulnérables aux maladies. La PCIME permet une approche systématique pour identifier et traiter ces problèmes de santé avant qu'ils ne deviennent graves. Il y a trois aspects principaux :
                    {'\n\n'}
                    • L'évaluation rapide des signes de danger
                    {'\n'}
                    • L'identification et la classification des maladies courantes
                    {'\n'}
                    • Le traitement adapté et l'éducation des parents
                  </Text>
                </View>
                
                <View>
                  <Text className="text-black text-xs font-semibold mb-1">
                    Quels sont les signes de danger ?
                  </Text>
                  <Text className="text-black text-xs font-normal">
                    • L'enfant ne peut pas boire ou téter
                    {'\n'}
                    • L'enfant vomit tout ce qu'il consomme
                    {'\n'}
                    • L'enfant a des convulsions
                    {'\n'}
                    • L'enfant est léthargique ou inconscient
                  </Text>
                </View>
                
                <View>
                  <Text className="text-black text-xs font-semibold mb-1">
                    Pourquoi est-ce important ?
                  </Text>
                  <Text className="text-black text-xs font-normal">
                    • La détection précoce sauve des vies
                    {'\n'}
                    • L'approche intégrée traite l'enfant dans sa globalité
                    {'\n'}
                    • Les parents apprennent à mieux prendre soin de leurs enfants
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
          
          {/* Activity section - Using Card for consistency */}
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-6">
            <CardContent className="p-3.5">
              <Text className="text-zinc-900 text-sm font-semibold mb-2">
                Activité
              </Text>
              <Text className="text-black text-xs font-normal mb-3">
                Mariam amène son fils de 2 ans qui a de la fièvre. Quels signes devez-vous rechercher en priorité ? Sélectionnez 3 réponses parmi les suivantes :
              </Text>
              <Text className="text-black text-xs font-normal mb-2">
                ✅ Cliquez sur 3 signes prioritaires :
              </Text>
              
              {/* Options list - style matches other UI elements */}
              <View className="gap-2 mb-4">
                <TouchableOpacity className="h-9 bg-white border border-neutral-300 rounded-[5px] px-4 justify-center">
                  <Text className="text-black text-xs font-normal">La couleur de la peau</Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-9 bg-white border border-neutral-300 rounded-[5px] px-4 justify-center">
                  <Text className="text-black text-xs font-normal">Capacité à boire ou téter</Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-9 bg-white border border-neutral-300 rounded-[5px] px-4 justify-center">
                  <Text className="text-black text-xs font-normal">S'il a pleuré aujourd'hui</Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-9 bg-white border border-neutral-300 rounded-[5px] px-4 justify-center">
                  <Text className="text-black text-xs font-normal">Présence de vomissements</Text>
                </TouchableOpacity>
                <TouchableOpacity className="h-9 bg-white border border-neutral-300 rounded-[5px] px-4 justify-center">
                  <Text className="text-black text-xs font-normal">S'il joue avec ses jouets</Text>
                </TouchableOpacity>
              </View>
              
              {/* Submit button - matches the styling of other buttons */}
              <TouchableOpacity className="h-9 bg-[#1b1b1b] rounded-[5px] justify-center">
                <Text className="text-white text-xs font-medium text-center">Valider</Text>
              </TouchableOpacity>
            </CardContent>
          </Card>
          
          {/* Conclusion - Using Card for consistency */}
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-6">
            <CardContent className="p-3.5">
              <Text className="text-black text-xs font-semibold mb-1">
                Conclusion
              </Text>
              <Text className="text-black text-xs font-normal">
                La PCIME est une stratégie efficace pour réduire la mortalité et améliorer la santé des enfants. En sachant reconnaître les signes de danger et en agissant rapidement, vous pouvez avoir un impact important sur la santé des enfants de votre communauté.
              </Text>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 