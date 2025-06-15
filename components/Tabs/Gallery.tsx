import CameraActiveIcon from '@/icons/CameraActiveIcon';
import CameraIcon from '@/icons/CameraIcon';
import { StyleSheet, View } from 'react-native';
import ActiveFlag from './ActiveFlag';

type PropsType = {
  isActive: boolean;
};

const GalleryTabIcon = ({ isActive }: PropsType) => {
  return (
    <View style={styles.container}>
      {isActive ? <CameraActiveIcon /> : <CameraIcon />}
      <ActiveFlag isActive={isActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default GalleryTabIcon;
