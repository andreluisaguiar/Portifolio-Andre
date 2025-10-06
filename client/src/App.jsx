import './App.css'
import { useEffect, useState } from 'react'

const defaultProfile = {
  name: 'André Luis Aguiar',
  intro:
    'Desenvolvedor de Software com foco em Backend e estudante de Engenharia da Computação (UFMA).',
  summary:
    'Experiência em soluções para gestão pública e acadêmica, com foco em impacto e eficiência.',
  tech: 'PHP (Laravel), Python, JavaScript, Bootstrap e bancos de dados relacionais.'
}

const defaultProjects = [
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
]

function Header() {
  return (
    <header className="cabecalho">
      <a href="#" className="brand">André Aguiar</a>
      <nav className="menu">
        <ul>
          <li>
            <a className="menu-link" href="#projetos">Projetos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

function Home({ profile }) {
  return (
    <section className="home">
      <div className="informacoes">
        <h1>Olá! Sou {profile?.name}</h1>
        <p>{profile?.intro}</p>
        <p>{profile?.summary}</p>
        <p>
          Principais tecnologias: <strong>{profile?.tech}</strong>
        </p>
        <div style={{ display:'flex', gap:12, marginTop:16 }}>
          <a className="btn-mostrar-projetos" href="#projetos">Ver projetos</a>
          <a className="btn-mostrar-projetos" href="https://github.com/Andre-Luis-Aguiar" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <ul className="redes-sociais">
          <li>
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-luis-aguiar-796977191/"
              title="ir para o linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+5599870295331"
              title="ir para whatsapp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Andre-Luis-Aguiar"
              title="Perfil GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/andreaguiarr_/"
              title="Perfil no Instagram"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container-foto">
        <div className="foto sombra-interna">
          <img src="/foto-perfil-andre.png" alt="foto do portifólio do André" />
        </div>
      </div>
    </section>
  )
}

function Projects({ items }) {
  const [limit, setLimit] = useState(6)
  const visible = items?.slice(0, limit)
  const hasMore = (items?.length || 0) > limit
  return (
    <section className="projetos" id="projetos">
      <h2 className="titulo">Meus Projetos</h2>
      <div className="container-projetos">
        {visible?.map((p) => (
          <div key={p.title} className="projeto ativo">
            <a href={p.url} rel="noopener noreferrer" target="_blank">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <div className="informacoes-projeto">
                <p>Projeto feito usando {p.stack}</p>
                <p>🔗 {p.cta}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      {hasMore ? (
        <button className="btn-mostrar-projetos" onClick={() => setLimit(limit + 6)}>Mostrar mais</button>
      ) : (
        items?.length > 6 && (
          <button className="btn-mostrar-projetos" onClick={() => setLimit(6)}>Mostrar menos</button>
        )
      )}
    </section>
  )
}

function App() {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/profile')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then(setProfile)
      .catch(() => setProfile(defaultProfile))

    fetch('/api/projects')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then(setProjects)
      .catch(() => setProjects(defaultProjects))
  }, [])

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <Header />
      <Home profile={profile} />
      <Projects items={projects} />
    </div>
  )
}

export default App
