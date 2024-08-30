markdown

# Diego Mota Cavalcante

Este projeto React é uma aplicação que demonstra várias funcionalidades, incluindo cálculos de soma, verificação de números de Fibonacci, cálculo de próximos elementos em sequências, análise de strings, e simulação de interruptores e lâmpadas. A aplicação utiliza SCSS para estilização e Jest para testes.

## Funcionalidades

### 1. **Calculate Soma**

- **Descrição**: Calcula a soma dos números inteiros de 1 até um índice específico (exclusivo) e exibe o resultado.
- **Cálculo**: Soma os números de 1 até `INDICE - 1` (onde `INDICE` é 12).
- **Tela**: Exibe o resultado do cálculo da soma.

### 2. **Fibonacci**

- **Descrição**: Verifica se um número fornecido pelo usuário pertence à sequência de Fibonacci.
- **Entrada**: O usuário insere um número.
- **Saída**: Mensagem indicando se o número pertence ou não à sequência de Fibonacci.

### 3. **Sequence Calculator**

- **Descrição**: Calcula o próximo elemento em várias sequências matemáticas.
- **Sequências**:
  - Sequência A: Números ímpares a partir de 1.
  - Sequência B: Potências de 2 começando com 2.
  - Sequência C: Quadrados dos números inteiros.
  - Sequência D: Quadrados dos números inteiros começando com 2.
  - Sequência E: Sequência de Fibonacci.
  - Sequência F: Números começando com 2 e incrementando com padrões específicos.

### 4. **String Analyzer**

- **Descrição**: Analisa uma string fornecida pelo usuário e conta as ocorrências das letras 'a' (maiúsculas e minúsculas).
- **Entrada**: O usuário insere uma string.
- **Saída**: Exibe a quantidade de letras 'a' na string.

### 5. **Switch Lamp Simulator**

- **Descrição**: Simula o controle de três lâmpadas com três interruptores. Cada interruptor controla uma lâmpada individualmente.
- **Funcionamento**: O usuário pode ligar e desligar os interruptores e ver o estado das lâmpadas atualizarem-se conforme o estado dos interruptores.
- **Resumo da Estratégia**: Descreve um método para identificar as lâmpadas com base nos interruptores.

### 6. **App**

- **Descrição**: O componente principal que integra todas as funcionalidades mencionadas acima. Permite a navegação entre as diferentes funcionalidades e exibe cada um dos componentes.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário.
- **SCSS**: Utilizado para estilizar os componentes.
- **Jest**: Framework de testes para garantir a funcionalidade dos componentes.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegomota2374/estagio-ribeirao-preto-teste.git


Instale as dependências:

bash

npm install

Inicie o servidor de desenvolvimento:

bash

    npm start

Executar Testes

Para garantir que todos os componentes funcionem corretamente, execute os testes com o comando:

bash

npm test

Estrutura do Projeto

    src/: Contém os arquivos do código-fonte.
        CalculateSoma/CalculateSoma.js: Componente para calcular a soma dos números inteiros.
        Fibonacci/Fibonacci.js: Componente para verificar números da sequência de Fibonacci.
        SequenceCalculator/SequenceCalculator.js: Componente para calcular próximos elementos de sequências.
        StringAnalyzer/StringAnalyzer.js: Componente para analisar strings e contar letras 'a'.
        SwitchLampSimulator/SwitchLampSimulator.js: Componente para simular interruptores e lâmpadas.
        App.js: Componente principal que integra todas as funcionalidades.
        .scss: Arquivos de estilo SCSS para cada componente.
        .test.js: Arquivos de teste Jest para cada componente.
        __tests__/: Contém teste Jest.

    public/: Contém arquivos estáticos, incluindo index.html.

Contribuições

Para dúvidas ou sugestões, entre em contato com diegomota2374@gmail.com.