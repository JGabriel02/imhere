import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text, View, StatusBar, FlatList, Alert } from "react-native";
import { stylesGlobal } from "../styles/styles";
import { stylesHome } from "../styles/stylesHome";
import { stylesForm } from "../styles/stylesForm";
import Button from "@/components/Form";
import { Participant } from "@/components/Participant";

export default function HomeScreen() {
  const [participants, setParticipants] = React.useState<string[]>([]);

  // Chave para armazenar os participantes no AsyncStorage
  const STORAGE_KEY = "@participants";

  
  useEffect(() => {
    async function loadParticipants() {
      try {
        const storedParticipants = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedParticipants) {
          setParticipants(JSON.parse(storedParticipants));
        }
      } catch (error) {
        console.error("Erro ao carregar participantes:", error);
      }
    }

    loadParticipants();
  }, []);

  // Salvar os participantes sempre que a lista for alterada
  useEffect(() => {
    async function saveParticipants() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
      } catch (error) {
        console.error("Erro ao salvar participantes:", error);
      }
    }

    saveParticipants();
  }, [participants]);

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      Alert.alert("Participante já existe", "Esse participante já foi adicionado.");
      return;
    }

    setParticipants((prevParticipants) => [...prevParticipants, name]);
  }

  function handleParticipantRemove(name: string) {
    setParticipants((prevParticipants) =>
        prevParticipants.filter((participant) => participant !== name)
    );
}

  return (
    <>
      <StatusBar backgroundColor="#1f252f" />
      <View style={stylesGlobal.container}>
        <Text style={stylesHome.eventName}>Niver do JG 🎉</Text>
        <Text style={stylesHome.eventDate}>Quarta, 14 de Maio de 2025</Text>
        <Button onAddParticipant={handleParticipantAdd} />

        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={stylesForm.listEmptyContainer}>
              <Text style={stylesForm.listEmptyText}>Lista Vazia 😪</Text>
              <Text style={stylesForm.listEmptySubtext}>
                Adicione participantes na sua lista de presença
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}