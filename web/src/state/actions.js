import { put, takeLatest } from 'redux-saga/effects'

import LocalStorage from '../utilities/local-storage/token'
import TYPES from './types'

export function resetAllData() {
  return {
    type: TYPES.RESET_ALL_USER_DATA_REQUEST
  }
}

export function* executeResetAllData() {
  LocalStorage.remove()
  yield put(resetAllDataSuccess())
}

export function resetAllDataSuccess(data) {
  return {
    type: TYPES.RESET_ALL_USER_DATA_SUCCESS
  }
}

const sagas = [
  takeLatest(TYPES.RESET_ALL_USER_DATA_REQUEST, executeResetAllData)
]

export default sagas
export const name = 'rootUserActions'
