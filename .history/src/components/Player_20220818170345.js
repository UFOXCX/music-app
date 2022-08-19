import React from 'react'
import PlayerDetails from './PlayerDetails'

function Player(props) {
  return (
    <div>
        <audio></audio>
        <h4>Playing now</h4>
        <PlayerDetails />
        {/* controls */}
        <p><strong>Next Up</strong> {props.nextSong.title} by {props.nextSong.artist}</p>
    </div>
  )
}

export default Player