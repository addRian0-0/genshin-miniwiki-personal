import uid from 'tiny-uid'
import InfoBasics from './InfoBasics'

export default function InfoCharacter ({ character }) {
  return (
    <>
      <div className='container-info-character'>
        <div className='img'>
          <img
            className='animate__animated animate__fadeInDown'
            src={character.compressedImageURL}
            alt=''
          />
        </div>
        <div className='info animate__animated animate__fadeInUp '>
          <InfoBasics character={character} />
        </div>
      </div>
      <div className='container-seco'>
        <div>
          <h3>Constellations</h3>
          <div className='table-wrapper'>
            <table className='alt'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Unlock</th>
                </tr>
              </thead>
              <tbody>
                {character.constellations.map(c => {
                  return (
                    <tr key={uid()}>
                      <td>{c.name}</td>
                      <td>{c.description}</td>
                      <td>{c.unlock}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
