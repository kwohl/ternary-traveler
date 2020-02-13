import api from "./api.js"
import events from "./events.js"
import renderInterestPoints from "./dom.js"

events.addSubmitEventListener()

api.getPointsOfInterest().then(renderInterestPoints).then(events.addOutputEventListeners)
// alternative way to do the above 
// api.getPointsOfInterest().then(data => renderInterestPoints(data))





