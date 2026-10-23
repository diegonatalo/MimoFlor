<p align="center">
  <img src="./public/og-image.jpg" alt="Uma hortênsia azul desabrochando sobre a frase “Uma flor para alegrar o seu dia”" />
</p>

<h1 align="center">🌸 Mimoflor</h1>

<p align="center">
  <b>Uma flor para você.</b> Escolha uma flor e veja ela nascer.<br />
  Um pequeno presente digital: uma animação, uma frase e um jardim para alegrar o dia de alguém.
</p>

<p align="center">
  🔗 <a href="https://mimoflor.vercel.app"><b>Acesse o projeto online</b></a>
</p>

<br />

## ✨ Funcionalidades

- 🌹 **Quatro flores para escolher:** rosa, girassol (amarelo), hortênsia (azul) e lírio (branco).
- 🎛️ **Rosa personalizável:** ao escolher a rosa, aparecem as opções de **tipo** (nacional, vista de cima, ou colombiana, de taça alta e fechada) e de **cor** (vermelha ou azul). As quatro combinações têm tema de cores próprio.
- 🌱 **Animação de nascimento:** o caule brota da terra, as folhas se desenrolam, um botão surge e as pétalas se abrem uma a uma. Depois, a planta balança suavemente e brilhos piscam ao redor.
- 🎨 **Tema que acompanha a flor:** o fundo, o brilho e a poeira de luz mudam de cor, com transição suave, conforme a flor escolhida.
- 💌 **Frase de boas-vindas** com entrada suave depois que a flor desabrocha.
- 📱 **Responsivo:** a flor se ajusta à largura e à altura da tela, para tudo caber sem rolar em celulares comuns.
- ♿ **Acessível:** o seletor é um grupo de botões de rádio navegável pelo teclado e a animação é encurtada para quem prefere menos movimento.
- 🔗 **Link com a flor:** a flor escolhida fica no endereço, e quem abre o link já vê a mesma flor (ver abaixo).
- 🥀 **Página 404** própria: um broto que ainda não floresceu. Aparece para endereços e flores que não existem.
- 🔗 **Open Graph** configurado, com imagem de prévia para compartilhamento, e **favicon** próprio.

