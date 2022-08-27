import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useGetCharactersQuery } from '../store/api/characters'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import PaginationDefault from './characters/PaginationDefault'
import { matchCaracter } from '../helpers/matchCharacter'
import { createArrayPagination } from '../helpers/createArrayPagination'

function ContainerCards () {
  const [pagination, setPagination] = useState([[]])
  const [pageActual, setPageActual] = useState(0)
  const { data, isLoading } = useGetCharactersQuery()
  const [termino, setTermino] = useState('')

  const createPagination = () => {
    if (isLoading === false) {
      const arrayP = createArrayPagination(data.payload.characters)
      setPagination(arrayP)
    }
  }

  const changePage = toPage => {
    setPageActual(toPage)
  }

  const matchCharactersF = () => {
    const coincidencias = matchCaracter(termino, data.payload.characters)
    const arrayCoincidencias = createArrayPagination(coincidencias)
    /* console.log(arrayCoincidencias) */
    setPagination(arrayCoincidencias)
  }

  useEffect(() => {
    createPagination()
  }, [data])

  return (
    <>
      <h3>Page {pageActual}</h3>
      {isLoading === false ? (
        <>
          <Autocomplete
            freeSolo
            id='free-solo-2-demo'
            disableClearable
            sx={{ marginBottom: '10px' }}
            options={data.payload.characters.map(character => character.name)}
            onChange={(event, termino) => setTermino(termino)}
            renderInput={params => (
              <TextField
                {...params}
                label='Buscar personaje'
                onChange={e => setTermino(e.target.value)}
                color='warning'
                InputProps={{
                  ...params.InputProps,
                  type: 'search'
                }}
              />
            )}
          />
          <button
            onClick={matchCharactersF}
            style={{ marginBottom: '30px' }}
            className='button'
          >
            Buscar
          </button>
        </>
      ) : (
        ''
      )}
      <section className='tiles'>
        {/* Si ya termino de cargar entonces... */}
        {isLoading === true ? (
          <div className='loading-gen'>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          /* Mientras la pagincacion por default este activa */
          <PaginationDefault pagination={pagination} pageActual={pageActual} />
        )}
      </section>

      {/* Mientras la pagincacion por default este activa  */}
      <div className='pagination'>
        {pagination.map(p => {
          return (
            <div
              onClick={() => changePage(pagination.indexOf(p))}
              key={pagination.indexOf(p)}
              className='page'
            >
              {' '}
              {pagination.indexOf(p)}{' '}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ContainerCards
