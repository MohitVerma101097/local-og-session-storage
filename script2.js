const fetchActivty = async() =>{
    const request = await fetch("http://www.boredapi.com/api/activity/")
    const result = request.json()
    console.log(result)
}

fetchActivty()