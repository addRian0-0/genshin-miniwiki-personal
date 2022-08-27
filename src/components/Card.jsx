import { Link } from 'react-router-dom'

export default function Card ({ name, description, iconURL }) {
  return (
    <article className='style1 animate__animated animate__fadeIn'>
      <span className='image'>
        <img src={iconURL} alt='' />
      </span>
      <Link to={`/character/${name}`}>
        <h2>{name}</h2>
        <div className='content'>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  )
}
