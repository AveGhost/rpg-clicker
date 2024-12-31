import './App.css'
import PlayerInfo from './components/header/player-info.component'
import PlayerStats from './components/sidebar/player-stats.component'
import GameBorad from './components/content/game-board.component'
import { PlayerInfoProvider } from './context/player-info.context'
import { MonsterInfoProvider } from './context/monster-info.context'

function App() {

  return (
    <div className='container mx-auto py-6'>
      <div className='grid grid-cols-3 items-center'>
        <PlayerInfoProvider>
          <PlayerInfo />
          <PlayerStats />
          <MonsterInfoProvider>
            <GameBorad />
          </MonsterInfoProvider>
        </PlayerInfoProvider>
      </div>
    </div>
  )
}

export default App
