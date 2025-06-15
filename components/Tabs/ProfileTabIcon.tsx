import UserActiveIcon from '@/icons/UserActiveIcon';
import UserIcon from '@/icons/UserIcon';
import { StyleSheet, View } from 'react-native';
import ActiveFlag from './ActiveFlag';

type PropsType = {
  isActive: boolean;
};

const ProfileTabIcon = ({ isActive }: PropsType) => {
  return (
    <View style={styles.container}>
      {isActive ? <UserActiveIcon /> : <UserIcon />}
      <ActiveFlag isActive={isActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default ProfileTabIcon;
