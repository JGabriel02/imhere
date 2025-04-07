
import { stylesButton } from "@/styles/stylesButton";
import { stylesForm } from "@/styles/stylesForm";
import { stylesHome } from "@/styles/stylesHome";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Button(){
    function handleParticipantAdd(){
        console.log("add")
      }

    return(
        <View style={stylesForm.form}>
        <TextInput 
          placeholder="Nome do Participante"
          style={stylesHome.input}
        />

        <TouchableOpacity
          style={stylesButton.ButtonAdd}
          onPress={handleParticipantAdd}
          
          >
          <Text style={stylesButton.ButtonText}>
            +
          </Text>
        </TouchableOpacity>
        </View>
    )
}