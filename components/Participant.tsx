import { stylesButton } from "@/styles/stylesButton";
import { stylesParticipant } from "@/styles/stylesParticipant";
import { Text, TouchableOpacity, View } from "react-native";


type Props = {
    name: string;
    onRemove: () => void,
}

export function Participant( {name, onRemove }: Props ){
    function handleParticipantRemove(){
        console.log("Removed")
      }



    return(
        <View style={stylesParticipant.container}>
            <Text style={stylesParticipant.name}>
                {name}
            </Text>

        <TouchableOpacity
            style={stylesButton.ButtonRemove}
            onPress={onRemove} 
            >

            <Text style={stylesButton.ButtonText}>
                    -
            </Text>
        </TouchableOpacity>
        </View>
    )
}