// Hexbar.jsx

import React, { Fragment } from 'react'

export default ({ hex, showText, color }) => {
  const height = Math.round(parseInt(hex, 16) / 15 * 100)

  return (
    <Fragment>
      <div className='hex-bar'>
        <div className='bar-container'>
          <div className='bar'/>
        </div>
      </div>
      {showText &&
        <h4 className={`text ${color ? color : ''}`}>{hex}</h4>
      }

      <style jsx>{`
        $size: 1.3em;
        .hex-bar {
          position: relative;
          width: $size;
          height: $size * 4.5;
          box-sizing: content-box;
          border-radius: $size / 2;
          background: #333;
          box-sizing: content-box;
          .bar-container {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100%;
            width: 100%;
            border-top: $size / 2 solid transparent;
            border-bottom: $size / 2 solid transparent; 
          }
          .bar {
            box-sizing: content-box;
            position: absolute;
            left: 0;
            bottom: $size / -2;
            height: ${height + '%'};
            width: 100%;
            background: #fff;
            border-radius: $size / 2;
            border-top: $size / 2 solid #fff;
            border-bottom: $size / 2 solid #fff;
            transition: height .3s;
          }
        }
        .text {
          text-align: center;
          margin: .1em 0 0;
          text-transform: uppercase;
          font-size: 1.3em;
          font-weight: 500;
          &.r {
            color: #f00;
          }
          &.g {
            color: #0f0;
          }
          &.b {
            color: #00f;
          }
        }
      `}</style>
    </Fragment>
  )
}
