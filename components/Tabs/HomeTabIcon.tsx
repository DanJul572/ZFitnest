import HomeActiveIcon from '@/icons/HomeActiveIcon';
import HomeIcon from '@/icons/HomeIcon';
import { StyleSheet, View } from 'react-native';
import ActiveFlag from './ActiveFlag';

type PropsType = {
  isActive: boolean;
};

const HomeTabIcon = ({ isActive }: PropsType) => {
  return (
    <View style={styles.container}>
      {isActive ? <HomeActiveIcon /> : <HomeIcon />}
      <ActiveFlag isActive={isActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default HomeTabIcon;
