/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Todo = (task: {
  text:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View style={styles.todoCard}>
      <View style={styles.icon} />
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity style={styles.appButtonContainer} />
    </View>
  );
};

const AddTodo = () => {
  return (
    <View style={styles.addTodo}>
      <Text style={styles.addTask}> Add a task </Text>
      <Text style={styles.plusButton}>+</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.textView}>Today's Tasks</Text>
      <View style={styles.listView}>
        <Todo text={'Finish release tasks'} />
        <Todo text={'Complete assignments'} />
      </View>
      <AddTodo />
    </SafeAreaView>
  );
};

export default App;
