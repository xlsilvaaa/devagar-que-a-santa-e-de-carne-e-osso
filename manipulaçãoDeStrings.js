/*Existem algumas formas de manipular string:
// BASTA ACRESCENTAR NO CONSOLE.LOG O TIPO DA FUNÇÃO QUE ESTÁ ABAIXO:

length checa o tamanho da string;
split separa uma string definindo um limitador;
replace substitui trechos da string;
slice retorna só um trecho da string;
substr retorna trechos de string informando a posição.*/

//string geral para todos os casos:
let a = "Gisele Regina Lopes da Silva. Recifense, nasceu em 08/07/1992 e mora na Brasília Teimosa!";

console.log(a.length) // CONTA OS CARACTERES INCLUSIVE OS ESPAÇOS PARA SABER O TAMANHO DA MINHA STRING

console.log(a.split (",")) 
//ao aplicar o split, vai acrescentar à cada string o comando que foi inserido no parenteses, e isso muda até a forma do texto aparecer.
//é a função que separa as strings

console.log(a.replace("Recifense", "Olindense"))
//essa função vai lá na string selecionada e modifica os nomes da primeira variável escrita pela segunda definida entre parenteses e aspas.

//faltou a explicação do slice e o substr
