import React from 'react';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Progress } from '@/components/ui/Progress';
import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import { Card, CardContent } from '@/components/ui/Card';

export default function ProfileScreen() {
  const stats = [
    { label: 'Modules Complétés', value: '4/7', icon: 'book' },
    { label: 'Points Gagnés', value: '275', icon: 'star' },
    { label: 'Jours Consécutifs', value: '7', icon: 'calendar' },
  ];

  const achievements = [
    { 
      title: 'Premier Pas', 
      description: 'Compléter votre premier module', 
      progress: 100,
      completed: true,
      icon: '🏆'
    },
    { 
      title: 'Expert en PCIME', 
      description: 'Terminer le module PCIME avec un score parfait', 
      progress: 75,
      completed: false,
      icon: '🌟'
    },
    { 
      title: 'Conseiller Communautaire', 
      description: 'Participer à 10 discussions sur le forum', 
      progress: 30,
      completed: false,
      icon: '👥'
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      {/* Header */}
      <View className="bg-[#1b1b1b] pb-4 relative">
        <View className="flex-row px-4 pb-4 mt-4">
          <Text className="text-white text-xl font-medium text-center flex-1">
            Profil
          </Text>
          <TouchableOpacity className="self-end">
            <FontAwesome name="cog" size={24} color="white" />
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

      <ScrollView className="flex-1 bg-[#f9f9f9]">
        {/* Profile Card */}
        <View className="px-4 pt-4">
          <Card className="bg-white rounded-[10px] shadow-sm shadow-zinc-300 border-none">
            <CardContent className="p-0">
              {/* Cover Image */}
              <View className="w-full h-24 bg-[#043b14] rounded-t-[10px]" />
              
              {/* Profile Info */}
              <View className="px-4 pb-4 -mt-10">
                <View className="flex-row">
                  <Avatar className="w-[80px] h-[80px] border-4 border-white">
                    <AvatarImage
                      source={require("@/assets/images/profile-picture.png")}
                      alt="Profile"
                    />
                  </Avatar>
                  <View className="flex-1 pt-10 pl-4">
                    <Text className="text-[#1b1b1b] text-lg font-semibold">
                      Fatima Ndiaye
                    </Text>
                    <Text className="text-[#5d5d5d] text-xs">
                      Agent de Santé Communautaire
                    </Text>
                  </View>
                </View>
                
                <View className="flex-row items-center mt-3">
                  <FontAwesome name="map-marker" size={14} color="#666" />
                  <Text className="text-[#666] text-xs ml-1">
                    Dakar, Sénégal
                  </Text>
                </View>
                
                <Text className="text-[#1b1b1b] text-xs mt-3">
                  Agent de santé communautaire depuis 3 ans, passionnée par l'amélioration de la santé dans ma communauté.
                </Text>
                
                <TouchableOpacity className="bg-[#1b1b1b] rounded-[5px] py-2 mt-4">
                  <Text className="text-white text-xs font-medium text-center">
                    Modifier le profil
                  </Text>
                </TouchableOpacity>
              </View>
            </CardContent>
          </Card>
        </View>
        
        {/* Statistics */}
        <View className="p-4">
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Statistiques
          </Text>
          
          <View className="flex-row justify-between gap-2">
            {stats.map((stat, index) => (
              <Card key={index} className="flex-1 bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none">
                <CardContent className="p-3 items-center">
                  <View className="w-10 h-10 bg-[#f2f2f2] rounded-full items-center justify-center mb-2">
                    <FontAwesome name={stat.icon as any} size={18} color="#1b1b1b" />
                  </View>
                  <Text className="text-[#1b1b1b] text-base font-semibold">
                    {stat.value}
                  </Text>
                  <Text className="text-[#5d5d5d] text-[10px] text-center">
                    {stat.label}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>
        
        {/* Achievements */}
        <View className="p-4">
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Réalisations
          </Text>
          
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-3"
            >
              <CardContent className="p-3">
                <View className="flex-row">
                  <View className="w-12 h-12 bg-[#f2f2f2] rounded-full items-center justify-center mr-3">
                    <Text className="text-xl">{achievement.icon}</Text>
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between">
                      <Text className="text-[#1b1b1b] text-sm font-semibold">
                        {achievement.title}
                      </Text>
                      {achievement.completed && (
                        <FontAwesome name="check-circle" size={16} color="#043b14" />
                      )}
                    </View>
                    <Text className="text-[#5d5d5d] text-xs mb-2">
                      {achievement.description}
                    </Text>
                    <Progress
                      value={achievement.progress}
                      className="h-2 w-full bg-slate-200"
                      indicatorClassName="bg-green-600"
                    />
                  </View>
                </View>
              </CardContent>
            </Card>
          ))}
        </View>
        
        {/* Certificates */}
        <View className="p-4 mb-8">
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Certificats
          </Text>
          
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none">
            <CardContent className="p-3">
              <View className="flex-row items-center">
                <FontAwesome name="certificate" size={20} color="#043b14" style={{marginRight: 12}} />
                <View className="flex-1">
                  <Text className="text-[#1b1b1b] text-sm font-semibold">
                    Agent de Santé Communautaire
                  </Text>
                  <Text className="text-[#5d5d5d] text-xs">
                    Délivré le 15 Mars 2023
                  </Text>
                </View>
                <TouchableOpacity>
                  <FontAwesome name="download" size={18} color="#1b1b1b" />
                </TouchableOpacity>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 