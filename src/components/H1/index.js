import React from "react";
import { H1Style as S } from "./style";
export default function H1({ aparece, nome }) {
  return (
    <>
      {aparece && (
        <>
          <S.Container>
            <h1>Célula de dev {nome || "Desenvolvedor"}</h1>
          </S.Container>
          <S.Body>
            <h1>Célula de dev {nome || "Desenvolvedor"}</h1>
          </S.Body>
        </>
      )}
    </>
  );
}
