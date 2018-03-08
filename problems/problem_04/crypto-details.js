const axios = require('axios')

const cryptoDetails = async (symbols = []) => {
  let tickers = []
  axios({
    method: 'get',
    url: 'https://coinbin.org/coins',
  }).then((res) => {
    const coins = Object.values(res.data.coins);
    symbols.forEach(symbol => {
      tickers.push(coins.filter(data => data.ticker === symbol))
    })
    console.log(tickers);
  })
  return tickers
};
cryptoDetails(['eth', 'xrp'])

module.exports = { cryptoDetails }
