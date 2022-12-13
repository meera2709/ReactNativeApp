import React from 'react';
import {styles} from './App.styles';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  FlatList,
  TextInput,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const AddTodo = () => {
  return (
    <View style={styles.addTodo}>
      <Text style={styles.addTask}> Add a task </Text>
      <Text style={styles.plusButton}>+</Text>
    </View>
  );
};
