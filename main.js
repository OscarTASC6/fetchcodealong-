// fetch data from URL//

const url = "https://randomuser.me/api"

function anyFunctoinThatDoesALotOfSuff(obj){
 const potrait = document.createElement("img")
        potrait.alt = "Face Image Large"
        potrait.src = obj.picture.large;
        document.querySelector("body").appendChild(potrait)
    }



fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (myJson) {
        const data = myJson.results[0]
        // console.log("Data object; ", data)
        // const potrait = document.createElement("img")
        // potrait.alt = "Face Image Large"
        // potrait.src = data.picture.large;
        // document.querySelector("body").appendChild(potrait)

        //ESCAPE FROM ALZATRAZ

        anyFunctoinThatDoesALotOfSuff(data);
    });

