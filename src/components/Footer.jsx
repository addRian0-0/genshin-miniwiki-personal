export default function Footer () {
  return (
    <>
      {/* Footer */}
      <footer id='footer'>
        <div className='inner'>
          <section>
            <h2>Acerca de</h2>
            <p>
              Una pequeña wiki personal sobre Genshin Impact que además sirve
              para ensayar conceptos y tecnologías de desarrollo web.
              <br />
              Desarrollada con:
            </p>
            <ul>
              <li>React</li>
              <li>Redux (RTK)</li>
              <li>Template HTML5up</li>
            </ul>
          </section>
          <section>
            <h2>Follow</h2>
            <ul className='icons'>
              <li>
                <a
                  href='https://github.com/addRian0-0/'
                  className='icon brands style2 fa-github'
                >
                  <span className='label'>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/c_addriann/'
                  className='icon brands style2 fa-instagram'
                >
                  <span className='label'>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href='https://open.spotify.com/user/musicplay121316?si=76c6e9f7327a4545'
                  className='icon brands style2 fa-spotify'
                >
                  <span className='label'>Spotify</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  )
}
