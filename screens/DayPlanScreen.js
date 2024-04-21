import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DayPlanScreen = ({ route }) => {
  let { tasks } = route.params;

  tasks = tasks.sort((a, b) => {
    // Assuming each task has a `time` property representing the task time
    return new Date(a.time) - new Date(b.time);
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks for selected date:</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.taskBox}>
            <Text style={styles.taskName}>Task Name: {task.taskName}</Text>
            <Text style={styles.time}>Time: {new Date(task.time).toLocaleTimeString()}</Text>
            <Text style={styles.priority}>Priority: {task.priority}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskContainer: {
    marginBottom: 20,
  },
  taskBox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
  },
  priority: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default DayPlanScreen;
