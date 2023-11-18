import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
