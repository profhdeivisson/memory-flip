# Memory Flip

Um jogo da memória (memory card matching) desenvolvido com Next.js e Tailwind CSS. Atualmente, o jogo oferece apenas o modo single player, mas há planos para implementar o modo multiplayer no futuro.

## Funcionalidades

- **Modo Single Player**: Jogue sozinho contra o tempo e suas habilidades de memória.
- **Temas Diversos**: Escolha entre vários temas para personalizar sua experiência:
  - Marcas Famosas
  - Linguagens de Programação
  - Desenhos Animados
  - Animes
  - Pokémon
- **Mecânica de Jogo**:
  - Tabuleiro de 5x4 (20 cartas, 10 pares).
  - Clique nas cartas para virá-las.
  - Encontre pares idênticos para removê-los do tabuleiro.
  - Acompanhe o número de jogadas e pares encontrados.
  - Vitória ao encontrar todos os pares.
- **Interface Responsiva**: Design moderno e responsivo, otimizado para desktop e mobile.
- **Estados de Carregamento**: Tela de loading durante transições de rota para uma experiência suave.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para aplicações web.
- **React 19**: Biblioteca para construção de interfaces.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Tailwind CSS 4**: Framework CSS utilitário para estilização.
- **React Spinners**: Biblioteca para componentes de loading.

## Como Jogar

1. Na página inicial, clique em "Single Player".
2. Escolha um tema entre as opções disponíveis.
3. No tabuleiro, clique em uma carta para virá-la.
4. Clique em outra carta para tentar encontrar o par.
5. Se as cartas combinarem, elas permanecerão viradas e serão removidas.
6. Se não combinarem, elas voltarão a se esconder após 1 segundo.
7. Continue até encontrar todos os pares.
8. Ao vencer, veja suas estatísticas e escolha jogar novamente, mudar de tema ou voltar ao início.

## Instalação e Execução

### Pré-requisitos

- Node.js (versão recomendada: 18 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/profhdeivisson/memory-flip.git
   cd memory-flip
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000`.

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com Turbopack.
- `npm run build`: Constrói a aplicação para produção.
- `npm run start`: Inicia o servidor de produção.
- `npm run lint`: Executa o linter para verificar o código.

## Estrutura do Projeto

- `src/app/`: Páginas da aplicação (usando App Router do Next.js).
- `src/components/`: Componentes reutilizáveis (Loading, Card, GameBoard, etc.).
- `src/hooks/`: Hooks customizados (useGameLogic).
- `src/lib/`: Utilitários e dados (temas).
- `src/types/`: Definições de tipos TypeScript.
- `public/assets/`: Imagens dos temas.

## Links

- **Repositório GitHub**: [https://github.com/profhdeivisson/memory-flip](https://github.com/profhdeivisson/memory-flip)
- **Deploy na Vercel**: [https://memory-flip-six.vercel.app/](https://memory-flip-six.vercel.app/)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório.

## Licença

Este projeto é privado e não possui uma licença específica definida.

## Futuro

- Implementação do modo multiplayer.
- Adição de mais temas.
- Sistema de pontuação e rankings.
- Melhorias na UI/UX.
