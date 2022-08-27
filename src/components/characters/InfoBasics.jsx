export default function InfoBasics ({ character }) {
  return (
    <div className='info-basics'>
      <div className='info-section'>
        <h3>{character.title}</h3>
        <p>{character.description}</p>
      </div>
      {character.element ? (
        <div className='info-section'>
          <h3>Element</h3>
          <p>{character.element}</p>
        </div>
      ) : (
        ''
      )}
      {character.weaponType ? (
        <div className='info-section'>
          <h3>Weapon</h3>
          <p>{character.weaponType}</p>
        </div>
      ) : (
        ''
      )}
      {character.nation ? (
        <div className='info-section'>
          <h3>Nation</h3>
          <p>{character.nation}</p>
        </div>
      ) : (
        ''
      )}
      {character.affiliation ? (
        <div className='info-section'>
          <h3>Affiliation</h3>
          <p>{character.affiliation}</p>
        </div>
      ) : (
        ''
      )}
      {character.specialDish ? (
        <div className='info-section'>
          <h3>Special dish</h3>
          <p>{character.specialDish}</p>
        </div>
      ) : (
        ''
      )}
      {character.constellation ? (
        <div className='info-section'>
          <h3>Constellation</h3>
          <p>{character.constellation}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
