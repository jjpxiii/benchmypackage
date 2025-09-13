"use client";

import { SetStateAction, useState } from "react";

export default function Calculator() {
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [result, setResult] = useState<number | undefined>(undefined);

  function calculate(operand: string) {
    if (operand == "+") setResult(Number(op1) + Number(op2));
  }
  function handleChangeOp1(e: { target: { value: SetStateAction<string> } }) {
    setOp1(e.target.value);
  }

  function handleChangeOp2(e: { target: { value: SetStateAction<string> } }) {
    setOp2(e.target.value);
  }

  return (
    <div>
      <input
        id="op1"
        type="number"
        onChange={handleChangeOp1}
        placeholder="OP1"
        value={op1}
      ></input>
      <input
        id="op2"
        type="number"
        onChange={handleChangeOp2}
        placeholder="OP2"
        value={op2}
      ></input>
      <button onClick={() => calculate("+")}>+</button>
      <div>{result}</div>
    </div>
  );
}
