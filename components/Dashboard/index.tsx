import { View } from 'react-native';
import ActivityStatus from './ActivityStatus';
import Banner from './Banner';
import Notification from './Notification';
import TodayTarget from './TodayTarget';

const Dashboard = () => {
  return (
    <View>
      <Notification />
      <Banner />
      <TodayTarget />
      <ActivityStatus />
    </View>
  );
};

export default Dashboard;
