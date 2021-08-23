let myRow = document.getElementById('myRow')

async function getMemes() {
    try {
        const URL = "https://api.imgflip.com/get_memes"
        const response = await axios.get(URL)
        const memes = response.data.data.memes

        let data = memes.map((meme) => {
            return (
                `
                <div class="card m-1" style="width:400px">
                    <img class="card-img-top" src=${meme.url} alt=${meme.name} style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${meme.name}</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="#" class="btn btn-success">Share</a>
                        <a href=${meme.url} class="btn btn-warning" download="image">Save</a>
                    </div>
                </div>`
            )
        })
        myRow.innerHTML = data

    } catch (err) {
        console.log(err)
    }
}

getMemes()