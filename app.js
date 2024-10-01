function pesquisar() {
  // 1. Define uma função chamada 'pesquisar'. Essa função será responsável por realizar a pesquisa e exibir os resultados.


  let section = document.getElementById("resultados-pesquisa")

  // 2. Obtém um elemento HTML com o ID 'resultados-pesquisa'. Este elemento será usado para exibir os resultados da pesquisa.
  
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  console.log(campoPesquisa)

  if (campoPesquisa == "") {
    section.innerHTML = "<p> Nada foi encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()


  // 4. Inicializa uma string vazia para armazenar o HTML dos resultados da pesquisa.
  
  // 5. Inicia um loop 'for...of' para iterar sobre cada elemento (dado) dentro do array 'dados'.
 
  let resultado = '';
  let titulo = '';
  let descricao = '';
  let tags = '';

  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase();
    descricao= dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {

      //cria um novo elemento
    resultado += `
    <div class="item-resultado">
      <h2>
        <a href="" target="_blank"> ${dado.titulo}</a>
      </h2>
      <p class="descricao-meta"> ${dado.descricao}</p>
    </div>
  `;
    }
    
  }

  if(!resultado){
    resultado = '<p> Isso não é relacionado a dragões!.</p>'
  }
  
  // 7. Atribui o conteúdo da string 'resultado' (que agora contém o HTML completo dos resultados) à propriedade 'innerHTML' do elemento 'section'.
  //    Isso substitui o conteúdo HTML existente da seção pelos resultados da pesquisa.

  section.innerHTML = resultado;
}




