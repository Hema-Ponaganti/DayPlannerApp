import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DayPlanScreen = ({ route }) => {
  let { tasks } = route.params;

  tasks = tasks.sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
  });
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Day Schedule</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.taskBox}>
            <Text style={styles.taskName}>
              <Ionicons name="ios-calendar" size={20} color="black" /> {task.taskName}
            </Text>
            <Text style={styles.time}>
              <Ionicons name="ios-time" size={20} color="black" /> {new Date(task.time).toLocaleTimeString()}
            </Text>
            <Text style={styles.priority}>
              <Ionicons name="ios-alert" size={20} color="black" /> Priority: {task.priority}
            </Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskContainer: {
    marginBottom: 20,
  },
  taskBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
  priority: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default DayPlanScreen;
