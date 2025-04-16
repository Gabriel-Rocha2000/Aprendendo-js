const lessons = {
  jsIntro: {
    title: "O que é JavaScript?",
    theory: "JavaScript é uma linguagem de programação usada para tornar páginas web interativas. É uma das três principais tecnologias da web, junto com HTML e CSS.",
    example: `console.log("Olá, JavaScript!");
// Experimente mudar a mensagem`,
    exercise: "Use console.log para exibir uma mensagem personalizada no console.",
    validate: (code) => code.includes("console.log"),
    challenge: "Crie um programa que exiba três mensagens diferentes no console, uma em cada linha."
  },
  variables: {
    title: "Variáveis: var, let, const",
    theory: "Variáveis são como caixas que armazenam dados. Use 'let' para variáveis que podem mudar, 'const' para constantes, e evite 'var' (mais antigo).",
    example: `let nome = "João";
const idade = 25;
console.log(nome, idade);`,
    exercise: "Crie uma variável com seu nome e idade, e exiba no console.",
    validate: (code) => (code.includes("let") || code.includes("const")) && code.includes("console.log"),
    challenge: "Crie um programa que calcule e exiba a área de um retângulo usando variáveis."
  },
  types: {
    title: "Tipos de Dados",
    theory: "JavaScript tem tipos como string (texto), number (números), boolean (true/false), null, undefined, object e array.",
    example: `let idade = 30; // number
let nome = "Ana"; // string
let ativo = true; // boolean
let lista = [1, 2, 3]; // array
let pessoa = { nome: "João", idade: 25 }; // object`,
    exercise: "Crie uma variável para cada tipo de dado e exiba com console.log.",
    validate: (code) => code.includes("console.log") && code.match(/let\s+\w+\s*=/g)?.length >= 3,
    challenge: "Crie um objeto que represente um produto com nome, preço e quantidade em estoque."
  },
  operadores: {
    title: "Operadores",
    theory: "Operadores são símbolos que realizam operações. Temos aritméticos (+, -, *, /), lógicos (&&, ||), de comparação (==, ===, <, >) e mais.",
    example: `console.log(5 + 3); // 8
console.log(true && false); // false
console.log(10 > 5); // true`,
    exercise: "Use diferentes operadores para realizar cálculos e comparações.",
    validate: (code) => code.includes("console.log") && (code.includes("+") || code.includes(">") || code.includes("&&")),
    challenge: "Crie um programa que verifique se um número é par e maior que 10."
  },
  condicionais: {
    title: "Estruturas Condicionais",
    theory: "If/else permite executar diferentes blocos de código baseado em condições.",
    example: `let idade = 18;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}`,
    exercise: "Crie uma condição que verifique se um número é positivo ou negativo.",
    validate: (code) => code.includes("if") && code.includes("else"),
    challenge: "Crie um programa que determine se um ano é bissexto."
  },
  loops: {
    title: "Loops e Repetições",
    theory: "Loops permitem executar código repetidamente. For, while e forEach são comuns.",
    example: `// Loop for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Loop while
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}`,
    exercise: "Crie um loop que exiba números de 1 a 10.",
    validate: (code) => code.includes("for") || code.includes("while"),
    challenge: "Crie um programa que calcule a soma dos números de 1 a 100."
  },
  funcoes: {
    title: "Funções",
    theory: "Funções são blocos de código reutilizáveis que podem receber parâmetros e retornar valores.",
    example: `function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // 8`,
    exercise: "Crie uma função que calcule a média de dois números.",
    validate: (code) => code.includes("function") && code.includes("return"),
    challenge: "Crie uma função que verifique se uma palavra é um palíndromo."
  },
  arrays: {
    title: "Arrays",
    theory: "Arrays são estruturas que armazenam múltiplos valores em uma única variável. Podem conter qualquer tipo de dado e são indexados numericamente.",
    example: `let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // maçã
console.log(frutas.length); // 3

// Métodos comuns
frutas.push("uva"); // adiciona no final
frutas.pop(); // remove do final
frutas.unshift("morango"); // adiciona no início`,
    exercise: "Crie um array com 5 números e use console.log para exibir o primeiro e o último elemento.",
    validate: (code) => code.includes("["), 
    challenge: "Crie uma função que recebe um array de números e retorna a soma de todos os elementos."
  },
  objetos: {
    title: "Objetos",
    theory: "Objetos são coleções de propriedades, onde cada propriedade tem um nome (chave) e um valor. São úteis para representar entidades do mundo real.",
    example: `let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  hobbies: ["ler", "programar", "correr"]
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);

// Adicionando nova propriedade
pessoa.email = "joao@email.com";`,
    exercise: "Crie um objeto que represente um livro com título, autor e ano de publicação.",
    validate: (code) => code.includes("{") && code.includes("}"),
    challenge: "Crie uma função que recebe um objeto pessoa e retorna uma string com sua apresentação."
  },
  funcoesAvancadas: {
    title: "Funções Avançadas",
    theory: "Funções em JavaScript são objetos de primeira classe. Podem ser atribuídas a variáveis, passadas como argumentos e retornadas por outras funções.",
    example: `// Arrow Function
const soma = (a, b) => a + b;

// Função como argumento
function operacao(a, b, funcao) {
  return funcao(a, b);
}

console.log(operacao(5, 3, soma)); // 8

// Função que retorna função
function multiplicador(x) {
  return function(y) {
    return x * y;
  };
}

const dobro = multiplicador(2);
console.log(dobro(5)); // 10`,
    exercise: "Crie uma arrow function que calcule a área de um círculo.",
    validate: (code) => code.includes("=>"),
    challenge: "Crie uma função de ordem superior que aplique uma função a cada elemento de um array."
  },
  promessas: {
    title: "Promessas e Async/Await",
    theory: "Promessas são objetos que representam a eventual conclusão (ou falha) de uma operação assíncrona. Async/await é uma forma mais limpa de trabalhar com promessas.",
    example: `// Promessa
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operação concluída!");
  }, 2000);
});

promessa.then(resultado => console.log(resultado));

// Async/Await
async function exemplo() {
  try {
    const resultado = await promessa;
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}`,
    exercise: "Crie uma promessa que se resolve após 1 segundo com uma mensagem.",
    validate: (code) => code.includes("Promise"),
    challenge: "Crie uma função assíncrona que simula a busca de dados de uma API."
  },
  manipulaçãoDOM: {
    title: "Manipulação do DOM",
    theory: "O DOM (Document Object Model) é uma representação do documento HTML. Podemos manipulá-lo para criar interfaces dinâmicas.",
    example: `// Selecionando elementos
const titulo = document.getElementById("titulo");
const botoes = document.querySelectorAll(".botao");

// Modificando conteúdo
titulo.textContent = "Novo Título";
titulo.style.color = "blue";

// Adicionando eventos
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    console.log("Botão clicado!");
  });
});`,
    exercise: "Crie um botão que muda a cor de fundo da página quando clicado.",
    validate: (code) => code.includes("document.") || code.includes("addEventListener"),
    challenge: "Crie uma lista dinâmica onde o usuário pode adicionar e remover itens."
  },
  classes: {
    title: "Classes e POO",
    theory: "Classes em JavaScript são uma forma de criar objetos com propriedades e métodos. Elas suportam herança e encapsulamento.",
    example: `class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    console.log(\`\${this.nome} faz um som.\`);
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }
  
  falar() {
    console.log(\`\${this.nome} late!\`);
  }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.falar();`,
    exercise: "Crie uma classe Pessoa com nome e idade, e um método para se apresentar.",
    validate: (code) => code.includes("class") && code.includes("constructor"),
    challenge: "Crie um sistema de contas bancárias usando classes, com métodos para depositar e sacar."
  },
  modulos: {
    title: "Módulos e Import/Export",
    theory: "Módulos permitem dividir o código em arquivos separados. Use export para disponibilizar e import para usar funcionalidades de outros módulos.",
    example: `// math.js
export function soma(a, b) {
  return a + b;
}

export const PI = 3.14159;

// main.js
import { soma, PI } from './math.js';

console.log(soma(5, 3));
console.log(PI);`,
    exercise: "Crie um módulo com funções matemáticas e importe em seu código.",
    validate: (code) => code.includes("export") || code.includes("import"),
    challenge: "Crie um sistema modular com funções para manipulação de arrays."
  },
  async: {
    title: "Programação Assíncrona",
    theory: "JavaScript é single-threaded, mas usa callbacks, Promises e async/await para lidar com operações assíncronas.",
    example: `// Usando async/await
async function buscarDados() {
  try {
    const resposta = await fetch('https://api.exemplo.com/dados');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Erro:', erro);
  }
}

// Usando Promises
fetch('https://api.exemplo.com/dados')
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error('Erro:', erro));`,
    exercise: "Crie uma função assíncrona que simula uma requisição a uma API.",
    validate: (code) => code.includes("async") || code.includes("Promise"),
    challenge: "Crie um sistema que faz múltiplas requisições assíncronas e combina os resultados."
  },
  armazenamento: {
    title: "Armazenamento Local",
    theory: "O navegador oferece várias formas de armazenar dados localmente: localStorage, sessionStorage e cookies.",
    example: `// localStorage
localStorage.setItem('nome', 'João');
const nome = localStorage.getItem('nome');
console.log(nome);

// sessionStorage
sessionStorage.setItem('sessao', 'ativa');

// Cookies
document.cookie = "usuario=João; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";`,
    exercise: "Crie um sistema que salve e recupere dados do localStorage.",
    validate: (code) => code.includes("localStorage"),
    challenge: "Crie um sistema de preferências do usuário que persista entre sessões."
  },
  expressoesRegulares: {
    title: "Expressões Regulares",
    theory: "Expressões regulares são padrões usados para corresponder combinações de caracteres em strings.",
    example: `// Validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('exemplo@email.com')); // true

// Extrair números
const texto = 'O preço é R$ 99,99';
const numeros = texto.match(/\d+/g);
console.log(numeros); // ['99', '99']`,
    exercise: "Crie uma expressão regular que valide um número de telefone brasileiro.",
    validate: (code) => code.includes("/") && code.includes("test") || code.includes("match"),
    challenge: "Crie um validador de senha que exija letras maiúsculas, minúsculas, números e caracteres especiais."
  },
  integracaoHTML: {
    title: "Integração com HTML",
    theory: "JavaScript pode ser integrado ao HTML de três formas principais: inline (diretamente no HTML), interno (usando a tag script) e externo (arquivo separado). A melhor prática é usar arquivos externos para manter o código organizado e reutilizável.",
    example: `<!-- Inline (não recomendado) -->
<button onclick="alert('Olá!')">Clique aqui</button>

<!-- Interno -->
<script>
  function mostrarMensagem() {
    alert('Olá do JavaScript interno!');
  }
</script>

<!-- Externo (recomendado) -->
<script src="script.js"></script>

<!-- Manipulação do DOM -->
<div id="exemplo">Conteúdo inicial</div>
<script>
  // Selecionando elementos
  const elemento = document.getElementById('exemplo');
  
  // Modificando conteúdo
  elemento.textContent = 'Novo conteúdo';
  
  // Adicionando estilos
  elemento.style.color = 'blue';
  
  // Adicionando classes
  elemento.classList.add('destaque');
  
  // Manipulando eventos
  elemento.addEventListener('click', function() {
    alert('Elemento clicado!');
  });
</script>`,
    exercise: "Crie um botão em HTML e use JavaScript para mudar seu texto quando clicado.",
    validate: (code) => code.includes("document.") && (code.includes("addEventListener") || code.includes("onclick")),
    challenge: "Crie um formulário HTML com validação em JavaScript que verifica se os campos estão preenchidos corretamente."
  }
};

