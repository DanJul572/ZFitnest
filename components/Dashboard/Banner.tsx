import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BannerImage from './images/BannerImage';

const Banner = () => {
  return (
    <View style={styles.container}>
      <BannerImage />
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text allowFontScaling={false} style={styles.title}>
            BMI (Body Mass Index)
          </Text>
          <Text allowFontScaling={false} style={styles.subtitle}>
            You have a normal weight
          </Text>
          <Pressable>
            <LinearGradient
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 150,
    top: 10,
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '500',
  },
  bmiValue: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.white,
    marginRight: 32,
    marginTop: 45,
  },
});

export default Banner;
