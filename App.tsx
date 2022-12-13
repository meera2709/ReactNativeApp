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

// const Todo = (task: {
//   text:
//     | string
//     | number
//     | boolean
//     | React.ReactElement<any, string | React.JSXElementConstructor<any>>
//     | React.ReactFragment
//     | React.ReactPortal
//     | null
//     | undefined;
// }) => {
//   return (
//     <View style={styles.todoCard}>
//       <View style={styles.icon} />
//       <Text style={styles.taskText}>{task.text}</Text>
//       <TouchableOpacity style={styles.appButtonContainer} />
//     </View>
//   );
// };

import {AddTodo} from './AddTodo';

const DATA = [
  {
    id: '1',
    title: 'Assignment',
  },
  {
    id: '2',
    title: 'Project',
  },
  {
    id: '3',
    title: 'Automation',
  },
];

const TodoItem = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const renderItem = ({item}) => {
  return (
    <View style={styles.todoCard}>
      <View style={styles.icon} />
      <TodoItem title={item.title} />
      <TouchableOpacity style={styles.appButtonContainer} />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        renderItem={renderItem}
        data={DATA}
        ListHeaderComponent={() => {
          return <Text style={styles.textView}>Today's Tasks</Text>;
        }}
        ListFooterComponent={() => {
          return <AddTodo />;
        }}
      />
    </SafeAreaView>
  );
};

/* <Text style={styles.textView}>Today's Tasks</Text>
       <View style={styles.listView}>
         <Todo text={'Finish release tasks'} />
         <Todo text={'Complete assignments'} />
       </View>
       <AddTodo /> */

export default App;
