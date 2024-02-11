import React from "react";
import { ACTIONS } from "./Calculator";

function DigitButtons({ dispatch, digit }) {
  return (
    <button  className="button"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButtons;
