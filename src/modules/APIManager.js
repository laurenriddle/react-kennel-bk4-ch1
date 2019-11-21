const remoteURL = "http://localhost:5002"

export default {
  get(id, endpoint, expand) {
    return fetch(`${remoteURL}/${endpoint}/${id}?_expand=${expand}`).then(result => result.json())
  },
  getAll(endpoint) {
    return fetch(`${remoteURL}/${endpoint}`).then(result => result.json())
  },
  delete(id, endpoint) {
    return fetch(`${remoteURL}/${endpoint}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  getAllWithExpand(endpoint, expand) {
    return fetch(`${remoteURL}/${endpoint}?_expand=${expand}`).then(result => result.json())

  }
} 