import React, { useState } from 'react';
import { View, Button, ScrollView, Text } from 'react-native';
import Calendar from '../components/Calender';
import TaskForm from '../components/TaskForm';
import TaskDialog from '../components/TaskDialog';

const HomeScreen = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);

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
    setTasks([...tasks, taskData]);
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
        <TaskDialog tasks={tasks} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
