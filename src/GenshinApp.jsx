import { useGetCharactersQuery } from './store/api/characters'
import MainContainer from './components/MainContainer'
import "./assets/css/main.css"

export default function GenshinApp () {
  /* const {
    data: {
      payload: { characters }
    },
    isLoading
  } = useGetCharactersQuery() */
  /* const characters = useGetCharactersQuery(); */
  /* console.log(characters)  */

  return (
    <div>
      <MainContainer />
    </div>
  )
}
