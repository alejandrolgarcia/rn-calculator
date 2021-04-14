import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundApp: {
        flex: 1,
        backgroundColor: 'black',
    },

    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
    },

    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 20

    },

    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10
    },

    
});