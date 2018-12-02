<style>
input[disabled] {pointer-events:none}
input[type="checkbox"] {margin-right: 10px}
</style>

<details><summary>CLICK ME</summary>
<p>

#### yes, even hidden code blocks!

```python
print("hello world!")
```

</p>
</details>

# Presteza  
 Esse critério engloba os meios utilizados para levar o usuário a realizar determinadas ações, como, por exemplo, entrada de dados. Esse critério engloba também todos os mecanismos ou meios que permitem ao usuário conhecer as alternativas, em termos de ações, conforme o estado ou contexto nos quais ele se encontra. A presteza diz respeito igualmente às informações que permitem ao usuário identificar o estado ou contexto no qual ele se encontra, bem como as ferramentas de ajuda e seu modo de acesso.


## Checklist
1.  [ ] Os títulos de telas, janelas e caixas de diálogo estão no alto, centrados ou justificados à esquerda?
    - <details><summary> </summary> Mais detalhes </details>

<details><summary> 2.  [ ] Todos os campos e mostradores de dados possuem rótulos identificativos? </summary>

Todo mostrador de dados deve ser identificado por meio de um rótulo único de identificação.

COMENTÁRIO: Embora possam desempenhar um papel favorável na identificação, os hábitos ou o contexto não são suficientes para auxiliar o usuário na identificação de um dado apresentado em uma tela. É necessário definir rótulos significativos para os dados, de modo a auxiliar a compreensão da tela.

COMENTÁRIO: Quando todos os usuários são habituais e podem ser considerados especialistas, podem-se empregar menos rótulos. Nesse caso, o espaço reservado para os rótulos pode permitir a apresentação de mais dados. É útil em algumas situações bem específicas, como no controle de tráfico aéreo.</details>

3.  [ ] Caso o dado a entrar possua um formato particular, esse formato encontra-se descrito na tela?

4.  [ ] As unidades para a entrada ou apresentação de dados métricos ou financeiros encontram-se descritas na tela?

5.  [ ] Os rótulos dos campos contêm um elemento específico, por exemplo ":", como convite às entradas de dados?

6.  [ ] Caso o dado a entrar possua valores aceitáveis esses valores encontram-se descritos na tela?

7.  [ ] Listas longas apresentam indicadores de continuação, d e quantidade de itens e de páginas?

8.  [ ] As tabelas apresentam cabeçalhos para linhas e colunas consistentes e distinguíveis dos dados apresentados?

9.  [ ] Os gráficos possuem um título geral e rótulos para seus eixos?

10.  [ ] Os botões que comandam a apresentação de caixas de diálogo apresentam em seus rótulos o sinal "..." como indicador da continuidad e do diálogo?

11.  [ ] As páginas de menus possuem títulos, cabeçalhos ou convites à entrada?

12.  [ ] As opções de menu que levam a outros painéis de menu   apresentam o sinal ">" como indicador desse fato?

13.  [ ] O usuário encontra disponíveis as informações necessárias para suas ações?

14.  [ ] Nas caixas de mensagens de erro, o botão de comando "AJUDA" está sempre presente?

15.  [ ] A resposta para uma solicitação de ajuda do usuário está estruturada no contexto da tarefa e da transação corrente?

16.  [ ] Existe a possibilidade do usuário obter a lista de comandos básicos da linguagem?

17.  [ ] Na ocorrência de erros, o usuário pode acessar todas as informações necessárias ao diagnóstico e à solução do problema?
 
<script src="/demo.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
  $(document).ready(function() {
    $("li").click(function() {
      var checked = $(this).find('[type=checkbox]').prop("checked");
      $(this).find('[type=checkbox]').prop('checked', !checked);
    });                 
  });
</script>
