// Lightness.jsx

import React, { Fragment } from 'react'
import HexBar from './HexBar'
import HexGraph from './HexGraph'

export default ({ hex, lightness, average }) => {
  const isActive = value => lightness === value ? 'active' : ''
  return <Fragment>
      <section className='lightness'>
        <h1 className='title'>Lightness</h1>
        <HexGraph hex={hex} muted>
          <div className='range-container'>
            <div className={`range light ${isActive('light')}`}>
              <span className='label'>Light</span>
            </div>
            <div className={`range middle ${isActive('middle')}`}>
              <span className='label'>Middle</span>
            </div>
            <div className={`range dark ${isActive('dark')}`}>
              <span className='label'>Dark</span>
            </div>
            <div className='range average' style={{ bottom: `${(average / 15) * 100}%` }} />  
          </div>
        </HexGraph>
      </section>
      <style jsx>{`
        .lightness {
          position: relative;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          /* margin: 5em 0; */
          font-size: 2em;
          background: #222;
          .title {
            position: absolute;
            left: .2em;
            top: .2em;
            margin: 0;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 3.2em;
            color: #000;
            user-select: none;
          }
          .range-container {
            position: absolute;
            left: 50%;
            top: 2em + 0.65em;
            bottom: 2em + 0.65em;
            transform: translateX(-50%);
          }
          .range {
            position: absolute;
            left: 50%;
            width: 16em;
            margin-left: -8em;
            border: none;
            border-top: 4px dotted #fff;
            &.light {
              top: 0;
            }
            &.middle {
              top: 50%;
              transform: translateY(-50%);
            }
            &.dark {
              bottom: 0;
            }
            &.average {
              top: auto;
              bottom: 0;
              border-top: 4px solid #fff;
            }
            &.active {
              .label {
                color: #fff;
              }
            }
            .label {
              color: #888;
              font-size: 1em;
              position: absolute;
              left: 103%;
              top: -0.8em;
            }
          }
        }`}</style>
    </Fragment>;
}
