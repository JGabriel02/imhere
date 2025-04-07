import { Text, View, StatusBar, FlatList, Alert } from "react-native";
import { stylesGlobal } from "../styles/styles";
import { stylesHome } from "../styles/stylesHome";
import { stylesForm } from "../styles/stylesForm";
import Button from "@/components/Form";
import { Participant,  } from "@/components/Participant";
import React from "react";



export default function HomeScreen() {
  const [participants, setParticipants] = React.useState([
    "João", "Ana", "Gabriel", "Vitor", "Dias", "Gordão", "Lodi", "Felipe", "Dudu", "Luam", "Elias"
  ]);

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevParticipants) =>
            prevParticipants.filter((participant) => participant !== name)
          );
        },
      },
    ]);
  }

  return (
    <>
      <StatusBar backgroundColor="#1f252f" />
      <View style={stylesGlobal.container}>
        <Text style={stylesHome.eventName}>Niver do JG 🎉</Text>
        <Text style={stylesHome.eventDate}>Quarta, 14 de Maio de 2025</Text>
        <Button />

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