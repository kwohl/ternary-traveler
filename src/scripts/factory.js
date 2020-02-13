

const makeInterestComponent = (pointOfInterest) => {
    //HTML structure for a point of interest
    return `
    <section class="interest">
    <h4>${pointOfInterest.name}</h4>
    <p>${pointOfInterest.description}</p>
    <p>Cost: $${pointOfInterest.cost}</p>
    <button id="deleteButton--${pointOfInterest.id}">Delete</button>
    `
}

export default makeInterestComponent