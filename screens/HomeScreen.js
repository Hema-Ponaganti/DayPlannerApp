import React, { useState } from 'react';
import { View, Button, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import Calendar from '../components/Calender';
import TaskForm from '../components/TaskForm';
import TaskDialog from '../components/TaskDialog';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    setShowTaskForm(true);
  };

  const handleTaskFormClose = () => {
    setShowTaskForm(false);
  };

  const handleSaveTask = (taskData) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      if (!updatedTasks[selectedDate]) {
        updatedTasks[selectedDate] = [];
      }
      updatedTasks[selectedDate].push(taskData);
      return updatedTasks;
    });
  };

  const handleShowDayPlan = () => {
    // Navigate to the DayPlan screen
    navigation.navigate('DayPlan', { tasks: tasks[selectedDate] || [] });
  };

  return (
    <View style={{ flex: 1 }}>
      <Calendar onDateSelect={handleDateSelect} />
      <Button title="Add Task" onPress={handleAddTask} />
      {showTaskForm && (
        <TaskForm
          selectedDate={selectedDate}
          onSave={handleSaveTask}
          onClose={handleTaskFormClose}
        />
      )}
      <ScrollView>
        <TaskDialog tasks={tasks[selectedDate] || []} />
      </ScrollView>
      <TouchableOpacity onPress={handleShowDayPlan} style={styles.showDayPlanButton}>
        <Text style={styles.showDayPlanButtonText}>Show Day Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showDayPlanButton: {
    backgroundColor: 'deepskyblue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  showDayPlanButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
