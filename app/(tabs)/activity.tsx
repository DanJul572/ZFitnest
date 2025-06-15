import { StyleSheet, Text, View } from 'react-native';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false}>Activity</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
