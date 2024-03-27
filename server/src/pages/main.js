function cadastrarProduto(){
    newProduct = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        estoque:document.getElementById('estoque').value,
        categoriaId:document.getElementById('select_categorias').options[select_categorias.selectedIndex].value
    
    }
 
    fetch('http://localhost:3001/produtos',{
        headers:{

        },
        
    })
}

function geraBean(){
   
  






   

}

function getAllCategorias() {
    const allData = async () => {
        const response = await axios.get("http://localhost:3001/api/categorias");
        return response.data; // retorna apenas o array de Json
    }

    // para utilizar o resultado da Promise, é possível fazer o seguinte:
    allData().then((data) => {
        // aqui dentro, a variável 'data' contém o array de Json retornado pela Promise
        console.log(data.listCategorias)
        // console.log(data.listProdutos[0].imagens[0].nome)
        // const url = null;
        // data.listProdutos.forEach((produto) => {
        //  listImagens = produto.imagens;
        // listImagens.forEach((imagem) => {
        //  adicionaImagem1(imagem.url, produto)


        //adicionaImagem(`http://localhost:3001/files/${produto.nome}`)
        const listCategorias = data.listCategorias;

        listCategorias.forEach((categoria => {

            console.log(categoria)
            const option = document.createElement('option');
            option.value = categoria.id;
            option.innerText = categoria.descricao;
            select_categorias.appendChild(option)
            console.log(categoria.id)


        }))



    }).catch((error) => {
        console.log(error);
    });

}

function findProdutoById(){

}

function cadastraProduto(){
    selectCategoria()
}

function selectCategoria(){
     categoriaSelecionada = select_categorias.options[select_categorias.selectedIndex].value;
   
   
}


 selectCategoria();


getAllCategorias();
console.log(categoriaSelecionada)
   









