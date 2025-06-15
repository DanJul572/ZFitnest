import LinearColors from '@/enums/linearColors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

type PropsType = {
  isActive: boolean;
};

const ActiveFlag = ({ isActive }: PropsType) => {
  if (!isActive) {
    return <></>;
  }
  return (
    <LinearGradient colors={LinearColors.PurpleLinear} style={styles.dot} />
  );
};

export default ActiveFlag;

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    top: 23,
    borderRadius: 2.25,
    width: 4.5,
    height: 4.5,
  },
});
