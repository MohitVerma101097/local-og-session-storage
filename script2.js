
const activityContainer = document.querySelector("#activity-container");
const savedActivitiesHeading = document.querySelector("h3");
const savedActivitiesContainer = document.querySelector("#saved-activities-container");

const fetchActivty = async() =>{
    const request = await fetch("http://www.boredapi.com/api/activity/")
    const result = await request.json()
    return result
}

const fetchAndSave = async() =>{
    try {
        const activity = await fetchActivty()
        showActivity(activity)
    } catch (error) {
        console.error("klarte ikke å hente..", error)
    }
}

const showActivity = (activity) => {

} 
