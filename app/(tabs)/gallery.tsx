import { StyleSheet, Text, View } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false}>Gallery</Text>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
