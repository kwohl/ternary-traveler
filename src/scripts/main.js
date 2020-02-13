import api from "./api.js"
import events from "./events.js"
import renderInterestPoints from "./dom.js"


api.getPointsOfInterest().then(renderInterestPoints)
// alternative way to do the above 
// api.getPointsOfInterest().then(data => renderInterestPoints(data))
events.addSubmitEventListener()




