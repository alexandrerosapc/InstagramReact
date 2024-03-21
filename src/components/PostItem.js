export default function PostItem(props) {
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
      <img src={props.imagemPost} alt="" />
      <div className="bot-post">
        <div className="simbolos">
          <div className="simbolos-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div className="comentarios">
          <img src={props.imagemComentario} alt="" />
          <p>
            Curtido por <span>{props.perfilComentario}</span> e{" "}
            <span>outras 101.523 pessoas</span>
          </p>
        </div>
      </div>
    </div>
  );
}