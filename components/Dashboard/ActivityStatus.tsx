import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import ExampleChart from './components/ExampleChart';

const ActivityStatus = () => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.title}>
        Activity Status
      </Text>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={LinearColors.BlueBackgroundLinear}
        style={styles.gradient}
      >
        <View style={styles.heartRateContainer}>
          <Text allowFontScaling={false} style={styles.label}>
            Heart Rate
          </Text>
          <Text allowFontScaling={false} style={styles.value}>
            78 Bpm
          </Text>
        </View>
        <ExampleChart />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.black,
  },
  gradient: {
    borderRadius: 20,
    marginTop: 10,
    paddingBottom: 50,
    justifyContent: 'flex-end',
  },
  heartRateContainer: {
    padding: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'medium',
    color: colors.black,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: colors.blue,
  },
});

export default ActivityStatus;
