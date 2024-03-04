
const activityContainer = document.querySelector("#activity-container");
const savedActivitiesHeading = document.querySelector("h3");
const savedActivitiesContainer = document.querySelector("#saved-activities-container");

let activitiesArray = []

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

fetchAndSave()


const showActivity = (activity) => {
    const activityCard = document.createElement("div");
    const text = document.createElement("h4")
    text.innerHTML = "Aktivitet: <br></br>" + activity.activity;
    const saveBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "slett aktivitet"
    saveBtn.innerHTML = "lagre aktivitet"

    saveBtn.addEventListener("click", ()=>{
        saveActivity(activity) })
    activityCard.append(text, saveBtn, deleteBtn);
    activityContainer.append(activityCard)

} 

const saveActivity = (activity) => {
    activitiesArray = JSON.parse(localStorage.getItem("savedActivities")) || []
    activitiesArray.push(activity)

    localStorage.setItem("savedActivities", JSON.stringify(activitiesArray));
    
}

const showSavedActivity = () => {
    activitiesArray = JSON.parse(localStorage.getItem("savedActivities")) || []
    activitiesArray.forEach((activity, index) =>{
        const activityCard = document.createElement("div");
        const text = document.createElement("h4")

        text.innerHTML = "Aktivitet: <br></br>" + activity.activity;
        const saveBtn = document.createElement("button")
        saveBtn.innerHTML = "lagre aktivitet"

        activityCard.append(text)
        savedActivitiesContainer.append(activityCard)
    })
}
showSavedActivity()