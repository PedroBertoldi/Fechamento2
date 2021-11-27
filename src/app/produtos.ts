export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  comentarios: {
    user: string,
    comment: string,
  }[];
  categorias: string[];
  imagem: string;
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Caneta 3d',
    preco: 120,
    descricao: 'Uma caneta para desenhar no ar',
    comentarios: [
      {
        user: 'usuario 1',
        comment: 'Produto horrível'
      },
      {
        user: 'usuario 2',
        comment: 'Recomendo'
      },
      {
        user: 'usuario 3',
        comment: 'Gostei'
      },
    ],
    categorias: [
      "Tecnologia", "Brinquedos"
    ],
    imagem: "assets/caneta3d.jpg",
  },
  {
    id: 2,
    nome: 'Kit de Robótica',
    preco: 599,
    descricao: 'Kit para construção de robôs',
    comentarios: [
      {
        user: 'usuario 3',
        comment: 'Gostei'
      },
    ],
    categorias: [
      "Tecnologia", "Robótica"
    ],
    imagem: "assets/kitrobotica.jpg",
  },
  {
    id: 3,
    nome: 'Telefone celular',
    preco: 1200,
    descricao: 'Telefone que também faz ligações',
    comentarios: [
    ],
    categorias: [
      "Tecnologia", "Smartphone"
    ],
    imagem: "assets/celular.jpg",
  }
  ,
  {
    id: 4,
    nome: 'Telefone celular',
    preco: 1200,
    descricao: 'Telefone que também faz ligações',
    comentarios: [
    ],
    categorias: [
      "Tecnologia", "Smartphone"
    ],
    imagem: "assets/celular.jpg",
  }
  ,
  {
    id: 5,
    nome: 'Telefone celular',
    preco: 1200,
    descricao: 'Telefone que também faz ligações',
    comentarios: [
    ],
    categorias: [
      "Tecnologia", "Smartphone"
    ],
    imagem: "assets/celular.jpg",
  }
  ,
  {
    id: 6,
    nome: 'Telefone celular',
    preco: 1200,
    descricao: 'Telefone que também faz ligações',
    comentarios: [
    ],
    categorias: [
      "Tecnologia", "Smartphone"
    ],
    imagem: "assets/celular.jpg",
  }
];

