export default class Api {
  CheckWinner (values) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          didWin: Math.random() >= 0.1
        })
      }, 100)
    })
  }
}
