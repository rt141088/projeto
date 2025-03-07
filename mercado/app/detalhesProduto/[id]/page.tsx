//app /detalhesproduto/{id}/page.tsx
import { listaData } from "@/data/listaData";
//em next.js 13 os parâmetros de rota são recebidos
//atraves do objeto 'params' passado com propriedade
type detalhesProdutoProps ={
    params:{
        id:string;
    }
}
function detalhesProduto(props: detalhesProdutoProps) {
    //Convert do id(string) para inteiro
    const produtoID = parseInt(props.params.id);
    //Procurar em uma array listaData o produto com id correspondente.
   const produto = listaData.find(function (item) {
        return item.id === produtoID;
   });
    //Se o produto encontrado exibe detalhes dele
    return (
        <>
            <h2>DETALHES PRODUTO</h2>
            <p><strong>ID:</strong>{produto?.id}</p>
            <p><strong>Nome:</strong>{produto?.nome}</p>
            <p><strong>Quantidade:</strong>{produto?.quantidade}</p>
        </>
    )
}
export default detalhesProduto;