const buttonsContainer = document.getElementById("lesson-buttons");
const lessonTitle = document.getElementById("lesson-title");
const lessonTheory = document.getElementById("lesson-theory");
const lessonExample = document.getElementById("lesson-example");
const lessonExercise = document.getElementById("lesson-exercise");
const codeInput = document.getElementById("code-input");
const output = document.getElementById("output");

let currentLesson = null;

// Sistema de progresso
const progress = {
  completedLessons: new Set(),
  saveProgress() {
    localStorage.setItem('jsCourseProgress', JSON.stringify([...this.completedLessons]));
    this.updateProgressBar();
  },
  loadProgress() {
    const savedProgress = localStorage.getItem('jsCourseProgress');
    if (savedProgress) {
      this.completedLessons = new Set(JSON.parse(savedProgress));
    }
    this.updateProgressBar();
  },
  markLessonComplete(lessonId) {
    this.completedLessons.add(lessonId);
    this.saveProgress();
  },
  isLessonComplete(lessonId) {
    return this.completedLessons.has(lessonId);
  },
  updateProgressBar() {
    const totalLessons = Object.keys(lessons).length;
    const completedCount = this.completedLessons.size;
    const percentage = Math.round((completedCount / totalLessons) * 100);
    
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    
    progressFill.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;
    
    // Adicionar classe de animação
    progressFill.classList.add('animate-progress');
    setTimeout(() => progressFill.classList.remove('animate-progress'), 500);
  }
};

