import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const poll = {
  question: 'Example poll question',
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export default function PollDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [selected, setSelected] = useState('Option 1');

  return (
    <>
      <Stack.Screen options={{ title: `Poll ${id}` }} />
      <View style={styles.container}>
        <Text style={styles.question}>{poll.question}</Text>
        <View style={{ gap: 5 }}>
          {poll.options.map((option, index) => (
            <Pressable
              onPress={() => setSelected(option)}
              key={index}
              style={styles.optionContainer}
            >
              <Feather
                name={option === selected ? `check-circle` : 'circle'}
                size={18}
                color={option === selected ? 'green' : 'gray'}
              />
              <Text>{option}</Text>
            </Pressable>
          ))}
        </View>
        <Button title="Vote" onPress={() => alert(`Selected: ${selected}`)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
  },
  optionContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
