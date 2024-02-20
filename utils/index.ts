import * as api from './api'

import { convertToForecast } from './convertToForecast'
import { createGradientByTemp } from './createGradientByTemp'
import { normalizeTemp } from './normalizeTemp'
import { pruneCurrent } from './pruneCurrent'

export { api, convertToForecast, pruneCurrent, normalizeTemp, createGradientByTemp }
