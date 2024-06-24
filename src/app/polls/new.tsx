import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const createPoll = () => {
    // Create a new poll
    console.log({ question, options });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Create Poll' }} />
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        placeholder="Type your question here"
        style={styles.input}
      />
      <Text style={styles.label}>Options</Text>
      {options.map((option, index) => (
        <View style={{ justifyContent: 'center' }}>
          <TextInput
            key={index}
            value={option}
            onChangeText={(text) => {
              const updated = [...options];
              updated[options.indexOf(option)] = text;
              setOptions(updated);
            }}
            placeholder={`Option ${index + 1}`}
            style={styles.input}
          />
          <Feather
            name="x"
            size={18}
            color="gray"
            onPress={() => {
              const updated = [...options];
              updated.splice(index, 1);
              setOptions(updated);
            }}
            style={{ position: 'absolute', right: 10 }}
          />
        </View>
      ))}
      <Button title="Add Option" onPress={() => setOptions([...options, ''])} />

      <Button title="Create Poll" onPress={createPoll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 5,
  },
  label: {
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
