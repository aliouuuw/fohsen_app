import React, { useState } from 'react';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { SafeAreaView, TouchableOpacity, FlatList, Switch } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Progress } from '@/components/ui/Progress';
import { Card, CardContent } from '@/components/ui/Card';
import { router } from 'expo-router';

export default function NotificationsScreen() {
  const [allNotificationsEnabled, setAllNotificationsEnabled] = useState(true);

  const notifications = [
    {
      id: 1,
      title: 'Nouveau module disponible',
      message: 'Le module sur la nutrition des enfants est maintenant disponible.',
      time: 'Aujourd\'hui, 10:30',
      read: false,
      type: 'module'
    },
    {
      id: 2,
      title: 'Rappel de cours',
      message: 'N\'oubliez pas de terminer votre cours sur la PCIME avant demain.',
      time: 'Hier, 15:45',
      read: true,
      type: 'reminder'
    },
    {
      id: 3,
      title: 'Réponse dans le forum',
      message: 'Aminata Sow a répondu à votre question dans le forum.',
      time: 'Il y a 2 jours',
      read: true,
      type: 'forum'
    },
    {
      id: 4,
      title: 'Félicitations!',
      message: 'Vous avez complété le module sur la grossesse. Continuez comme ça!',
      time: 'Il y a 5 jours',
      read: true,
      type: 'achievement'
    },
  ];

  const [notificationSettings, setNotificationSettings] = useState([
    { id: 'modules', title: 'Nouveaux modules', enabled: true },
    { id: 'reminders', title: 'Rappels de cours', enabled: true },
    { id: 'forum', title: 'Activités du forum', enabled: true },
    { id: 'achievements', title: 'Réalisations et badges', enabled: true },
  ]);

  const toggleNotificationSetting = (id: string) => {
    setNotificationSettings(prevSettings => 
      prevSettings.map(setting => 
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
    
    // Check if all settings are enabled or not
    const updatedSettings = notificationSettings.map(setting => 
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    );
    
    const allEnabled = updatedSettings.every(setting => setting.enabled);
    setAllNotificationsEnabled(allEnabled);
  };

  const toggleAllNotifications = () => {
    const newValue = !allNotificationsEnabled;
    setAllNotificationsEnabled(newValue);
    setNotificationSettings(prevSettings => 
      prevSettings.map(setting => ({ ...setting, enabled: newValue }))
    );
  };

  const getIconForType = (type: string) => {
    switch(type) {
      case 'module': return 'book';
      case 'reminder': return 'clock-o';
      case 'forum': return 'comment';
      case 'achievement': return 'trophy';
      default: return 'bell';
    }
  };

  const getColorForType = (type: string) => {
    switch(type) {
      case 'module': return '#006837'; // Green
      case 'reminder': return '#FFA500'; // Orange
      case 'forum': return '#1E90FF'; // Blue
      case 'achievement': return '#FFD700'; // Gold
      default: return '#1b1b1b'; // Black
    }
  };

  const markAllAsRead = () => {
    // Implement marking all notifications as read
    // This would involve updating the state and potentially making an API call
    console.log('Mark all as read');
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
            Notifications
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

      <View className="flex-1 bg-[#f9f9f9]">
        {/* Settings section */}
        <View className="p-4">
          <Card className="bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-4">
            <CardContent className="p-3">
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-[#1b1b1b] text-sm font-semibold">
                  Paramètres de notifications
                </Text>
                <Switch
                  value={allNotificationsEnabled}
                  onValueChange={toggleAllNotifications}
                  trackColor={{ false: '#d1d5db', true: '#006837' }}
                  thumbColor="#ffffff"
                />
              </View>
              
              <View className="pt-2 border-t border-gray-200">
                {notificationSettings.map((setting) => (
                  <View 
                    key={setting.id} 
                    className="flex-row items-center justify-between py-2"
                  >
                    <Text className="text-[#1b1b1b] text-xs">
                      {setting.title}
                    </Text>
                    <Switch
                      value={setting.enabled}
                      onValueChange={() => toggleNotificationSetting(setting.id)}
                      trackColor={{ false: '#d1d5db', true: '#006837' }}
                      thumbColor="#ffffff"
                      disabled={!allNotificationsEnabled}
                    />
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Notifications list */}
        <View className="px-4 flex-row justify-between items-center mb-2">
          <Text className="font-medium text-zinc-900 text-sm">
            Récentes
          </Text>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text className="text-[#006837] text-xs font-medium">
              Tout marquer comme lu
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <Card
              className={`bg-white rounded-[5px] shadow-sm shadow-zinc-300 border-none mb-3 ${!item.read ? 'border-l-4 border-l-[#006837]' : ''}`}
            >
              <CardContent className="p-3">
                <View className="flex-row">
                  <View 
                    style={{ backgroundColor: `${getColorForType(item.type)}20` }}
                    className="w-10 h-10 rounded-full items-center justify-center mr-3"
                  >
                    <FontAwesome 
                      name={getIconForType(item.type)} 
                      size={18} 
                      color={getColorForType(item.type)} 
                    />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                      <Text className="text-[#1b1b1b] text-sm font-semibold flex-1 pr-2">
                        {item.title}
                      </Text>
                      {!item.read && (
                        <View className="w-2 h-2 rounded-full bg-[#006837]" />
                      )}
                    </View>
                    <Text className="text-[#5d5d5d] text-xs my-1">
                      {item.message}
                    </Text>
                    <Text className="text-[#8c8c8c] text-[10px]">
                      {item.time}
                    </Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
} 