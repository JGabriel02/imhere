// app/(tabs)/home/index.tsx (simplificado)
import { Text, View, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { stylesGlobal } from "../../styles/styles";
import { stylesHome } from "../../styles/stylesHome";
import Button from "@/components/ButtonForm";

export default function HomeScreen() {
  
  return (
    <>
      <StatusBar backgroundColor="#1f252f" />
      <View style={stylesGlobal.container}>
        <Text style={stylesHome.eventName}>Niver do JG 🎉</Text>
        <Text style={stylesHome.eventDate}>Quarta, 14 de Maio de 2025</Text>


        <Button/>      
      </View>
    </>
  )
}