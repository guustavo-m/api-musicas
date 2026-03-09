const musicaModel = require("../models/musicaModel");

function listarTodos(req, res) {
  try {
    const musicas = musicaModel.listarTodos();
    res.status(200).json(musicas);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao listar musicas",
      erro: erro.message,
    });
  }
}

function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido - deve ser um número",
      });
    }
    const musica = musicaModel.buscarPorId(id);
    if (musica) {
      res.status(200).json(musica);
    } else {
      res.status(404).json({
        mensagem: `Música com ID ${id} não encontrada`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar música",
      erro: erro.message,
    });
  }
}

function criar(req, res) {
  try {
    const { nomemusica, autor, link } = req.body;
    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem:
          "Todos os campos são obrigatórios",
      });
    }
    const novamusica = musicaModel.criar({
      nomemusica,
      autor,
      link,
    });
    res.status(201).json(novamusica);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao criar música",
      erro: erro.message,
    });
  }
}

function atualizar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nomemusica, autor, link } = req.body;
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }
    if (!nomemusica || !autor || !link) {
      return res.status(400).json({
        mensagem: "Todos os campos são obrigatórios para atualização completa",
      });
    }
    const musicaAtualizada = musicaModel.atualizar(id, {
      nomemusica,
      autor,
      link,
    });
    if (musicaAtualizada) {
      res.status(200).json(musicaAtualizada);
    } else {
      res.status(404).json({
        mensagem: `Música com ID ${id} não encontrado`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar musica",
      erro: erro.message,
    });
  }
}

function deletar(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const deletado = musicaModel.deletar(id);
    if (deletado) {
      res.status(200).json({
        mensagem: `Música com ID ${id} removido com sucesso`,
      });
    } else {
      res.status(404).json({
        mensagem: `Música com ID ${id} não encontrado`,
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar musica",
      erro: erro.message,
    });
  }
}

function buscarPorAutor(req, res) {
  try {
    const { autor } = req.params;
    const musicas = musicaModel.buscarPorAutor(autor);
    res.status(200).json(musicas);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar musicas por autor",
      erro: erro.message,
    });
  }
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  buscarPorAutor,
};
