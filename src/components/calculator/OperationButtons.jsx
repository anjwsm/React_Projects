import React from "react";
import { ACTIONS } from "./Calculator";

function OperationButtons({ dispatch, operation }) {
  return (
    <button  className="button"
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
}
export default OperationButtons ; 
