import { stylesButton } from "@/styles/stylesButton";
import { stylesParticipant } from "@/styles/stylesParticipant";
import { Text, TouchableOpacity, View, Animated, Alert } from "react-native";
import { Directions, FlingGestureHandler, State, GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
    name: string;
    onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
    const swipe = new Animated.Value(0);

    const handleFling = (event: { nativeEvent: { state: number } }) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            Animated.timing(swipe, {
                toValue: 500,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                confirmRemoval(); 
            });
        }
    };

    const confirmRemoval = () => {
       
        Alert.alert(
            "Remover Participante",
            `Tem certeza que deseja remover ${name}?`,
            [
                { text: "Cancelar", style: "cancel", onPress: () => resetSwipe() },
                { text: "Sim", onPress: onRemove },
            ]
        );
    };

    const resetSwipe = () => {
        
        Animated.timing(swipe, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    return (
        <GestureHandlerRootView>
            <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={handleFling}
            >
                <Animated.View
                    style={[
                        stylesParticipant.container,
                        { transform: [{ translateX: swipe }] },
                    ]}
                >
                    <Text style={stylesParticipant.name}>{name}</Text>

                    <TouchableOpacity
                        style={stylesButton.ButtonRemove}
                        onPress={confirmRemoval} 
                    >
                        <Text style={stylesButton.ButtonText}>-</Text>
                    </TouchableOpacity>
                </Animated.View>
            </FlingGestureHandler>
        </GestureHandlerRootView>
    );
}