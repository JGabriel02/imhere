import { StyleSheet } from "react-native";


export const stylesForm = StyleSheet.create({
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 45,
        gap: 8
      },

      listEmptyText: {
        color: '#c77dff', 
        fontSize: 18,
        textAlign: 'center',
        marginTop: 32,
        padding: 16,
        backgroundColor: 'rgba(31, 37, 47, 0.5)', 
        borderRadius: 8,
        overflow: 'hidden',
        fontStyle: 'italic',
        textShadowColor: 'rgba(128, 0, 191, 0.3)', 
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
      },

      listEmptyContainer: {
        alignItems: 'center',
        padding: 24,
      },
      listEmptySubtext: {
        color: '#9648ba', 
        fontSize: 13,
        marginTop: 8,
        opacity: 0.6,
      },



})