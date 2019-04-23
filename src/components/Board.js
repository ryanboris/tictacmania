import React from 'react'
import Square from './Square'
import Scoreboard from './Scoreboard'

const Board = () => {
  const renderSquare = i => <Square value={i} />
  const renderScoreboard = // Tuple String -> Tuple Number -> JSX Scoreboard 
    ([p1, p2]=['You','The World'], [p1Score, p2Score]=[0,0]) => (
      <Scoreboard 
        p1={p1} 
        p2={p2} 
        p1Score={p1Score}
        p2Score={p2Score}
      />
    )
  const status = 'Next player: X'

  return (
    <div class="board">
      <div className="board-status">
        {renderScoreboard()} {/* The defaults kick in (look at the signature) */}
                             {/* Here's an example of how to use it: 
                              {renderScoreboard(['Ryan', 'The Law'], [0, 2])} */}
        {status}
        
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}


// -----Helpers------

function renderScoreboard([p1, p2], [p1Score, p2Score]) { 
  return (
    <Scoreboard 
      p1={p1} 
      p2={p2} 
      p1Score={p1Score}
      p2Score={p2Score}
    />
  )

}

export default Board
