// TaskForm.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TaskForm = ({ selectedDate, onSave, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');

  const handleSave = () => {
    onSave({ taskName, time, priority });
    setTaskName('');
    setTime('');
    setPriority('');
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} color="blue" />
        <Button title="Cancel" onPress={onClose} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TaskForm;
