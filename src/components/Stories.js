import SotriesItem from "./StoriesItem";
export default function Stories() {
  const storiesInfo = [
    { imagem: "img/9gag.svg", perfil: "9gag" },
    { imagem: "img/meowed.svg", perfil: "meowed" },
    { imagem: "img/barked.svg", perfil: "barked" },
    { imagem: "img/nathanwpylestrangeplanet.svg", perfil: "nathanwpyle..." },
    { imagem: "img/wawawicomics.svg", perfil: "wawawiwac..." },
    { imagem: "img/respondeai.svg", perfil: "respondeai" },
    { imagem: "img/filomoderna.svg", perfil: "filomoderna" },
    { imagem: "img/memeriagourmet.svg", perfil: "memeriagourmet" },
    { imagem: "img/9gag.svg", perfil: "9gag" },
    { imagem: "img/9gag.svg", perfil: "9gag" },
    { imagem: "img/9gag.svg", perfil: "9gag" }
  ]

  return (
    <div className="stories">
      {storiesInfo.map((s) => <SotriesItem imagem={s.imagem} perfil={s.perfil} />)}

      <div>
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>
  );
}