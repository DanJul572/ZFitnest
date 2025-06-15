import Dashboard from '@/components/Dashboard';
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
    flex: 1,
    paddingTop: 20,
  },
});
