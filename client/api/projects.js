export default function handler(req, res) {
  res.status(200).json([
    { title: 'Maranhão Livre da Fome', image: '/masemfome.png', url: 'https://maranhaolivredafome.saude.ma.gov.br/', stack: 'PHP, Laravel, JavaScript, MariaDB', cta: 'Ver no Navegador' },
    { title: 'FitAi', image: '/fitai.jpeg', url: 'https://github.com/wesleygatinho/G1_FITAI.git', stack: 'Python, Flutter, Postgres', cta: 'Ver no GitHub' },
    { title: 'Monitora Saúde', image: '/monitora-saude.png', url: 'https://monitora.saude.ma.gov.br/', stack: 'Laravel 10, PHP, Bootstrap 5, JavaScript, Postgres', cta: 'Ver no Navegador' },
    { title: 'Biblion', image: '/biblion.png', url: 'https://github.com/luc4svale/biblion.git', stack: 'Python, Flask, SB Admin, JavaScript, SQLite', cta: 'Ver no GitHub' },
    { title: 'SUI', image: '/sui.png', url: 'https://sis-unificado.vercel.app/', stack: 'HTML, CSS, JavaScript, Node, Express, Postgres', cta: 'Ver no Navegador' },
    { title: 'Cadserv', image: '/cadserv.png', url: 'https://cadserv.saude.ma.gov.br/', stack: 'Laravel 10, PHP, Bootstrap 5.3, JavaScript, MariaDB', cta: 'Ver no Navegador' },
    { title: 'To-Do-App', image: '/to-do-app.png', url: 'https://github.com/andreluisaguiar/to-do-app.git', stack: 'Flask, Python, HTML, Bootstrap, Postgres', cta: 'Ver no GitHub' },
    { title: 'Finance Tracker', image: '/finance-tracker.png', url: 'https://github.com/andreluisaguiar/finance-tracker.git', stack: 'Flask, Python, Bootstrap 5, CSS, SQLite', cta: 'Ver no GitHub' },
    { title: 'Gerenciador de Tarefas', image: '/gerenciador-de-tarefas.png', url: 'https://github.com/andreluisaguiar/GerenciadorDeTarefas.git', stack: 'Python, Streamlit', cta: 'Ver no GitHub' },
    { title: 'Super Mario Bros', image: '/super-mario-bros.jpg', url: 'https://andreluisaguiar.github.io/Projeto-Mario/', stack: 'HTML, CSS, JavaScript', cta: 'Ver no GitHub Pages' }
  ])
}


