import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Calendar as CalendarComponent } from 'react-native-calendars';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    onDateSelect(date.dateString);
  };

  return (
    <View>
      <CalendarComponent
        onDayPress={handleDateSelect}
        markedDates={{ [selectedDate]: { selected: true } }}
      />
    </View>
  );
};

export default Calendar;