// Sistema de tema
const theme = {
  init() {
    this.loadTheme();
    this.setupThemeToggle();
  },
  
  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.updateThemeIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.updateThemeIcon('dark');
    }
  },
  
  setupThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      this.updateThemeIcon(newTheme);
    });
  },
  
  updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
};

// Sistema de compartilhamento
const share = {
  init() {
    this.setupShareButton();
  },
  
  setupShareButton() {
    const shareButton = document.createElement('button');
    shareButton.className = 'share-button';
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i> Compartilhar';
    shareButton.addEventListener('click', () => this.shareCode());
    
    const codeEditor = document.querySelector('.code-editor');
    codeEditor.appendChild(shareButton);
  },
  
  shareCode() {
    const code = codeInput.value;
    const lessonTitle = currentLesson?.title || 'Código JavaScript';
    
    // Criar um objeto com os dados
    const shareData = {
      title: `Código: ${lessonTitle}`,
      text: code,
      url: window.location.href
    };
    
    // Tentar usar a API de compartilhamento do navegador
    if (navigator.share) {
      navigator.share(shareData)
        .catch(error => {
          console.error('Erro ao compartilhar:', error);
          this.copyToClipboard(code);
        });
    } else {
      this.copyToClipboard(code);
    }
  },
  
  copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        this.showNotification('Código copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Erro ao copiar:', err);
        this.showNotification('Erro ao copiar o código.', 'error');
      });
  },
  
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
};

