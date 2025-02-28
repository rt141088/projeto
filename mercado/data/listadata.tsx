//defenir os meus itens e os conteudos
 
 
 
//definir type
 
export type item = {
    id: number; //identificador unico de produto
    nome: string; //nome do produto
    quantidade: number; //quantidade
 
};
 
//criar um array com a lista de compras, contendo varios produtos
 
export const listaData: item[] = [
    { id: 1, nome: 'Arroz', quantidade: 2 },
    { id: 1, nome: 'Feijão', quantidade: 4 },
    { id: 1, nome: 'Batata', quantidade: 5 },
    { id: 1, nome: 'Macarrao', quantidade: 7 },
    { id: 1, nome: 'maça', quantidade: 10 },
];

export const listaFrutas: item[] = [
    { id: 1, nome: 'banana', quantidade: 2 },
    { id: 1, nome: 'Pera', quantidade: 4 },
    { id: 1, nome: 'Uva', quantidade: 5 },
];