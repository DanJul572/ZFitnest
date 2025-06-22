import colors from '@/enums/color';
import LinearColors from '@/enums/linearColors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 3));
const labels = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

const ExampleChart = () => {
  return (
    <View>
      <LineChart
        width={250}
        height={65}
        bezier
        withVerticalLabels={false}
        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        data={{
          labels,
          datasets: [{ data }],
        }}
        chartConfig={{
          backgroundGradientToOpacity: 0,
          backgroundGradientFromOpacity: 0,
          fillShadowGradientToOpacity: 0,
          fillShadowGradientFromOpacity: 0.25,
          color: () => colors.blue,
        }}
        getDotColor={() => 'transparent'}
        style={styles.chart}
        renderDotContent={({ x, y, index }) => {
          const isLast = index === data.length - 1;
          if (!isLast) return false;

          return (
            <View key={index} style={[styles.dot, { top: y - 4, left: x - 4 }]}>
              <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={LinearColors.PurpleLinear}
                style={styles.tooltip}
              >
                <Text style={styles.tooltipText}>3min ago</Text>
                <View style={styles.tooltipArrow} />
              </LinearGradient>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    paddingRight: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#EEA4CE',
    backgroundColor: colors.white,
    position: 'absolute',
  },
  tooltip: {
    width: 73,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: -34.5,
    top: -50,
  },
  tooltipText: {
    textAlign: 'center',
    color: colors.white,
  },
  tooltipArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#DB98DF',
    position: 'absolute',
    top: 29,
  },
});

export default ExampleChart;
