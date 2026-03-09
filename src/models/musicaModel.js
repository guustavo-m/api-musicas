let musicas = [
    {
        id: 1,
        nomemusica: "Pay no Rent",
        autor: "Turnpike Troubadours",
        link: "https://www.youtube.com/watch?v=sieOSRVQh3Q"
    },
        {
        id: 2,
        nomemusica: "The Cowboy in Me",
        autor: "Tim McGraw",
        link: "https://www.youtube.com/watch?v=9ECKaPrAGds"
    },
        {
        id: 3,
        nomemusica: "Chasing Tornadoes",
        autor: "MacKenzie Porter",
        link: "https://www.youtube.com/watch?v=xJX4jAEpsp0"
    },
        {
        id: 4,
        nomemusica: "Heaven's Gate",
        autor: "Kevin Coster",
        link: "https://www.youtube.com/watch?v=YMsa8nGF9VQ"
    }
]

let proximoId = 5;

function listarTodos() {
  return musicas;
}

function buscarPorId(id) {
  return musicas.find((p) => p.id === id);
}

function criar(dados) {
  const novamusica = {
    id: proximoId++,
    nomemusica: dados.nomemusica,
    autor: dados.autor,
    link: dados.link,
  };
  musicas.push(novamusica);
  return novamusica;
}

function atualizar(id, dados) {
  const indice = musicas.findIndex((p) => p.id === id);
  if (indice === -1) {
    return null;
  }
  musicas[indice] = {
    id,
    nomemusica: dados.nomemusica,
    autor: dados.autor,
    link: dados.link,
  };
  return musicas[indice];
}

function deletar(id) {
  const indice = musicas.findIndex((p) => p.id === id);
  if (indice === -1) {
    return false;
  }
  musicas.splice(indice, 1);
  return true;
}

function buscarPorAutor(autor) {
  return musicas.filter(
    (p) => p.autor.toLowerCase() === autor.toLowerCase(),
  );
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  buscarPorAutor,
};