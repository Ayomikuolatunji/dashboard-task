import { rest } from 'msw'

export const Loginhandlers = [
  rest.post('/login', (req, res, ctx) => {
    const { password, email } = req.body

    return res(
      ctx.json({
        token: Math.random()*100,
        password,
        email,

      })
    )
  }),
]