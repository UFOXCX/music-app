import React from 'react'

function Player(props) {
  return (
    <div>
        <audio></audio>
        <h4>Playing now</h4>
        {/* details */}
        {/* controls */}
        <p><strong>Next Up</strong> {props.nextSong.title}</p>
    </div>
  )
}

export default Player