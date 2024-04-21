import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const TaskForm = ({ selectedDate, onSave, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState(''); // State to hold selected priority

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
      <Text style={styles.subHeading}>Priority</Text>
      <View style={styles.radioContainer}>
        <RadioButton.Group onValueChange={(value) => setPriority(value)} value={priority}>
          <View style={styles.radioButton}>
            <RadioButton.Item
              label="High"
              value="High"
              status={priority === 'High' ? 'checked' : 'unchecked'}
              onPress={() => setPriority('High')}
              color="#007AFF"
            />
            <RadioButton.Item
              label="Medium"
              value="Medium"
              status={priority === 'Medium' ? 'checked' : 'unchecked'}
              onPress={() => setPriority('Medium')}
              color="#007AFF"
            />
            <RadioButton.Item
              label="Low"
              value="Low"
              status={priority === 'Low' ? 'checked' : 'unchecked'}
              onPress={() => setPriority('Low')}
              color="#007AFF"
            />
          </View>
        </RadioButton.Group>
      </View>
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
  subHeading: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  radioContainer: {
    marginBottom: 10,
    marginLeft: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TaskForm;