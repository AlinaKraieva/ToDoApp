import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const ToDoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title='goBack' onPress={goBack} />
    </View>
  );
}

const styles = StyleSheet.create({

});
