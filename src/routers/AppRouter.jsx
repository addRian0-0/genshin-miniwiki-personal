import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Character from '../components/characters/CharacterContainer'
import GenshinApp from '../GenshinApp'

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route/> */}
        <Route path='character/:nameCharacter' element={<Character />} />
        <Route path='/*' element={<GenshinApp />} />
      </Routes>
    </BrowserRouter>
  )
}
