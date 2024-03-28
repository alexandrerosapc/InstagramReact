import { useState } from "react";
export default function PostItem(props) {
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const [counter, setCounter] = useState(props.valorInicialDeLikes)
  const [animation,setAnimation] = useState(false)

  function clickLike() {
    if (!liked) {
      setCounter(counter + 1)
      
    } else {
      setCounter(counter - 1)
    }
    setLiked(!liked)
  }

  function clickImage(event) {
    if (event.detail === 2){
      setAnimation(true)
      if (!liked) {
        setCounter(counter + 1)
        setLiked(true)
      }
      setTimeout(() => {
        setAnimation(false)
      }, 500);
    }
    
  }

  return (
    <div className="post">
      <div className="topo-post">
        <div>
          <img src={props.imagemPerfil} alt="imagem perfil" />
          <p>{props.perfil}</p>
        </div>
        <div>
          <ion-icon
            name="ellipsis-horizontal-outline"
            className="icon"
          ></ion-icon>
        </div>
      </div>
      <ion-icon class={`coracao ${animation ? "scale-up-center" : 'invisible'}`} name="heart" ></ion-icon>
      <img onClick={clickImage} src={props.imagemPost} alt="" />
      <div className="bot-post">
        <div className="simbolos">
          <div className="simbolos-esquerda">
            <ion-icon
              onClick={clickLike}
              name={liked ? "heart" : "heart-outline"}
              style={{ color: liked ? "red" : "inherit" }}
            >

            </ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => setSaved(!saved)}
              name={saved ? "bookmark" : "bookmark-outline"}
            >

            </ion-icon>
          </div>
        </div>
        <div className="comentarios">
          <img src={props.imagemComentario} alt="" />
          <p>
            Curtido por <span>{props.perfilComentario}</span> e{" "}
            <span>outras {counter} pessoas</span>
          </p>
        </div>
      </div>
    </div>
  );
}
