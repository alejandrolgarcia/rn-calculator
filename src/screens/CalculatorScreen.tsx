import React from 'react';
import { Text, View } from 'react-native';
import { BtnCalc } from '../components/BtnCalc';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

    const {
        clean,
        buildNumber,
        positiveNegative,
        btnDeleteLast,
        btnDiv,
        btnMult,
        btnRes,
        btnSum,
        calculate,
        number,
        previousNumber,
    } = useCalculator();

    return (
        <View style={ styles.calculatorContainer }>
            {
                ( previousNumber !== '0' ) && (
                    <Text style={ styles.smallResult }> { previousNumber }</Text>
                )
            }
            <Text 
                style={ styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit={ true }
            > { number }</Text>

            <View style={ styles.row }>
                <BtnCalc text="C" color="#9B9B9B" action={ clean } />
                <BtnCalc text="+/-" color="#9B9B9B" action={ positiveNegative } />
                <BtnCalc text="del" color="#9B9B9B" action={ btnDeleteLast } />
                <BtnCalc text="/" color="#FF9427" action={ btnDiv } />
            </View>
            
            <View style={ styles.row }>
                <BtnCalc text="7" action={ buildNumber } />
                <BtnCalc text="8" action={ buildNumber } />
                <BtnCalc text="9" action={ buildNumber } />
                <BtnCalc text="X" color="#FF9427" action={ btnMult } />
            </View>

            <View style={ styles.row }>
                <BtnCalc text="4" action={ buildNumber } />
                <BtnCalc text="5" action={ buildNumber } />
                <BtnCalc text="6" action={ buildNumber } />
                <BtnCalc text="-" color="#FF9427" action={ btnRes } />
            </View>

            <View style={ styles.row }>
                <BtnCalc text="1" action={ buildNumber } />
                <BtnCalc text="2" action={ buildNumber } />
                <BtnCalc text="3" action={ buildNumber } />
                <BtnCalc text="+" color="#FF9427" action={ btnSum } />
            </View>

            <View style={ styles.row }>
                <BtnCalc text="0" btnBig={ true } action={ buildNumber } />
                <BtnCalc text="." action={ buildNumber } />
                <BtnCalc text="=" color="#FF9427" action={ calculate } />
            </View>

        </View>
    )
}