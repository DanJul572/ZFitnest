import ActivityTabIcon from '@/components/Tabs/ActivityTabIcon';
import GalleryTabIcon from '@/components/Tabs/Gallery';
import HomeTabIcon from '@/components/Tabs/HomeTabIcon';
import ProfileTabIcon from '@/components/Tabs/ProfileTabIcon';
import SearchTabIcon from '@/components/Tabs/SearchTabIcon';
import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarButton: (props) => {
          const isSearch: boolean =
            props.accessibilityLargeContentTitle === 'search';

          if (isSearch) {
            return <View style={styles.iconButton}>{props.children}</View>;
          }

          return (
            <Pressable onPress={props.onPress} style={styles.iconButton}>
              {props.children}
            </Pressable>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <HomeTabIcon isActive={focused} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ focused }) => <ActivityTabIcon isActive={focused} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => <SearchTabIcon />,
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          tabBarIcon: ({ focused }) => <GalleryTabIcon isActive={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <ProfileTabIcon isActive={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingTop: 15,
  },
  iconButton: { alignItems: 'center' },
});
