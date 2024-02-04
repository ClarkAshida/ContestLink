class Noticias {
  constructor(titulo, autor, texto, legenda, categoria, data_e_hora, id_funcionario_id) {
      this.titulo = titulo;
      this.autor = autor;
      this.texto = texto;
      this.legenda = legenda;
      this.categoria = categoria;
      this.data_e_hora = data_e_hora;
      this.id_funcionario_id = id_funcionario_id;
  }
}

module.exports = Noticias;
