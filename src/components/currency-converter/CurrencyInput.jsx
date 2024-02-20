import React from "react";
import PropTypes from 'prop-types';


function CurrencyInput(props){
    return(
        <div className="group">
            <input type="text"  value={props.amount}></input>
            <select value={props.currency}>
                {props.currencies.map((currency =>(
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}


CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired ,
    currency: PropTypes.string.isRequired ,
    currencies: PropTypes.array ,
}
export default CurrencyInput ;