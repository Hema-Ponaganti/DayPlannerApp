import React from 'react';
import { View, Text } from 'react-native';

const TaskDialog = ({ tasks }) => {
  return (
    <View>
      <Text>Tasks for selected date:</Text>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task.taskName}</Text>
          <Text>{task.time}</Text>
          <Text>{task.priority}</Text>
        </View>
      ))}
    </View>
  );
};

export default TaskDialog;
