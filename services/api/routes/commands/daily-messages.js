import { fetchMessage } from '../repositories/daily'

export async function randomDailyMessage() {
  const randomNumber = 1 + Math.floor(Math.random() * Math.floor(7))
  return fetchMessage(randomNumber)
}

