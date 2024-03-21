export default function OutrasSugestoes(props) {
    return (
      <div className="outrassugestoes">
        <div className="img-cont">
          <img src={props.imagem} alt="" />
          <div className="conteudo">
            <h1>{props.perfil}</h1>
            <h2>Segue você</h2>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    );
  }