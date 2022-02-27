import {
  SET_INFORMATION
} from './mutation-types'

export const setInformation = ({ commit }, information) => {
  commit(SET_INFORMATION, information)
}

export default {
  setInformation
}
