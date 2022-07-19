async function getIp() {
    const response = await fetch("http://ip.jsontest.com/") //Fetching a response object from an API Endpoint, and storing it in a response variable
    const data = await response.json() // Retrieving the JSON Object that said response, and storing it in the data variable
    return (data.ip); // Access the values in the data JSON Object by their keys
}

async function getHeaders() {
    const response = await fetch("http://headers.jsontest.com/")
    const data = await response.json()
    // Concatenate several pieces of the data JSON Object to form a string
    let out = "Host: " + data["Host"]
        + "<br>Accept Language: " + data["Accept-Language"]
        + "<br>Accept Charset: " + data["Accept-Charset"]
        + "<br>Accept: " + data["Accept"]
    return out; // Return said string
}

async function getDate() {
    const response = await fetch("http://date.jsontest.com/")
    const data = await response.json()
    let out = "Current Date/Time: " + data["date"]+ " " + data.time
    return out;
}

async function startTimer()
{
    const time = await getDate()
    timeElem = document.getElementById("timer")
    timeElem.innerHTML = time
}

function validate()
{
    let userText = document.getElementById("userText").value // Get just the text from input
    const output = document.getElementById( "valid")
    try {
    let box = JSON.parse(userText)
        output.innerHTML = ""
    }
    catch(error) {
    output.innerHTML = error
    }
    /*const response = await fetch("http://validate.jsontest.com/?json="+userText)
    const data = await response.json()
    if (data.validate)
    {
        validateElem = document.getElementById("valid")
        validateElem.innerHTML = "This is valid JSON! Good Job!"
    }
    else
    {
        validateElem = document.getElementById("valid")
        validateElem.innerHTML = "This is NOT valid JSON! " +
            "<br> Input: " + userText +
        "<br> Error: " + data.error

    }*/
}


async function getHash()
{
    let md = document.getElementById("hash").value // Get just the text from input
    const response = await fetch("http://md5.jsontest.com/?text="+md)
    const data = await response.json()

    mdElem = document.getElementById("outputHash")
    mdElem.innerHTML = "MD5: " + data["md5"]
}


async function run() {
    const ip = await getIp()
    addyElement = document.getElementById("ip")
    addyElement.innerHTML = ip

    const head = await getHeaders()
    headerElem = document.getElementById("headers")
    headerElem.innerHTML = head

    setInterval(startTimer,1000)


}


run()




