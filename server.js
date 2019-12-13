const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(express.static('.')) // serve static files from root folder

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.options('*')

app.get('/jwt', function (req, res) {
  req.query.email && req.query.email.replace(' ', '+') // support emails with '+' symbol
  console.log(`query`, req.query)
  const jwtToken = generateJWTToken(req.query.email, req.query.name, req.query.externalId, req.query.zendeskChatWidgetVisitorAuthenticationSharedSecret)
  console.log(`jwtToken: ${jwtToken}`)
  res.json({token: jwtToken})
})

app.post('/jwt', function (req, res) {
  req.body.email && req.body.email.replace(' ', '+') // support emails with '+' symbol
  console.log(`body`, req.body)
  const jwtToken = generateJWTToken(req.body.email, req.body.name, req.body.externalId, req.body.zendeskChatWidgetVisitorAuthenticationSharedSecret)
  console.log(`jwtToken: ${jwtToken}`)
  res.json({token: jwtToken})
})

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`)
})

function generateJWTToken(email, name, externalId, zendeskChatWidgetVisitorAuthenticationSharedSecret) {
  const nowTimestamp = new Date().getTime()
  // const nextDayTimestamp = (new Date()).setTime(nowTimestamp + 24 * 60 * 60 * 1000)

  const payload = {
    name: name || 'Jerry Mouse',
    email: email || 'jerry.mouse@test.test',
    iat: Math.floor(nowTimestamp / 1000),
    //  exp: Math.floor( nextDayTimestamp / 1000),
    external_id: externalId || '110011'
  }

  return jwt.sign(payload, zendeskChatWidgetVisitorAuthenticationSharedSecret)
}
