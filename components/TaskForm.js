import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskForm = ({ selectedDate, onSave, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState(new Date());
  const [priority, setPriority] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSave = () => {
    onSave({ taskName, time, priority });
    setTaskName('');
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
      <Text style={styles.subHeading}>Time</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePicker}>
        <Text style={styles.timePickerText}>{time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="clock"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              setTime(selectedTime);
            }
          }}
        />
      )}
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
        <TouchableOpacity onPress={handleSave} style={[styles.button, { backgroundColor: 'blue' }]}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timePicker: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  timePickerText: {
    color: 'black',
    fontSize: 16,
  },
});

export default TaskForm;
