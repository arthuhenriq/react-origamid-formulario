import React from "react";
import Radio from "../components/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [answer, setAnswer] = React.useState("");
  const [aux, setAux] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);
  const [mostrarAcertos, setMostrarAcertos] = React.useState(false);

  function questoesAcertadas() {
    if (answer === perguntas[aux].resposta) {
      setAcertos((acertos) => acertos + 1);
    }
    console.log(acertos);
  }

  function handleClick() {
    if (aux < perguntas.length -1) {
      setAux((anterior) => anterior + 1);
      questoesAcertadas();
    } else {
      setMostrarAcertos(true)
      questoesAcertadas();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      {mostrarAcertos ? (
        <div>
          <p>Acertou {acertos} de 4</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Radio
            question={perguntas[aux].pergunta}
            options={perguntas[aux].options}
            value={answer}
            setValue={setAnswer}
            id={perguntas[aux].id}
          />
          <button type="button" onClick={handleClick}>
            {aux < perguntas.length - 1 ? "Próxima" : "Enviar"}
          </button>
        </form>
      )}
    </>
  );
};

export default App;
