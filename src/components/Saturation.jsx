// Saturation.jsx

import React, { Fragment } from 'react'
import HexGraph from './HexGraph'

export default ({ hex, toppest, lowest, saturation }) => {
  const isActive = value => saturation === value ? 'active' : ''
  return (
    <Fragment>
      <section className='saturation'>
        <h1 className='title'>Saturation</h1>
        <HexGraph hex={hex} muted>
          <div className='range-container'>
            <div className='range toppest' style={{ bottom: `${toppest}%` }}></div>
            <div className='range lowest' style={{ bottom: `${lowest}%` }}></div>
            <div className='rect' style={{ top: `${100 - toppest}%`, bottom: `${lowest}%`}}></div>
          </div>
        </HexGraph>
        <div className='labels'>
          <span className={`label ${isActive('saturated')}`}>
            <figure>
              <div style={{ height: '2em'}}/>
            </figure>
            Saturated
          </span>
          <span className={`label ${isActive('washed')}`}>
            <figure>
              <div style={{ height: `${11 / 15 * 2}em`}}/>
            </figure>
            Washed
          </span>
          <span className={`label ${isActive('muted')}`}>
            <figure>
              <div style={{ height: `${2 / 15 * 2}em`}}/>
            </figure>
            Muted
          </span>
        </div>
      </section>
      <style jsx>{`
        .saturation{
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          /* margin: 5em 0; */
          font-size: 2em;
          .title {
            position: absolute;
            left: .2em;
            top: .2em;
            margin: 0;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 3.2em;
            color: #222;
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
            margin: 0 0 0 -8em;
            border: none;
            border-top: 4px dashed #fff;
          }
          .rect {
            position: absolute;
            width: 2em;
            left: 50%;
            margin-left: 6em;
            background: rgba(136, 136, 136, .8);
            &:before {
              position: absolute;
              left: 0;
              top: -4px;
              display: block;
              content: '';
              width: 100%;
              height: 4px;
              background: rgba(136, 136, 136, .8);
            }
          }
          .labels {
            display: flex;
            flex-flow: row nowrap;
            padding: 1em 0;
            .label {
              display: flex;
              flex-flow: row nowrap;
              justify-content: center;
              align-items: center;
              padding: 0 1em;
              color: #888;
              &.active {
                color: #fff;
                figure div {
                  background: #fff;
                }
              }
              figure {
                width: 1em;
                margin: 0 .3em 0 0;
                display: inline-block;
                div {
                  background: #888;
                }
              }
            }
          }
        }
      `}</style>
    </Fragment>
  );
}
