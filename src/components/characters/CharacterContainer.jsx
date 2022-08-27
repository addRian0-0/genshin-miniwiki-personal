import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useGetCharacterQuery } from '../../store/api/characters'
import Footer from '../Footer'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Header from '../Header'
import InfoCharacter from './InfoCharacter'

export default function Character () {
  const { nameCharacter } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetCharacterQuery(nameCharacter)

  return (
    <div id='wrapper'>
      <Header />
      {/* Main */}
      <div id='main'>
        <div className='inner'>
          <header>
            <h1>{nameCharacter}</h1>
          </header>
        </div>
        {isLoading === true ? (
          <div className='loading-gen'>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <InfoCharacter character={data.payload.character} />
        )}
      </div>
      <Footer />
    </div>
  )
}
