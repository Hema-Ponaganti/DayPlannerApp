import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskForm = ({ selectedDate, onSave, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('');

  const handleSaveTask = () => {
    const taskData = { taskName, time, priority, selectedDate };
    onSave(taskData);
    onClose();
  };

  return (
    <View>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        placeholder="Priority"
        value={priority}
        onChangeText={setPriority}
      />
      <Button title="Save" onPress={handleSaveTask} />
    </View>
  );
};

export default TaskForm;
