let Axios = require('axios')
const url = 'https://api.unsplash.com'
const headers = {
  // Authorization: 'Client-ID 3d64a4c88f3c9c8ed9be2af2b051b9dcd99b9bafd3c545952adb0ee2caf1c50d'
  Authorization: 'Client-ID 3787cd14cfe98cb2d3a5a32092b7d3b5bb6741ffe273d9337a9b53ff6139fcea'
}
let instance = Axios.create({
  headers
}
)
exports.loadLastest = (page, perPage) => {
  return instance.get(url + '/photos?page=' + page + '&per_page=' + perPage)
}

exports.loadUserLastest = (page, perPage, id) => {

  return instance.get(url + '/users/' + id + '/photos?page=' + page + '&per_page=' + perPage)
}