<br />

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React 19](https://react.dev)
- 🟦 [TypeScript](https://www.typescriptlang.org)
- 🎨 [Tailwind CSS 4](https://tailwindcss.com)
- ⚡ [Vite](https://vite.dev)
- 🖼️ SVG desenhado em código, animado só com CSS (sem bibliotecas de animação)

<br />

## 💻 Como Rodar o Projeto Localmente

Você vai precisar do [Node.js](https://nodejs.org) e do [pnpm](https://pnpm.io).

```bash
# Clone o repositório
git clone https://github.com/diegonatalo/rose.git

# Acesse a pasta do projeto
cd rose

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

📍 O projeto estará disponível em: http://localhost:5173

### Scripts

| Comando        | O que faz                                   |
| -------------- | ------------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento        |
| `pnpm build`   | Verifica os tipos e gera a versão de produção |
| `pnpm preview` | Serve localmente a versão de produção       |
| `pnpm lint`    | Roda o ESLint                               |

<br />

## 🗂️ Estrutura do Projeto

```text
src/
├── App.tsx                  # Escolhe a página: "/" é a home, o resto é a 404
├── index.css                # Temas por flor, fundo, tipografia e seletor
├── pages/
│   ├── home.tsx             # Flor, frase e seletor
│   └── not-found.tsx        # Página 404
└── components/
    ├── flower.tsx           # Monta o SVG da flor escolhida
    ├── flower.css           # Linha do tempo e keyframes da animação
    ├── flower-picker.tsx    # Seletor de flores
    ├── flower-options.tsx   # Opções da flor escolhida (tipo, cor...)
    ├── message.tsx           # Frase exibida abaixo da flor
    ├── stage.tsx            # Fundo atmosférico (halo e poeira de luz)
    └── flowers/
        ├── registry.tsx     # Flores disponíveis e suas opções
        ├── shared.tsx       # Caule, folhas, chão, brilhos e pétala genérica
        ├── utils.ts         # Aleatório determinístico e helper de variáveis CSS
        ├── rose.tsx             # Rosa nacional (vista de cima)
        ├── colombian-rose.tsx   # Rosa colombiana (taça alta)
        ├── palettes.ts          # Cores (vermelha e azul) das rosas
        ├── sunflower.tsx
        ├── hydrangea.tsx
        └── lily.tsx
```

### 🌷 Como adicionar uma nova flor

1. Crie `src/components/flowers/minha-flor.tsx` exportando um componente de gradientes (`MinhaFlorDefs`) e um da planta (`MinhaFlorPlant`). Use `Stem`, `Leaf` e `Petal` de `shared.tsx`.
2. Registre a flor em `flowers/registry.tsx`: nome, cor da bolinha no seletor e uma função `view` que devolve o desenho, o tema, a cor dos brilhos, a posição da cabeça e o segundo em que ela começa a abrir.
3. Crie o tema de cores em `index.css`, no bloco `.stage[data-flower="..."]`.
4. Para dar variações à flor (como tipo e cor da rosa), declare `options` no registro. O seletor desenha a fileira de opções sozinho, e `view` recebe a escolha feita.

<br />

## 🚀 Deploy

O projeto é publicado na [Vercel](https://vercel.com). O arquivo `vercel.json` redireciona todos os endereços para o `index.html`, assim a página 404 própria do site aparece no lugar da padrão da Vercel.

As URLs das meta tags Open Graph, em `index.html`, são absolutas. Se o domínio mudar, atualize-as.

### 🔗 Links com a flor

A escolha fica na URL e se atualiza sozinha enquanto você escolhe, então basta copiar o endereço da barra:

| Parâmetro | Valores |
| --------- | ------- |
| `flor`    | `rosa`, `girassol`, `hortensia`, `lirio` |
| `tipo` (só rosa) | `nacional`, `colombiana` |
| `cor` (só rosa)  | `vermelha`, `azul` |

Exemplos: `/?flor=girassol` e `/?flor=rosa&tipo=colombiana&cor=azul`. Sem `flor`, abre a hortênsia. Um valor que não existe em `flor`, `tipo` ou `cor` (por exemplo `?flor=rosa&cor=azullaaaaa`) leva à página 404. Parâmetros que não são do site, como `utm_source` e `fbclid`, são ignorados, e `tipo` ou `cor` numa flor que não os tem também. A lógica fica em `src/lib/flower-url.ts`, e cada flor declara o próprio texto de URL (`slug`) no registro.

### 🖼️ Ícones e imagens de prévia

Tudo fica em `public/`:

- `favicon.svg`, `favicon-32.png` e `apple-touch-icon.png`: o ícone do site (uma flor cor-de-rosa).
- `og-image.jpg`: a imagem que aparece quando o link é compartilhado (1200×630). Hoje é a da hortênsia, a flor padrão.
- `og/*.jpg`: uma imagem de prévia pronta para cada flor (`rose`, `rose-blue`, `colombian`, `colombian-blue`, `sunflower`, `hydrangea` e `lily`). As meta tags ficam fixas no `index.html`, então o link compartilhado mostra sempre `og-image.jpg`, mesmo com a flor na URL. Estas ficam prontas para uma prévia diferente por flor, o que exigiria gerar o HTML por flor ou uma função na Vercel.

Elas foram geradas a partir do próprio site, com o navegador sem interface, com as animações levadas ao estado final.

<br />

## 🛣️ Melhorias Futuras

- 💌 Permitir mensagens personalizadas
- 🔗 Uma imagem de prévia diferente no link, conforme a flor escolhida
- 🌸 Adicionar mais flores (tulipa, margarida, orquídea...)
- 🎂 Mensagens especiais para datas comemorativas e aniversários
- 🌙 Alterar o cenário de acordo com o período do dia
- 🔊 Adicionar efeitos sonoros opcionais

<br />

## 🤝 Contribuição

Contribuições são sempre bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

<br />

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

<br />

<p align="center">
  Desenvolvido com ❤️ por <a href="https://linkedin.com/in/diego-natalo"><b>Diego Natalo</b></a>
</p>
