function pesquisar() {
    //Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //Coleta o campo digitado
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Declara as novas variáveis que armazenaram o texto em letras minúsculas 
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Se não for nada digitado, retorna mensagem de erro
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    //Inicializa uma string vazia para armazenar os resultados 
    let resultados = ""

    //Itera sobre cada dado da lista de dados 
    for (let dado of dados) {
        //Converte o título e a descrição em letras minúsculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //Cria um novo elemento HTML para cada resultado 
            resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`
        }
    }


    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    //Atribui os resultados gerados à seção
    section.innerHTML = resultados
}








