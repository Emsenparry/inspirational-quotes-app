import { StyleSheet, Text, View } from 'react-native';
import DailyQuoteCard from './quotes';

export default function App() {

  return (
    <View>
      <DailyQuoteCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
