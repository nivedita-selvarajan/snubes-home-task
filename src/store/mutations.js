import {
  SET_INFORMATION
} from './mutation-types'

export default {
  [SET_INFORMATION] (state, value) {
    state.info = value
  }
}
