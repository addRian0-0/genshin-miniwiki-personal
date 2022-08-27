import ContainerCards from './ContainerCards'
import Footer from './Footer'
import Header from './Header'

export default function MainContainer () {
  return (
    <div id='wrapper'>
      <Header />
      {/* Main */}
      <div id='main'>
        <div className='inner'>
          <header>
            <h1>Genshin Impact MiniWikiPersonal</h1>
            <p className='add-p'>
              Una pequeña wiki personal sobre Genshin Impact que además sirve
              para ensayar conceptos y tecnologías de desarrollo web.
            </p>
          </header>
          <ContainerCards/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

