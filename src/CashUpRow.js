import React from "react";

function CashUpRow({cash}){

    return(<>
        {(cash)?(
            <tr>
                <th>£{(cash.amount).toFixed(2)}</th>
                <th>
                    <input type="number"
                        name={cash.state}
                        step="1"
                        min="0"
                        onChange={(e) => [parseInt(cash.setStates(e.target.value)),
                            cash.setTotal((e.target.value)*(cash.amount))]}
                    >
                    </input>
                </th>
                <th>£{(cash.total).toFixed(2)}</th>
            </tr>
        ):""}
    </>)
}

export default CashUpRow;