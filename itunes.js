const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')


searchButton.addEventListener('click', function (event) {
    $.ajax({
        url: 'https://itunes-api-proxy.glitch.me/search?term=',
        data: {
            term: searchField.value
        },
        dataType: "json",
        success: function (entity) {
            console.log(entity)
            let resultsDiv = document.getElementById('search-results')
            let countP = document.createElement('p')
            countP.innerText = `Total count: ${entity.resultCount}`
            resultsDiv.appendChild(countP)


            for (let track of entity.results) {
                let trackP = document.createElement('p')
                let trackLink = document.createElement('a')
                trackLink.href = track.trackViewUrl
                trackLink.innerText = track.trackName
                trackLink.innerText = track.artistName
                trackP.appendChild(trackLink)
                resultsDiv.appendChild(trackP)

            }
        }

    });
})