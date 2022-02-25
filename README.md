
<h1 align="center"> Interior ContactUs</h1>
<br>
<br>

<div><img src="public/imgs/github.png"></div>
<br>

<hr>

<br>
<h1> Sobre 🔖</h1>

<p>

O projeto Interior tem por objetivo explorar uma das funcionalidades mais comuns na web, o envio de formulários de contato para o email, para tal será usado o Nodemailer, módulo para aplicações Node.js que permite enviar email. O lado server-side será responsável por habilitar o servidor, obter as informações submetidas pelo formulário e enviá-las para o email informado na configuração. Para isso utilizamos o Gmail, então você deverá permitir o acesso a app menos seguro dentro da configuração do seu gmail. Acesse o <a href="https://www.google.com/search?client=opera-gx&q=deixar+conta+gmail+com+baixa+segurança&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blanck" >link</a> para saber mais.
</p>

<br>
<h1> Tecnologias Utilizadas 🚀</h1>

<h3>
 • <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a> <br>
 • <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a> <br>
 • <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JS</a> <br>
 • <a href="https://nodejs.org/en/">Node.js</a> <br>
 • <a href="https://expressjs.com/pt-br/">Express</a> <br>
 • <a href="https://www.npmjs.com">NPM</a> <br>
 • <a href="https://www.npmjs.com/package/dotenv"> Dotenv </a><br>
 • <a href="https://www.npmjs.com/package/nodemailer"> Nodemailer</a><br>
 
</h3>

<br>
<h1> Instalação e execução 🔧</h1>


<p> 1. Para baixar o projeto siga as instruções abaixo:</p>

```
 git clone https://github.com/iury-assuncao/Interior-ContactUs.git
```

<p> 2. Acesse o repositório </p> 

```
 cd Interior-ContactUs
```
<p>3. Instale as dependências </p>

```
 npm install
```

<p> 4. Crie um arquivo chamado <strong>.env</strong>. Dentro do arquivo .env, preencha as informações com seu e-mail e senha do gmail</p>

```
EMAIL=seu email
SENHA=sua senha
```

<p>Ou faça a configuração diretamente dentro do arquivo <strong>index.js</strong> configurando </p>

```
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: seu email,
    pass: sua senha
  }
})

```

<p>5. Defina uma variável <strong>mailOptions</strong>. Ele deve conter informações que seu receptor deve saber sobre ele.</p>

```
  let mailOptions = {
    from:`${name} `,
    to: 'Coloque aqui acaixa de email que deseja receber o contato',
    replyTo: `${email}`,
    subject:'Contact interior',
    html:
    ` <h4>Mensagem de ${name}</h4><br>
      <p>${message}</p><br>
      <p>Email para contato: ${email}</p>
    `
  }
```

<p>6. Inicie o servidor </p>

```
npm run dev
```

<p> O servidor inciará na porta: 3000 - acesse http://localhost:3000 </p>
