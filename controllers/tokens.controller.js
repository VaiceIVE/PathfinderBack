const crypto = require("crypto")

const tokenKey="1rs7-4424-vai5-1414"

var appnum = 0

const head = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'jwt' })
  ).toString('base64');

class TokenController
{
    generateAppToken(req, res)
    {
        
        const data = JSON.stringify({"name": req.name, "id": appnum})
        appnum += 1;
        let body = Buffer.from(data).toString(
            'base64'
          )
        let signature = crypto.createHmac('SHA256', tokenKey)
        .update(`${head}.${body}`)
        .digest('base64')
        console.log(signature)
        res.json(signature)
    }


}

module.exports = new TokenController()