import api from "./api.js"
import renderInterestPoints from "./dom.js"

const submitButton = document.querySelector("#submitButton")
const nameInput = document.querySelector("#interestName")
const descriptionInput = document.querySelector("#interestDescription")
const costInput = document.querySelector("#interestCost")
const placeInput = document.querySelector("#placeId")

const outputField = document.querySelector(".output")

const events = {
    addSubmitEventListener() {
        submitButton.addEventListener("click", () => {
         let placeId = 0
            if (placeInput.value === "italy") {
             placeId = 1
         }   else if (placeInput.value === "switzerland") {
             placeId = 2
         } else if (placeInput.value === "france") {
             placeId = 3
         }
            const newPointOfInterest = { 
            'placeId': placeId, 
            'name': nameInput.value, 
            'description': descriptionInput.value, 
            'cost': costInput.value
        }
        
        
            api.savePointOfInterest(newPointOfInterest)
                .then(api.getPointsOfInterest).then(renderInterestPoints)
        })
    },
    addOutputEventListeners() {
        outputField.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteButton--")) {
                const interestToDelete = event.target.id.split("--")[1]

                api.deletePointOfInterest(interestToDelete)
                    .then(api.getPointsOfInterest)
                    .then(renderInterestPoints)
            }
        })
    }
}

export default events