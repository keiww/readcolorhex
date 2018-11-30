import React, { Fragment, useState } from 'react'

import InputColor from './components/InputColor'
import Palette from './components/Palette'
import Lightness from './components/Lightness'
import Saturation from './components/Saturation'
import Result from './components/Result'
import { BASE_COLOR_HEXES, BASE_COLOR_NAMES } from './consts'
import { getSaturation, getLightness, findClosestHex} from './utils'

export default () => {
  const [hex, setHex] = useState('')
  const closestHex = findClosestHex(hex, BASE_COLOR_HEXES)
  const closestColor = BASE_COLOR_NAMES[BASE_COLOR_HEXES.indexOf(closestHex)]
  const { average, lightness } = getLightness(hex)
  const { lowest, toppest, saturation } = getSaturation(hex)
  return (
    <Fragment>
      <InputColor value={hex} onChange={setHex} />
      <Palette {...{hex, closestHex}} />
      <Lightness {...{hex, average, lightness}} />
      <Saturation {...{hex, lowest, toppest, saturation}} />
      <Result {...{hex, closestColor, lightness, saturation }}/>

      <style jsx global>{`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font: 16px/1.5 Futura, sans-serif;
          color: #fff;
          background: #000;
        }
      `}</style>
    </Fragment>
  )
}


