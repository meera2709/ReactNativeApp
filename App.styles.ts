// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      flex: 1,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    icon: {
      backgroundColor: 'rgba(85, 188, 246, 0.4)',
      height: 24,
      width: 24,
      borderRadius: 5,
    },
    todoCard: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      paddingHorizontal: 20,
      marginTop: 20,
      paddingBottom: 20,
      paddingTop: 20,
    },
    appButtonContainer: {
      backgroundColor: 'white',
      borderRadius: 5,
      width: 12,
      height: 20,
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 12,
      marginLeft: 10,
    },
    listView: {
      padding: 20,
    },
  
    textView: {
      marginLeft: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
  
    taskText: {
      marginLeft: 20,
      marginRight: 50,
    },
  
    addTodo: {
      flexDirection: 'row',
      padding: 20,
    },
  
    addTask: {
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      width: 200,
    },
  
    plusButton: {
    borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginLeft: 100,
    },
  });