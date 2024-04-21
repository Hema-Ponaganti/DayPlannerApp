import React from 'react';
import { View, Text } from 'react-native';

const TaskDialog = ({ tasks }) => {
  return (
    <View>
      <Text>Tasks for selected date:</Text>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>Task Name: {task.taskName}</Text>
          <Text>Time: {task.time}</Text>
          <Text>Priority: {task.priority}</Text>
        </View>
      ))}
    </View>
  );
};

export default TaskDialog;
