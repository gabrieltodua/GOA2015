// 2




// 3

function sayhi(hi){

    return new Promise((resolve, reject) => {


        if (hi === "Hello")

            resolve(`success : ${hi}`)

        else

            reject(`error : ${hi}`)



    })
}

sayhi("Hello")
    .then((hi) => console.log(hi))
