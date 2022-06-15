import { rest } from 'msw'


function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 50; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


export const Loginhandlers = [
  rest.post('/login', (req, res, ctx) => {
    const { password, email } = req.body

    return res(
      ctx.json({
        token: makeid(),
        password,
        email,

      })
    )
  }),
]

export const signupHandlers=[
   rest.post("/signup",(req,res,ctx)=>{
    const {business_name, business_category,business_email, account_name,business_phone }=req.body
       return res(
        ctx.json({
            business_name,
            business_email,
            business_category,
            business_phone,
            account_name
        })
       )
   })
]