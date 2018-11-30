
// Palette.jsx

import React, { Fragment } from 'react'

import HexGraph from './HexGraph'
import { BASE_COLOR_HEXES, BASE_COLOR_NAMES } from '../consts'
import { getCircleX, getCircleY } from '../utils'

const circleLayout = function(idx, distance) {
  const radians = idx / BASE_COLOR_HEXES.length * Math.PI * 2 - Math.PI * .5
  let x = getCircleX(radians, distance)
  let y = getCircleY(radians, distance)
  return { transform: `translate(${x}%, ${y}%)` }
}

const circleName = function(idx, distance) {
  const radians = idx / BASE_COLOR_HEXES.length * Math.PI * 2 - Math.PI * .5
  let x = getCircleX(radians, distance)
  let y = getCircleY(radians, distance)
  return { margin: `${y}em 0 0 ${x}em` }
}

export default ({ hex, closestHex }) => {
  return (
    <Fragment>
      <section className='palette'>
        <h1 className='title'>Hue</h1>
        {BASE_COLOR_HEXES.map((_hex, idx) =>
          <div
            key={_hex}
            className={`hex-container ${closestHex === _hex ? 'closest' : ''}`}
            style={circleLayout(idx, 200)}
          >
            <HexGraph hex={_hex} />
          </div>
        )}
        {
          BASE_COLOR_NAMES.map((name, idx) =>
            <h3
              key={idx}
              className='color-name'
              style={circleName(idx, 22.5)}
            >
              {name}
            </h3>
          )
        }
        <div className='preview'>
          <HexGraph
            hex={hex}
            muted
            showText
          />
        </div>
      </section>

      <style jsx>{`
        $border: .7em;
        .palette {
          min-height: 100vh;
          position: relative;
          .title {
            position: absolute;
            left: .2em;
            top: .2em;
            margin: 0;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 6.4em;
            color: #222;
            user-select: none;
          }
          .hex-container {
            position: absolute;
            left: 50%;
            top: 50%;
            font-size: .8em;
            margin-left: -5em - $border;
            margin-top: -5em - $border;
            border: $border solid transparent;
            border-radius: 50%;
            transition: border-color .3s;
            &.closest {
              border-color: #fff;
            }
          }
          .color-name {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            /*margin: (7.5em/-2) 0 0 (7.5em/-2);
            width: 7.5em;
            height: 7.5em;
            line-height: 7.5em;*/
            text-align: center;
          }
          .preview {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 2em;
          }
        }
      `}</style>
    </Fragment>
  )
}
