import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const clock = <FontAwesomeIcon icon={faClock} />


function SecondsCounter({seconds}) {
    return (
        /*<div className="container bg-dark p-5 mt-5">
        <div className="row bg-dark w-50 justify-center">
            <div className="col-2 bg-secondary text-light border border-dark">{clock}</div>
            <div className="col-2 bg-secondary text-light border border-dark">{Math.floor(seconds / 10000) % 10}</div>
            <div className="col-2 bg-secondary text-light border border-dark">{Math.floor(seconds / 1000) % 10}</div>
            <div className="col-2 bg-secondary text-light border border-dark">{Math.floor(seconds / 100) % 10}</div>
            <div className="col-2 bg-secondary text-light border border-dark">{Math.floor(seconds / 10) % 10}</div>
            <div className="col-2 bg-secondary text-light border border-dark">{Math.floor(seconds / 1) % 10}</div>
        </div>
        </div>*/
        <div className="structure">
            <div className="digit clock">{clock}</div>
            <div className="digit">{Math.floor(seconds / 100000) % 10}</div>
            <div className="digit">{Math.floor(seconds / 10000) % 10}</div>
            <div className="digit">{Math.floor(seconds / 1000) % 10}</div>
            <div className="digit">{Math.floor(seconds / 100) % 10}</div>
            <div className="digit">{Math.floor(seconds / 10) % 10}</div>
            <div className="digit">{Math.floor(seconds / 1) % 10}</div>
        </div>
    
    )
}

export default SecondsCounter