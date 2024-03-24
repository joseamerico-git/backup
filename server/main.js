const productId = "";
let listImagens = []
var select = document.getElementById('categorias');
const categoria = "todos";
const container_produtos = document.getElementById('container_produtos')
const select_categorias = document.getElementById('select_categorias')



function getAllProducts() {
    const allData = async() => {
        const response = await axios.get("http://localhost:3001/api/produtos");
        return response.data; // retorna apenas o array de Json
    }

    // para utilizar o resultado da Promise, é possível fazer o seguinte:
    allData().then((data) => {
        // aqui dentro, a variável 'data' contém o array de Json retornado pela Promise
        console.log(data.listProdutos)
            // console.log(data.listProdutos[0].imagens[0].nome)
        const url = null;
        data.listProdutos.forEach((produto) => {
            listImagens = produto.imagens;
            listImagens.forEach((imagem) => {
                adicionaImagem1(imagem.url, produto)
            });

            //adicionaImagem(`http://localhost:3001/files/${produto.nome}`)
        });


    }).catch((error) => {
        console.log(error);
    });
}

function getAllProductsByCategoria(categoriaId) {
    const allData = async() => {
        const response = await axios.get(`http://localhost:3001/api/produtos/cat/${categoriaId}`);
        return response.data; // retorna apenas o array de Json
    }

    // para utilizar o resultado da Promise, é possível fazer o seguinte:
    allData().then((data) => {
        // aqui dentro, a variável 'data' contém o array de Json retornado pela Promise
        console.log(data.listProdutos)
            // console.log(data.listProdutos[0].imagens[0].nome)
        const url = null;
        data.listProdutos.forEach((produto) => {
            listImagens = produto.imagens;
            listImagens.forEach((imagem) => {
                adicionaImagem1(imagem.url, produto)
            });

            //adicionaImagem(`http://localhost:3001/files/${produto.nome}`)
        });


    }).catch((error) => {
        console.log(error);
    });
}


function adicionaImagem(url, produto) {

    const ul = document.createElement('ul');


    const body = document.getElementsByTagName("body")
    const li = document.createElement("list");
    const tagImg = document.createElement("img");
    const div = document.createElement("div");
    div.style = ".card_ze";
    body.style = "background-color: antiquewhite";
    const p = document.createElement("p");
    const h1 = document.createElement("h1");
    div.style = "width:150px; height:150px; padding:1rem;";
    div.appendChild(tagImg);
    tagImg.style = "width:100%;";
    li.style = "display:grid; grid-template-columns: repeat(3, 3fr);";
    li.appendChild(div);
    tagImg.src = url;
    ul.appendChild(li);
    document.getElementsByClassName('conainer_produtos').appendChild(ul);

}

function adicionaImagem1(url, produto) {

    const ul = document.createElement('ul');
    const body = document.getElementsByTagName("body")
    const li = document.createElement("list");
    const tagImg = document.createElement("img");
    const div = document.createElement("div");
    //div.style =".card_ze";

    body.style = "background-color: antiquewhite";
    const p = document.createElement("p");
    const h1 = document.createElement("h1");
    //  p.innerText("Descricao do produto")
    // h1.innerText("Produto")

    div.style = "width:150px; height:150px; padding:1rem;";

    //div.appendChild(h1)
    // div.appendChild(p)
    // div.innerHTML =`<img src=${url} alt='Imagem do Produto'>`
    div.appendChild(tagImg);
    tagImg.style = "width:100%;";
    li.style = "display:flex; flex-direction:row;";
    li.appendChild(div);
    tagImg.src = url;
    ul.appendChild(li);
    document.getElementById('container_produtos').appendChild(ul);

}

function selecionandoCategorias() {
    const categoriaSelecionada = select_categorias.options[select_categorias.selectedIndex].value;
    console.log("****" + categoriaSelecionada); // pt





    if (categoriaSelecionada == "todos") {
        container_produtos.innerHTML = '';
        getAllProducts()

    } else {
        container_produtos.innerHTML = '';

        getAllProductsByCategoria(categoriaSelecionada);

    }
}

function getAllCategorias() {
    const allData = async() => {
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

getAllCategorias();

function carregaCategorias(categoria) {


    option.textContent = categoria.descricao;
    option.value = categoria.id;

    select_categorias.appendChild(option);
}