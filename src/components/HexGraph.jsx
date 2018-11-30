// HexGraph.jsx

import React, { Fragment } from 'react'
import HexBar from './HexBar'

export default ({ hex, muted, showText, children }) => {
  const [r, g, b] = hex
  return (
    <Fragment>
      <div
        className={`
          hex-graph
          ${muted ? 'muted' : ''}
        `}
      >
        <div className='bar-group'>
          <div className='item'>
            <HexBar hex={r} showText={showText} color='r' />
          </div>
          <div className='item'>
            <HexBar hex={g} showText={showText} color='g' />
          </div>
          <div className='item'>
            <HexBar hex={b} showText={showText} color='b' />
          </div>
        </div>

        {children}

      </div>

      <style jsx>{`
        .hex-graph {
          position: relative;
          width: 10em;
          height: 10em;
          /* padding: 2em; */
          border-radius: 50%;
          background: #${hex};
          &.muted {
            background: transparent;
          }
          .bar-group {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            /*width: 1.3em * 4.5;
            height: 1.3em * 4.5;*/
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
          }
          .item {
            margin: 0 .3em;
          }
        }
      `}</style>
  </Fragment>
  )
}
