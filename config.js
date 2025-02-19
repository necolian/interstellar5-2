
let config;

const challenge = process.env.CHALLENGE || false

config["challenge"] = chalenge;

const user = process.env.USER;

const password = process.env.PASSWORD;
if (user){
  if (password){
    config["users"][user] = password;
  }
}



export default config
