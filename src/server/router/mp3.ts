import { createRouter } from './context'
import { z } from 'zod'

export const mp3Router = createRouter().query('mp3', {
  input: z
    .object({
      text: z.string().nullish()
    })
    .nullish(),
  resolve({ input }) {
    return {
      greeting: `Hello ${input?.text ?? 'world'}`
    }
  }
})
