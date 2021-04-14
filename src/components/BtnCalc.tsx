import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: string;
    btnBig?: boolean;
    action: ( textNumber: string ) => void;
}

export const BtnCalc = ({ text, color = '#2D2D2D', btnBig = false, action }: Props ) => {
    return (
        <TouchableOpacity
            activeOpacity={ 0.6 }
            onPress={ () => action( text ) }
        >
            <View style={[
                styles.btn,
                { 
                    backgroundColor: color,
                    width: ( btnBig ) ? 200 : 80
                }
            ]}>
                <Text style={[
                    styles.btnText,
                    { color: ( color ==='#9B9B9B' ) ? 'black' : 'white' }
                ]}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 20
    },

    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});