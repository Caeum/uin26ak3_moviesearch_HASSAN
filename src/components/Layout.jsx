import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          {/* Link til hjem-siden */}
          {/* Felles navigasjon som vises på alle sider, siden Layout brukes i App.jsx */}
          <Link to="/"> Hjem </Link>
        </nav>
      </header>

      {/* Children brukes til å rendre innholdet fra turene mellom header og footer, altså Home og Movie */}
      {children}

    </>
  )
}