import React, { useState } from "react";

import H1 from "../components/H1/index";
export default function App() {
  const [age, setAge] = useState(0);

  return (
    <>
      <H1 aparece={true} />
      <h1>Instituto dos cegos {age}</h1>
      {/* <H1 aparece={true} nome="Álvaro" />
      <H1 aparece={true} nome="Davi" />
      <H1 aparece={true} nome="Tierry" />
      <H1 aparece={true} /> */}
      Minha idade é: {age}
      <button onClick={() => setAge(age + 1)}>Aniversário</button>
    </>
  );
}
