import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => (
  <ScrollView style={styles.listContainer}>
    {tasks.map((task, index) => (
      <Text key={index} style={styles.task}>{task}</Text>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  listContainer: {
    // Add styles for your list container if needed
  },
  task: {
    fontSize: 18,
    marginVertical: 10,
    // Add more styles for your task items if needed
  },
});

export default ToDoList;
