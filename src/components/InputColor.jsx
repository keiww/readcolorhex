// InputColor.jsx

import React, { Fragment, useState, useEffect } from 'react'
import { isHex } from '../utils'
import { useHashChange } from '../hooks'

export default ({ value: initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue)

  const updateInput = function (value) {
    // not hex
    if (value && (value.length > 3 || !isHex(value))) {
      return 
    }
    setValue(value)
    window.location.hash = value
    // 3 digits or 6 digits
    if (value.length === 3 || value.length === 6) {
      onChange(value)
    }
  }

  const updateHexByHash = function () {
    updateInput(window.location.hash.replace(/^#/g, ''))
  }

  // cDM
  useEffect(() => {
    updateHexByHash()
  }, [])

  // register hash change handler
  useHashChange(updateHexByHash)

  return (
    <Fragment>
      <section className='section-input-color'>
        <label className='label'>
          #<input className='input' value={value} onChange={e => updateInput(e.target.value)} />
        </label>
      </section>

      <style jsx>{`
        .section-input-color {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          min-height: 100vh;
          font-size: 8vw;
          background: #222;
          .label {
            font-weight: bold;
          }
          .input {
            -webkit-apperance: none;
            width: 3em;
            margin-left: 1rem;
            font-size: 1em;
            font-family: Futura, sans-serif;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            background: none;
            outline: none;
            border: none;
            border-bottom: 3px solid #aaa;
            transition: border-color .3s;
            &:focus {
              border-color: #fff;
            }
          }
        }
     `}</style>
    </Fragment>
  )
}
