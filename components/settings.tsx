import React, { useState } from 'react';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { SafeAreaView, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Progress } from '@/components/ui/Progress';
import { Card, CardContent } from '@/components/ui/Card';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [downloadOverWifi, setDownloadOverWifi] = useState(true);
  const [enableAnalytics, setEnableAnalytics] = useState(true);
  const [saveOffline, setSaveOffline] = useState(false);
  const [fontSize, setFontSize] = useState('medium');

  const appVersion = "1.0.0";

  const logout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Déconnecter", style: "destructive", onPress: () => console.log("Logged out") }
      ]
    );
  };

  const clearCache = () => {
    Alert.alert(
      "Vider le cache",
      "Cette action supprimera les données temporaires de l'application. Continuer?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "Vider", onPress: () => console.log("Cache cleared") }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1b1b1b]">
      {/* Header */}
      <View className="bg-[#1b1b1b] pb-4 relative">
        <View className="flex-row px-4 pb-4 mt-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-2">
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-medium text-center flex-1">
            Paramètres
          </Text>
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
        {/* App Settings */}
        <View className="p-4">
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Préférences d'Affichage
          </Text>
          
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-4">
            <CardContent className="p-3">
              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <Text className="text-[#1b1b1b] text-sm">Mode sombre</Text>
                <Switch
                  value={darkMode}
                  onValueChange={setDarkMode}
                  trackColor={{ false: '#d1d5db', true: '#006837' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <View className="py-2">
                <Text className="text-[#1b1b1b] text-sm mb-2">Taille de texte</Text>
                <View className="flex-row justify-between">
                  <TouchableOpacity 
                    onPress={() => setFontSize('small')}
                    className={`px-3 py-1.5 rounded-full ${fontSize === 'small' ? 'bg-[#006837]' : 'bg-gray-200'}`}
                  >
                    <Text className={`text-xs ${fontSize === 'small' ? 'text-white' : 'text-[#1b1b1b]'}`}>
                      Petit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => setFontSize('medium')}
                    className={`px-3 py-1.5 rounded-full ${fontSize === 'medium' ? 'bg-[#006837]' : 'bg-gray-200'}`}
                  >
                    <Text className={`text-xs ${fontSize === 'medium' ? 'text-white' : 'text-[#1b1b1b]'}`}>
                      Moyen
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => setFontSize('large')}
                    className={`px-3 py-1.5 rounded-full ${fontSize === 'large' ? 'bg-[#006837]' : 'bg-gray-200'}`}
                  >
                    <Text className={`text-xs ${fontSize === 'large' ? 'text-white' : 'text-[#1b1b1b]'}`}>
                      Grand
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </CardContent>
          </Card>
          
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Téléchargement et Stockage
          </Text>
          
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-4">
            <CardContent className="p-3">
              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <Text className="text-[#1b1b1b] text-sm">Télécharger uniquement en Wi-Fi</Text>
                <Switch
                  value={downloadOverWifi}
                  onValueChange={setDownloadOverWifi}
                  trackColor={{ false: '#d1d5db', true: '#006837' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <Text className="text-[#1b1b1b] text-sm">Sauvegarder les cours hors-ligne</Text>
                <Switch
                  value={saveOffline}
                  onValueChange={setSaveOffline}
                  trackColor={{ false: '#d1d5db', true: '#006837' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <TouchableOpacity 
                onPress={clearCache}
                className="py-2 flex-row items-center justify-between"
              >
                <Text className="text-[#1b1b1b] text-sm">Vider le cache</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
            </CardContent>
          </Card>
          
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Confidentialité
          </Text>
          
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-4">
            <CardContent className="p-3">
              <View className="flex-row items-center justify-between py-2 border-b border-gray-100">
                <Text className="text-[#1b1b1b] text-sm">Activer les analyses d'utilisation</Text>
                <Switch
                  value={enableAnalytics}
                  onValueChange={setEnableAnalytics}
                  trackColor={{ false: '#d1d5db', true: '#006837' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <TouchableOpacity 
                className="py-2 border-b border-gray-100 flex-row items-center justify-between"
                onPress={() => console.log("Show privacy policy")}
              >
                <Text className="text-[#1b1b1b] text-sm">Politique de confidentialité</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="py-2 flex-row items-center justify-between"
                onPress={() => console.log("Show terms")}
              >
                <Text className="text-[#1b1b1b] text-sm">Conditions d'utilisation</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
            </CardContent>
          </Card>
          
          <Text className="font-medium text-zinc-900 text-sm mb-3">
            Support
          </Text>
          
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-4">
            <CardContent className="p-3">
              <TouchableOpacity 
                className="py-2 border-b border-gray-100 flex-row items-center justify-between"
                onPress={() => console.log("Show help center")}
              >
                <Text className="text-[#1b1b1b] text-sm">Centre d'aide</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="py-2 border-b border-gray-100 flex-row items-center justify-between"
                onPress={() => console.log("Send feedback")}
              >
                <Text className="text-[#1b1b1b] text-sm">Envoyer un commentaire</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="py-2 flex-row items-center justify-between"
                onPress={() => console.log("Report an issue")}
              >
                <Text className="text-[#1b1b1b] text-sm">Signaler un problème</Text>
                <FontAwesome name="chevron-right" size={14} color="#8c8c8c" />
              </TouchableOpacity>
            </CardContent>
          </Card>
          
          <View className="items-center mb-2">
            <Text className="text-[#8c8c8c] text-xs">Version {appVersion}</Text>
          </View>
          
          <TouchableOpacity 
            onPress={logout}
            className="bg-white border border-red-500 rounded-[5px] py-2.5 mb-8"
          >
            <Text className="text-red-500 text-sm font-medium text-center">
              Se déconnecter
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 