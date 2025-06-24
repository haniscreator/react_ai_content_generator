import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, Alert } from "react-native";
import * as Clipboard from "expo-clipboard"; 

export default function ContentGeneratorScreen() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      Alert.alert("Please enter a topic or keyword.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "OpenAI backend error");
      }

      setResult(data.result);
    } catch (e) {
      console.error("❌ API Error:", e);
      Alert.alert("Error", "Failed to fetch content from AI backend.");
    }
    setLoading(false);
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(result);
    Alert.alert("Copied", "Content copied to clipboard!");
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <TextInput
        placeholder="Enter topic (e.g., Resume Bullet, Blog Title...)"
        onChangeText={setPrompt}
        value={prompt}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button
        title={loading ? "Generating..." : "Generate"}
        onPress={handleGenerate}
        disabled={loading}
      />
      <Text style={{ marginVertical: 20 }}>{result}</Text>
      {result !== "" && <Button title="Copy to Clipboard" onPress={handleCopy} />}
    </ScrollView>
  );
}
