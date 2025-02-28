//CRIAR DENTRO DA PASTA COMPONETS
 
//Importamos o tipo de Item
import {item}from '../data/listadata';
 
//Definimos o formato da interface de props, com o componente listadeCompras
//lista de intens (array de item)
type listaDeComprasProps = {
    itens: item[]; // itens será um array do objeto do tipo 'item'
}
 
 
 
 
function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>{/*Aqui, estamos usando props.itens para acessar o array de itens que foi passado 
    para o componete. para cada item, exibimos o nome e quantidade 'props'- nos permite "injetar" dados no componente.
    Conceito de props: "Propriedades" enviadas de um componente pai para o componente filho */
}
            <h2> Lista de Compras</h2>
            {props.itens.map(function (item) {
                return (
                <div key={item.id}>
                    <p>Produto: {item.nome}</p>
                    <p>Quantidade: {item.quantidade}</p>
                    <hr />
                  </div>
                );
            })};
        </>
    );
};
export default listaDeCompras;
 