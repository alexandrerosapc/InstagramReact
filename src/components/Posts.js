import PostItem from "./PostItem";

export default function Posts() {
  const postsInfo = [
    {
      imagemPerfil: "img/meowed.svg",
      perfil: "meowed",
      imagemPost: "img/gato-telefone.svg",
      imagemComentario: "img/respondeai.svg",
      perfilComentario: "respondeai",
      valorInicialDeLikes: 101523
    },
    {
      imagemPerfil: "img/barked.svg",
      perfil: "barked",
      imagemPost: "img/dog.svg",
      imagemComentario: "img/adorable_animals.svg",
      perfilComentario: "adorable_animals",
      valorInicialDeLikes: 127692
    },
    {
      imagemPerfil: "img/meowed.svg",
      perfil: "meowed",
      imagemPost: "img/gato-telefone.svg",
      imagemComentario: "img/respondeai.svg",
      perfilComentario: "respondeai",
      valorInicialDeLikes: 73003
    },
  ];

  return (
    <div className="posts">
      {postsInfo.map((p, index) => (
        <PostItem
          key={index}
          imagemPerfil={p.imagemPerfil}
          perfil={p.perfil}
          imagemPost={p.imagemPost}
          imagemComentario={p.imagemComentario}
          perfilComentario={p.perfilComentario}
          valorInicialDeLikes={p.valorInicialDeLikes}
        />
      ))}
    </div>
  );
}