import React from "react"
export default function Usuario(props) {
    function changeName() {
        const nomeDigitado = prompt("Escolha o novo nome")
        props.setName(nomeDigitado)
    }

    function changeImage() {
        const imagemDigitada = prompt("Escolha um irl de uma nova imagem")
        props.setImage(imagemDigitada)
    }
    return (
        <div className="catana">
            <img src={props.imagem} onClick={changeImage} />
            <div>
                <h1>{props.userName}</h1>
                <div className="name" >
                    <p>{props.name}</p>
                    <ion-icon name="pencil-outline" onClick={changeName} ></ion-icon>
                </div>
            </div>
        </div>
    )
}