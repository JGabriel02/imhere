import { StyleSheet } from "react-native";


export const stylesParticipant = StyleSheet.create({
    container:{
        backgroundColor: '#c77dff',
        width:'100%',
        borderColor: "#9648ba",
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    name:{
        paddingHorizontal: 16,
        fontSize: 16,
        flex: 1,  
        color: 'black'
    },

    removeText: {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: [{ translateY: -12 }],
        fontSize: 16,
        color: "red",
        fontWeight: "bold",
    },
    
})