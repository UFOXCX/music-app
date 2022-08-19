import React from 'react'
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay , faPause, faForwrd , faBackward} from '@fortawesome/free-solid-svg-icons'

function PlayerControls() {
  return (
    <div className='c-player--controls'>
        <button className='skip-btn' >
            <fontAwesomeIcon iconn={faBackward} />
        </button>
        <button >
            <fontAwesomeIcon iconn={faForwrd} />
        </button>
    </div>
  )
}

export default PlayerControls