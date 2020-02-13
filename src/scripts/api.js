const baseURL = "http://localhost:8088"

const api = {
    getAllPlaces() {
        return fetch(`${baseURL}/places`)
            .then(response => response.json())
    }
}

export default api