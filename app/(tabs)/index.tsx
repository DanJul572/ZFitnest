import Dashboard from '@/components/Dashboard';
import colors from '@/enums/color';
import { SafeAreaView, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 37,
  },
});
