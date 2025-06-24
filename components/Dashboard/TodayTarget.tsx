import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';

const TodayTarget = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={LinearColors.BlueBackgroundLinear}
      style={styles.container}
    >
      <Text style={styles.label}>Target Today</Text>
      <Pressable>
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={LinearColors.BlueLinear}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Check</Text>
        </LinearGradient>
      </Pressable>
    </LinearGradient>
  );
};

export default TodayTarget;

const styles = StyleSheet.create({
  container: {
    height: 57,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'medium',
    fontSize: 14,
    color: colors.black,
  },
  button: {
    borderRadius: 50,
    height: 28,
    width: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
  },
});
