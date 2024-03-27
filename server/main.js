const productId = "";
let listImagens = []
var select = document.getElementById('categorias');
const categoria = "todos";
const container_produtos = document.getElementById('container_produtos')
const select_categorias = document.getElementById('select_categorias')
const token = '';
const logado = document.getElementById('logado')
const btnSalvar = document.getElementById('btnSalvar')
const select_cad = document.getElementById('select_cad')
const produtoCreate = document.getElementById('produtoCreate')










function getAllProducts() {
    const allData = async () => {
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
    const allData = async () => {
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

getAllCategorias();

function carregaCategorias(categoria) {

    option.textContent = categoria.descricao;
    option.value = categoria.id;
    select_categorias.appendChild(option);

}

function getAllProdutosLike(nome) {
    const allData = async () => {
        const response = await axios.get(`http://localhost:3001/api/produtos/${nome}`);
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


function cadastrarCategoria() {
    const form = document.querySelector('cadCategoria');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const descricao = document.getElementById("descr").value;

        const newCategoria = {
            descricao: descricao
        }



        fetch('/categorias', {
            method: 'POST',
            headers: {
                //  'Content-Type': 'multipart/form-data'
            },
            body: newCategoria
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falhou!');
                }
                console.log('Sucesso no upload!');
            })
            .catch((error) => {
                console.error(error);
            });


    });
}

console.log('token ' + localStorage.getItem('token'))


produtoCreate.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const estoque = document.getElementById("estoque").value;
    const categoriaSelecionada = select_categorias.options[select_categorias.selectedIndex].value || 1;




    const newProduct = {
        nome: nome,
        descricao: descricao,
        estoque: estoque,
        categoriaId: categoriaSelecionada


    }


    fetch('/produtos', {
        method: 'POST',
        headers: {

        },
        body: newProduct



    }).then((response) => {
        if (!response.ok) {
            throw new Error('Falhou!');
        }
        console.log('Sucesso no upload!');

    })
        .catch((error) => {
            console.error(error);
        });

});





function cadastroProdutos(newProduct) {
    const form = document.querySelector('produtoCreate');

    //const token = localStorage.getItem('token')
    newProduct = {
        "nome": "fandangos3",
        "descricao": "teste",
        "categoriaId": 1
    }


    console.log(newProduct)
  
    

}




function addUser() {
    const form = document.querySelector("addUser");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = documet.getElementById("username").value;
        const password = document.getElementById("password").value;

        const newUser = {
            username: username,
            password: password
        }


        function validaForm() {
            if (newUser) {
                return true;
            } else {
                console.log("nenhum usuário foi preenchido!")
                return false;
            }


        }


        if (validaForm()) {
            fetch('/users', {
                method: 'POST',
                headers: {

                },
                body: newUser



            }).then((response) => {
                if (!response.ok) {
                    throw new Error('Falhou!');
                }
                console.log('Sucesso no upload!');
            })
                .catch((error) => {
                    console.error(error);
                });

        }

    })


}




    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = documet.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;
       // const categoraId = document.getElementById('select_categorias').options[select_categorias.selectedIndex]

        const newProduct = {
            username: username,
            password: password,
            productId:1
        }


        function validaForm() {
            if (newProduct) {
                return true;
            } else {
                console.log("nenhum usuário foi preenchido!")
                return false;
            }


        }


        if (validaForm()) {
            fetch('/produtos', {
                method: 'POST',
                headers: {

                },
                body: newProduct


            }).then((response) => {
                if (!response.ok) {
                    throw new Error('Falhou!');
                }
                console.log('Sucesso no upload!');
            })
                .catch((error) => {
                    console.error(error);
                });

        }

    })






function login() {
    form = document.getElementById("login")
    var meuToken = document.getElementById('token')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = documet.getElementById("username").value;
        const password = document.getElementById("password").value;

        const userLogin = {
            username: username,
            password: password
        }

        fetch('/login', {
            method: 'POST',
            headers: {

            },
            body: userLogin
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Não foi possível realizar o login! Verifique as credênciais!');

            }


            token = response;
            localStorage.setItem('token', response.text);
            meuToken.value = response.text;




        }).catch((error) => {
            console.log(error)
        })

    })
}