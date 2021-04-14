import { useRef, useState } from 'react';

enum Operators {
    sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const buildNumber = ( textNumber: string ) => {

        // verificar si ya hay punto 
        if ( number.includes('.') && textNumber === '.') return;

        // no aceptar -0 
        if ( number.startsWith('0') || number.startsWith('-0') ) {

            // punto decimal
            if ( textNumber === '.' ) {
                setNumber( number + textNumber );

            // evaluar si es otro cero, y hay un punto
            } else if ( textNumber === '0' && number.includes('.') ) {
                setNumber( number + textNumber );

            // evaluar si es diferente de cero y no tiene punto
            } else if ( textNumber !== '0' && !number.includes('.') ) {
                setNumber( textNumber );

            // Evitar 000.0
            } else if ( textNumber === '0' && !number.includes('.') ) {
                setNumber( number );
            } else {
                setNumber( number + textNumber );
            }

        } else {
            setNumber( number + textNumber );
        }
    }

    const positiveNegative = (  ) => {
        if ( number.includes('-') ) {
            setNumber( number.replace('-', '') );
        } else {
            setNumber( '-' + number );
        }
    }

    const btnDeleteLast = () => {

        ( number.length === 1 || (number.startsWith('-') && number.length === 2 ) )
            ? setNumber( '0' )
            : setNumber( number.slice(0, -1) );
    }

    const changeByPreviousNumber = () => {

        if ( number.endsWith('.') ) {
            setPreviousNumber( number.slice(0, -1) );
        } else {
            setPreviousNumber( number );
        }

        setNumber('0');

    }

    const btnDiv = () => {
        changeByPreviousNumber();
        lastOperation.current = Operators.dividir;
    }

    const btnMult = () => {
        changeByPreviousNumber();
        lastOperation.current = Operators.multiplicar;
    }

    const btnRes = () => {
        changeByPreviousNumber();
        lastOperation.current = Operators.restar;
    }

    const btnSum = () => {
        changeByPreviousNumber();
        lastOperation.current = Operators.sumar;
    }

    const calculate = () => {

        const num1 = Number( number );
        const num2 = Number( previousNumber );

        switch ( lastOperation.current ) {
            case Operators.sumar:
                setNumber(`${ num1 + num2 }`);
                break;
            
            case Operators.restar:
                setNumber(`${ num2 - num1 }`);
                break;

            case Operators.multiplicar:
                setNumber(`${ num1 * num2 }`);
                break;
            
            case Operators.dividir:
                ( num1 === 0 ) ? setNumber('Error') : setNumber(`${ num2 / num1 }`);
                break;
        }

        setPreviousNumber('0');

    }

    return {
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
    }
}


