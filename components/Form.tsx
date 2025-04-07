import { stylesButton } from "@/styles/stylesButton";
import { stylesForm } from "@/styles/stylesForm";
import { stylesHome } from "@/styles/stylesHome";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";

type Props = {
  onAddParticipant: (name: string) => void;
};

export default function Button({ onAddParticipant }: Props) {
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participantName.trim() === "") {
      Alert.alert("Nome inválido", "O nome do participante não pode estar vazio.");
      return;
    }

    onAddParticipant(participantName);
    setParticipantName(""); 
  }

  return (
    <View style={stylesForm.form}>
      <TextInput
        placeholder="Nome do Participante 😎"
        style={stylesHome.input}
        value={participantName}
        onChangeText={setParticipantName} 
      />

      <TouchableOpacity
        style={stylesButton.ButtonAdd}
        onPress={handleParticipantAdd}
      >
        <Text style={stylesButton.ButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}