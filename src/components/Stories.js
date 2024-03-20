export default function Stories() {
  return (
    <div className="stories">
      <SotriesItem imagem="img/9gag.svg" perfil="9gag"/>
      <SotriesItem imagem="img/meowed.svg" perfil="meowed"/>
      <SotriesItem imagem="img/barked.svg" perfil="barked"/>
      <SotriesItem imagem="img/nathanwpylestrangeplanet.svg" perfil="nathanwpyle..."/>
      <SotriesItem imagem="img/wawawicomics.svg" perfil="wawawiwac..."/>
      <SotriesItem imagem="img/respondeai.svg" perfil="respondeai"/>
      <SotriesItem imagem="img/filomoderna.svg" perfil="filomoderna"/>
      <SotriesItem imagem="img/memeriagourmet.svg" perfil="memeriagourmet"/>
      <SotriesItem imagem="img/9gag.svg" perfil="9gag"/>
      <SotriesItem imagem="img/9gag.svg" perfil="9gag"/><SotriesItem imagem="img/9gag.svg" perfil="9gag"/>
      <div>
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
      
    </div>
  );
}

function SotriesItem(props) {
  return (
    <div>
        
        <div className="story">
          <img src={props.imagem} alt={props.perfil} />
        </div>
        {props.perfil}
      </div>
  );
}
