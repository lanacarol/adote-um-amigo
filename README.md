# Adote um Amigo 🐾

## 📌 Sobre o projeto

**Adote um Amigo** é uma aplicação web desenvolvida em **React** com o objetivo de facilitar a visualização e o interesse na adoção de animais.  
O sistema apresenta cães, gatos e outros animais disponíveis para adoção, exibindo perfis detalhados, filtros de busca, orientações sobre adoção responsável e um formulário de cadastro de interesse.

O projeto foi desenvolvido como **trabalho individual acadêmico**, com foco em:
- consumo de APIs externas;
- rotas dinâmicas;
- interface amigável;
- organização do código;
- publicação online.

---

## 🚀 Funcionalidades

- Listagem de animais disponíveis para adoção
- Consumo de API externa para cães
- Consumo de API externa para gatos
- Inclusão de animais locais (hamster, coelho, calopsita, etc.)
- Página de detalhes de cada animal
- Botão **Quero adotar** na página de detalhes
- Redirecionamento para o cadastro com animal pré-selecionado
- Filtros por:
  - nome
  - espécie
  - cidade
- Ordenação por:
  - Nome A-Z
  - Nome Z-A
  - Espécie
- Botão para limpar filtros
- Página de orientações para adoção responsável
- Formulário de cadastro com validação de:
  - nome
  - e-mail
  - telefone
  - idade
  - estado
  - cidade
  - animal de interesse
  - mensagem
- Seleção de estados e cidades do Brasil via API do IBGE
- Layout responsivo
- Rodapé informativo

---

## 🛠️ Tecnologias utilizadas

- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS3**
- **Axios**
- **Create React App**

### APIs utilizadas
- [The Dog API](https://thedogapi.com/)
- [The Cat API](https://thecatapi.com/)
- [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades)

---

## 📂 Estrutura básica do projeto

```bash
src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── AnimalCard.js
│
├── pages/
│   ├── Home.js
│   ├── Animals.js
│   ├── AnimalDetails.js
│   ├── Tips.js
│   └── Register.js
│
├── services/
│   └── api.js
│
├── App.js
├── App.css
└── index.js

## ⚙️ Como executar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/adoption-app.git


---

# 📌 No seu caso AGORA
Como você já está com o projeto pronto no seu PC, o próximo passo real é:

## **subir o projeto para o GitHub**

Porque só depois você vai ter esse link real.

---

# 🔥 Resumindo simples
## Isso:
```bash
git clone LINK_DO_SEU_REPOSITORIO