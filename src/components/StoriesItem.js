export default function SotriesItem(props) {
    return (
      <div>
  
        <div className="story">
          <img src={props.imagem} alt={props.perfil} />
        </div>
        {props.perfil}
      </div>
    );
  }
  