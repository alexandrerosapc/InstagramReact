export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="catana">
        <img src="img/catanacomics.svg" alt="" />
        <div>
          <h1>catanacomics</h1>
          <p>Catana</p>
        </div>
      </div>
      <div className="caixa"></div>
      <div className="sugestoes">
        <div className="sugestoespvc">
          <h1>Sugestões para você</h1>
          <p>Ver tudo</p>
        </div>
        <div>
            <OutrasSugestoes imagem="img/bad.vibes.memes.svg" perfil="bad.vibes.memes" />
            <OutrasSugestoes imagem="img/chibirdart.svg" perfil="chibirdart" />
            <OutrasSugestoes imagem="img/razoesparaacreditar.svg" perfil="razoesparaacreditar" />
            <OutrasSugestoes imagem="img/adorable_animals.svg" perfil="adorable_animals" />
            <OutrasSugestoes imagem="img/smallcutecats.svg" perfil="smallcutecats" />
          
        </div>
      </div>
      <div className="sobre">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}

function OutrasSugestoes(props) {
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