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
    },
    updateFormFields(interestId) {
        const hiddenInputId = document.querySelector("#hiddenInput")
        const interestNameInput = document.querySelector("#interestName")
        const interestDescriptionInput = document.querySelector("#interestDescription")
        const interestCostInput = document.querySelector("#interestCost")
        const interestReviewInput = document.querySelector("#interestReview")

        fetch(`${baseURL}/interests/${interestId}`)
            .then(response => response.json())
            .then(interest => {
                hiddenInputId.value = interest.id
                interestNameInput.value = interest.name
                interestDescriptionInput.value = interest.description
                interestCostInput.value = interest.cost
                interestReviewInput.value = interest.review
            })
    },
    editPointOfInterest(interestId) {
        const placeInput = document.querySelector("#placeId")
        let placeId = 0
            if (placeInput.value === "italy") {
             placeId = 1
         }   else if (placeInput.value === "switzerland") {
             placeId = 2
         } else if (placeInput.value === "france") {
             placeId = 3
         }
        const updatedObject = {
            'placeId': placeId, 
            'name': document.querySelector("#interestName").value, 
            'description': document.querySelector("#interestDescription").value, 
            'cost': document.querySelector("#interestCost").value,
            'review': document.querySelector("#interestReview").value
        }
        return fetch(`${baseURL}/interests/${interestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
    }
}

export default api