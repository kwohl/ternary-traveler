import makeInterestComponent from "./factory.js"
import api from "./api.js"


const renderInterestPoints = (interests) => {
    const italyContainer = document.querySelector("#italyPoints")
    const switzerlandContainer = document.querySelector("#switzerlandPoints")
    const franceContainer = document.querySelector("#francePoints")
    italyContainer.textContent = ""
    switzerlandContainer.textContent = ""
    franceContainer.textContent = ""
    interests.forEach(interest => {
        const interestHtml = makeInterestComponent(interest);
        if (interest.placeId === 1) {
            italyContainer.innerHTML += interestHtml;
        } else if (interest.placeId === 2) {
            
            switzerlandContainer.innerHTML += interestHtml;
        } else if (interest.placeId === 3) {
            
            franceContainer.innerHTML += interestHtml;
        }
    })
}

export default renderInterestPoints