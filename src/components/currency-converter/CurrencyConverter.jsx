import React, { useState } from "react";
import './CurrencyConverter.css' ;
import CurrencyInput from "./CurrencyInput";


function CurrencyConverter(){

    const [amount1 , setAmount1] = useState("1");
    const [amount2 , setAmount2] = useState("1");
    const [currency1 , setCurrency1] = useState('USD');
    const [currency2 , setCurrency2] = useState('USD');
    return(
        <div>
            <CurrencyInput currencies={['USD']} amount ={amount1} currency={currency1}/>          
            <CurrencyInput currencies={['USD']} amount ={amount2} currency={currency2}/>
        </div>
    )
}


export default CurrencyConverter ;