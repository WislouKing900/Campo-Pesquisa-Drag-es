function pesquisar() {
    // 1. Define uma função chamada 'pesquisar'. Essa função será responsável por realizar a pesquisa e exibir os resultados.



    let section = document.getElementById('resultados-pesquisa');



    // 2. Obtém um elemento HTML com o ID 'resultados-pesquisa'. Este elemento será usado para exibir os resultados da pesquisa.
    
    let campoPesquisa = document.getElementById('campo-pesquisa')

    console.log('campo-pesquisa')

    let resultado = '';


    // 4. Inicializa uma string vazia para armazenar o HTML dos resultados da pesquisa.
    
    // 5. Inicia um loop 'for...of' para iterar sobre cada elemento (dado) dentro do array 'dados'.



    for (let dado of dados) {

      // 6. Concatena uma nova div com as classes 'item-resultado' à string 'resultado'.
      //    Dentro da div, cria um título (h2) com um link para o dado, e uma descrição (p).
      //    Os valores do título e da descrição são obtidos das propriedades 'titulo' e 'descricao' do objeto 'dado'.


      resultado += `
        <div class="item-resultado">
          <h2>
            <a href="" target="_blank"> ${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"> ${dado.descricao}</p>
        </div>
      `;
    }
    
    // 7. Atribui o conteúdo da string 'resultado' (que agora contém o HTML completo dos resultados) à propriedade 'innerHTML' do elemento 'section'.
    //    Isso substitui o conteúdo HTML existente da seção pelos resultados da pesquisa.
    section.innerHTML = resultado;
  }



