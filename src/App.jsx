import { useState } from "react"
import "./styles.css"
import { Card } from "./Card"

function App() {
  const [cardList, setCardList] = useState([])
  const [nameCard, setNameCard] = useState("")
  const [colorCard, setColorCard] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameCard.length < 3 || /^\s/.test(nameCard)) {
      setErrorMessage("O nome deve conter pelo menos 3 caracteres e não deve começar com espaço em branco.");
      return;
    }

    if (colorCard.length < 6) {
      setErrorMessage("A cor deve conter pelo menos 6 caracteres.");
      return;
    }

    const newCard = { name: nameCard, color: colorCard }
    setCardList((oldList) => [...oldList, newCard])
    setNameCard("")
    setColorCard("")
    setErrorMessage("");
    console.log(newCard);
  }

  return (
    <main className="container">
      <div className="forms">
        <h1>ADICIONAR NOVA COR</h1>
        <form onSubmit={handleSubmit}>
          <div className="formInputs">
              <div className="inputForm">
                <label>Nome</label>
                <input type="text" name="name" id="name" value={nameCard} placeholder="Nome da cor" onChange={(e) => setNameCard(e.target.value)}/>
              </div>
              <div className="inputForm">
                <label>Cor</label>
              <input type="text" name="color" id="color" value={colorCard} placeholder="Formato hexadecimal" onChange={(e) => setColorCard(e.target.value)} />
              </div>
            </div>
          <button>ADICIONAR</button>
        </form>
      </div>
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
      <section className="cardsContainer">
        <h1>Cores favoritas</h1>
        <div className="divCards">
          {cardList && cardList.map((card, index) => (
            <Card key={index} name={card.name} color={card.color} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App