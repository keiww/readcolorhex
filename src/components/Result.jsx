import React, { Fragment } from 'react'

export default ({ hex, closestColor, lightness, saturation }) => {
  console.log(lightness, saturation, closestColor)
  return (
    <Fragment>
      <section className='result'>
        <h1 className='hex'>#{hex}</h1>
        <p className='name'>{lightness} {saturation} {closestColor}</p>
      </section>
      <style jsx>{`
        .result {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          width: 100%;
          min-height: 100vh;
          padding: 2em;
          background: #${hex};
          font-size: 4em;
          text-align: center;
          .hex {
            text-transform: uppercase;
            margin-bottom: .1em;
          }
          .name {
            text-transform: capitalize;
          }
        }
      `}
      </style>
    </Fragment>
  )
}
