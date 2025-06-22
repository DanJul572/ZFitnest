import colors from '@/enums/color';
import NotificationIcon from '@/icons/NotificationIcon';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <View>
        <Text allowFontScaling={false} style={styles.subtitle}>
          Welcome Back,
        </Text>
        <Text allowFontScaling={false} style={styles.title}>
          Stefani Wong
        </Text>
      </View>
      <Pressable>
        <View style={styles.iconContainer}>
          <NotificationIcon />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
    color: colors.grey2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  iconContainer: {
    backgroundColor: colors.borderColor,
    padding: 15,
    borderRadius: 10,
  },
});
