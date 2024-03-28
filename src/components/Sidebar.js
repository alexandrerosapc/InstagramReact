import { useState } from "react";
import OutrasSugestoes from "./OutrasSugestoes";
import Usuario from "./Usuario";
export default function Sidebar() {
  const outrasInfo = [
    { imagem: "img/bad.vibes.memes.svg", perfil: "bad.vibes.memes" },
    { imagem: "img/chibirdart.svg", perfil: "chibirdart" },
    { imagem: "img/razoesparaacreditar.svg", perfil: "razoesparaacreditar" },
    { imagem: "img/adorable_animals.svg", perfil: "adorable_animals" },
    { imagem: "img/smallcutecats.svg", perfil: "smallcutecats" },
  ];

  const [name, setName] = useState("Catana");
  const [image, setImage] = useState("img/catanacomics.svg")

  return (
    <div className="sidebar">
      <Usuario
        setName={setName}
        name={name}
        setImage={setImage}
        imagem={image}
        userName={"catanacomics"}
      />
      <div className="caixa"></div>
      <div className="sugestoes">
        <div className="sugestoespvc">
          <h1>Sugestões para você</h1>
          <p>Ver tudo</p>
        </div>
        <div>
          {outrasInfo.map((o) => (
            <OutrasSugestoes
              key={o.perfil}
              imagem={o.imagem}
              perfil={o.perfil}
            />
          ))}
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