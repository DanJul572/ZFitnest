import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';

const Banner = () => {
  return (
    <LinearGradient
      colors={LinearColors.BlueLinear}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text allowFontScaling={false} style={styles.title}>
          BMI (Body Mass Index)
        </Text>
        <Text allowFontScaling={false} style={styles.subtitle}>
          You have a normal weight
        </Text>
        <Pressable>
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={LinearColors.PurpleLinear}
            style={styles.button}
          >
            <Text allowFontScaling={false} style={styles.buttonText}>
              View More
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
      <Text allowFontScaling={false} style={styles.bmiValue}>
        20,1
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 170,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'medium',
  },
  bmiValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Banner;
