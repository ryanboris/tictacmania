import React from 'react'
import '../scss/components/_scoreboard.scss'
import '../scss/components/_board.scss'


export default function Scoreboard({p1, p2, p1Score, p2Score}) {
    return (
        <div className="scoreboard">
            <span id="p1" clas="score-panel">{p1}: {p1Score}</span>
            |
            <span id="p2" class="score-panel">{p2}: {p2Score}</span>
        </div>
    )
}