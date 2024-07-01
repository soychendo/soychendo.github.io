
const Header = (): JSX.Element => {

  return (
    <header className="header">
    <div className="container">
      <div className="header__content">
        <div className="header__logo">
          Chendo
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="https://paypal.me/chendoec?country.x=EC&locale.x=es_XC" target="_blank">PayPal</a></li>
            <li><a href="https://www.patreon.com/chendo" target="_blank">Patreon</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export { Header }
