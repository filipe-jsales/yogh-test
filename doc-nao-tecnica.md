## O que foi solicitado:

Referente ao código apresentado na **ETAPA 1**, responda as questões abaixo:

1. Como você melhoraria a legibilidade do código?
2. Como você alteraria o código para a frase ser exibida em sites com múltiplos idiomas?
3. Para se adequar ao WordPress Code Standard, qual ajuste no tipo de função você faria?

---

## O que foi feito:

### 1. Melhorias na legibilidade do código:
- Extraí a mensagem para uma variável fora da função `add_filter` para evitar que ela seja criada a cada execução.
- Usei nomes mais descritivos para variáveis e funções, facilitando a compreensão do código.
- Adicionei comentários pontuais sobre o código para facilitar entendimento (apesar de evitar comentários que expliquem lógica óbvia).

### 2. Compatibilidade com múltiplos idiomas:
- Usei as funções `__()` ou `_e()` do WordPress para permitir tradução.
- Criei arquivos `.pot` para tradução com base no domínio de texto (`Text Domain`).

### 3. Adequação ao WordPress Code Standard:
- Substituí a função anônima por uma função nomeada.
- Preferi o uso de hooks com funções globais, respeitando as boas práticas do WordPress.
