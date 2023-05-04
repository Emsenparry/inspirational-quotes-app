import { StyleSheet, Text, View } from 'react-native';
import { ApiData } from './script';

export default function App() {

  return (
    <View>
      <ApiData />
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
