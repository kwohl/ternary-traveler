const baseURL = "http://localhost:8088"

const api = {
    getAllPlaces() {
        return fetch(`${baseURL}/places`)
            .then(response => response.json())
    },
    getPointsOfInterest() {
        return fetch(`${baseURL}/interests`)
            .then(response => response.json())
    },
    savePointOfInterest(newInterest) {
        return fetch(`${baseURL}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        })
    },
    deletePointOfInterest(interestId) {
        return fetch(`${baseURL}/interests/${interestId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default api