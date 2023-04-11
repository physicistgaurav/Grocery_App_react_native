import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [previousWord, setPreviousWord] = useState("");
  const [score, setScore] = useState(0);

  const handleWordSubmit = async () => {
    if (previousWord === "") {
      // The first player can enter any word
      setPreviousWord(currentWord);
    } else {
      const isValidWord = await checkWord(currentWord);
      if (isValidWord) {
        if (
          currentWord
            .toLowerCase()
            .startsWith(previousWord.toLowerCase().slice(-1))
        ) {
          // The current word is associated with the previous word
          setPreviousWord(currentWord);
          setScore(score + 1);
        } else {
          // The current word is not associated with the previous word
          alert("Wrong word! Try again.");
        }
      } else {
        alert("Invalid word! Try again.");
      }
    }

    setCurrentWord("");
  };

  const checkWord = async (word) => {
    const response = await fetch(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      {
        headers: {
          "X-RapidAPI-Key": "YOUR_API_KEY_HERE", // Replace with your Words API key
        },
      }
    );
    const data = await response.json();
    return response.ok && data.success && data.frequency !== null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Association Game</Text>
      <Text style={styles.subtitle}>
        Enter a word that's associated with the previous word:
      </Text>
      <TextInput
        style={styles.input}
        value={currentWord}
        onChangeText={setCurrentWord}
        onSubmitEditing={handleWordSubmit}
        placeholder="Enter a word"
        autoFocus
      />
      <TouchableOpacity style={styles.button} onPress={handleWordSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
