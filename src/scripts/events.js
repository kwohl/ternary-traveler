import api from "./api.js"
import renderInterestPoints from "./dom.js"

const submitButton = document.querySelector("#submitButton")
const nameInput = document.querySelector("#interestName")
const descriptionInput = document.querySelector("#interestDescription")
const costInput = document.querySelector("#interestCost")
const placeInput = document.querySelector("#placeId")
const reviewInput = document.querySelector("#interestReview")

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
            'cost': costInput.value,
            'review': reviewInput.value
        }
        
        
            api.savePointOfInterest(newPointOfInterest)
                .then(api.getPointsOfInterest).then(renderInterestPoints)
        })
    },
    addOutputEventListeners() {
        outputField.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteButton--")) {
                const interestToDelete = event.target.id.split("--")[1]
                if (confirm("Would you really like to delete this point of interest?")) {
                    window.alert("You have deleted this point of interest.")
                    api.deletePointOfInterest(interestToDelete)
                    .then(api.getPointsOfInterest)
                    .then(renderInterestPoints)
                }
                
            }
            if(event.target.id.startsWith("editButton--")) {
                const interestToEdit = event.target.id.split("--")[1]
                api.updateFormFields(interestToEdit)
                const toEdit = document.querySelectorAll(".toEdit")
                const editArray = Array.from(toEdit)
                editArray.forEach(element => element.classList.toggle("hidden"))
                //TODO: create save button, add event listener
                const saveButton = document.querySelector("#saveButton")

                saveButton.addEventListener("click", () => {
                    api.editPointOfInterest(interestToEdit)
                    .then(api.getPointsOfInterest)
                    .then(renderInterestPoints)
                    editArray.forEach(element => element.classList.toggle("hidden"))
                })
            }
        })
    }
}

export default events