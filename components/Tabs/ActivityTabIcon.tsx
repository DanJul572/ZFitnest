import ActivityActiveIcon from '@/icons/ActivityActiveIcon';
import ActivityIcon from '@/icons/ActivityIcon';
import { StyleSheet, View } from 'react-native';
import ActiveFlag from './ActiveFlag';

type PropsType = {
  isActive: boolean;
};

const ActivityTabIcon = ({ isActive }: PropsType) => {
  return (
    <View style={styles.container}>
      {isActive ? <ActivityActiveIcon /> : <ActivityIcon />}
      <ActiveFlag isActive={isActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ActivityTabIcon;