// Sistema de notificações
const notifications = {
  show(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
};

// Inicializar sistemas
progress.loadProgress();
theme.init();
share.init();

Object.entries(lessons).forEach(([key, lesson]) => {
  const btn = document.createElement("button");
  btn.textContent = lesson.title;
  if (progress.isLessonComplete(lesson.title)) {
    btn.classList.add('completed');
  }
  btn.onclick = () => {
    currentLesson = lesson;
    lessonTitle.textContent = lesson.title;
    lessonTheory.textContent = lesson.theory;
    lessonExample.textContent = lesson.example;
    lessonExercise.textContent = lesson.exercise;
    document.getElementById('lesson-challenge').textContent = lesson.challenge;
    codeInput.value = lesson.example;
    output.textContent = "";
    output.className = "";
    
    // Scroll suave para o topo do conteúdo
    document.getElementById('lesson-content').scrollIntoView({ behavior: 'smooth' });
  };
  buttonsContainer.appendChild(btn);
});

function runCode() {
  const code = codeInput.value;
  const output = document.getElementById('output');
  
  // Limpar saída anterior
  output.textContent = '';
  output.className = '';
  
  try {
    // Criar um contexto isolado para o código
    const context = {
      console: {
        log: (...args) => {
          output.textContent += args.join(' ') + '\n';
        }
      }
    };
    
    // Executar o código no contexto isolado
    const result = new Function('context', `
      with(context) {
        ${code}
      }
    `)(context);
    
    const isValid = currentLesson.validate(code);
    
    if (isValid) {
      progress.markLessonComplete(currentLesson.title);
      updateLessonButtons();
      output.classList.add('success');
      notifications.show('Exercício concluído com sucesso!', 'success');
    } else {
      output.classList.add('warning');
      notifications.show('Código executado, mas não atende aos requisitos do exercício.', 'warning');
    }
    
    if (result !== undefined) {
      output.textContent += `\nResultado: ${result}`;
    }
    
    if (isValid && currentLesson.challenge) {
      output.textContent += `\n\nDesafio: ${currentLesson.challenge}`;
    }
  } catch (err) {
    output.classList.add('error');
    output.textContent = `❌ Erro: ${err.message}\n\nDica: Verifique a sintaxe do seu código.`;
    notifications.show('Erro ao executar o código.', 'error');
  }
}

function updateLessonButtons() {
  const buttons = document.querySelectorAll('#lesson-buttons button');
  buttons.forEach(btn => {
    const lessonTitle = btn.textContent;
    if (progress.isLessonComplete(lessonTitle)) {
      btn.classList.add('completed');
    } else {
      btn.classList.remove('completed');
    }
  });
}

// Adicionar funcionalidade de dicas
document.querySelector('.tooltip').addEventListener('click', () => {
  const hints = {
    jsIntro: "Experimente usar diferentes mensagens no console.log",
    variables: "Lembre-se que const não pode ser reatribuído",
    types: "JavaScript tem tipagem dinâmica",
    operadores: "Use parênteses para controlar a precedência",
    condicionais: "if/else pode ser encadeado",
    loops: "Cuidado com loops infinitos",
    funcoes: "Funções podem retornar outras funções",
    arrays: "Arrays são indexados a partir do 0",
    objetos: "Objetos podem conter outros objetos",
    funcoesAvancadas: "Arrow functions não têm seu próprio this",
    promessas: "Async/await é açúcar sintático para Promises",
    manipulaçãoDOM: "Use querySelector para seleção mais flexível",
    classes: "Classes são úteis para criar objetos com propriedades e métodos",
    modulos: "Módulos permitem dividir o código em arquivos separados",
    async: "JavaScript é single-threaded, mas usa callbacks, Promises e async/await para lidar com operações assíncronas",
    armazenamento: "O navegador oferece várias formas de armazenar dados localmente: localStorage, sessionStorage e cookies",
    expressoesRegulares: "Expressões regulares são padrões usados para corresponder combinações de caracteres em strings",
    integracaoHTML: "JavaScript pode ser integrado ao HTML de três formas principais: inline (diretamente no HTML), interno (usando a tag script) e externo (arquivo separado). A melhor prática é usar arquivos externos para manter o código organizado e reutilizável."
  };
  
  alert(hints[currentLesson?.title] || "Dica: Leia atentamente o exemplo e o exercício");
});

// Adicionar atalhos de teclado
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    runCode();
  }
  
  // Atalho para alternar tema
  if (e.ctrlKey && e.key === 't') {
    document.querySelector('.theme-toggle').click();
  }
  
  // Atalho para compartilhar
  if (e.ctrlKey && e.key === 's') {
    share.shareCode();
  }
});

// Inicializar a primeira lição
if (Object.keys(lessons).length > 0) {
  const firstLesson = Object.values(lessons)[0];
  const firstButton = document.querySelector('#lesson-buttons button');
  if (firstButton) {
    firstButton.click();
  }
}
