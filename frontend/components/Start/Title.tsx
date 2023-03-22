import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


interface MyScore {
    score: number,
}

// const MyComponent: React.FC<IMyProps> = (props: IMyProps) => {
//     ...
// }



const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Rock</Text>
      <Text style={styles.title}>Paper</Text>
      <Text style={styles.title}>Scissors</Text>
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     borderStyle: 'solid',
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  title: {

  }
});




export default Title;
