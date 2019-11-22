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

  },
  post(endpoint, newAnimal) {
    return fetch(`${remoteURL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
},
update(editedAnimal, endpoint) {
  return fetch(`${remoteURL}/${endpoint}/${editedAnimal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}
} 