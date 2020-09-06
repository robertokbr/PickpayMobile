import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { AntDesign, Ionicons } from 'expo-vector-icons';
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import PayButton from '../components/PayButton/index';

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

interface RoutesProps {
  name: string;
}

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                focused={focused}
                onPress={() => navigation.navigate('Pay')}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={View}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={View}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={View}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
