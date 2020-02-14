

const makeInterestComponent = (pointOfInterest) => {
    //HTML structure for a point of interest
    return `
    <section class="interest">
    <h4>${pointOfInterest.name}</h4>
    <p>${pointOfInterest.description}</p>
    <p class="cost">Cost: $${pointOfInterest.cost}</p>
    <p class="review">Review: ${pointOfInterest.review}</p>
    <button id="deleteButton--${pointOfInterest.id}">Delete</button>
    <button id="editButton--${pointOfInterest.id}">Edit</button>
    `
}

export default makeInterestComponent