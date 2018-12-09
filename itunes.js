const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')


searchButton.addEventListener('click', function (event) {
    $.ajax({
        url: 'https://itunes-api-proxy.glitch.me/search?term=',
        data: {
            term: searchField.value,
            media: 'music'
        },
        dataType: "json",
        success: function (entity) {
            console.log(entity)
            let resultsDiv = document.getElementById('search-results')
            resultsDiv.innerHTML = '' 
            let countP = document.createElement('p')
            countP.innerText = `Total count: ${entity.resultCount}`
            resultsDiv.appendChild(countP)


            for (let track of entity.results) {
                let trackSongP = document.createElement("p")
                let songLink = document.createElement("a")
                let trackArtistP = document.createElement("p")
                let coverPic = document.createElement("img")
                coverPic.src = track.artworkUrl100
                songLink.href = track.trackViewUrl
                songLink.innerText = track.trackName
                trackArtistP.innerText = track.artistName
                trackSongP.appendChild(coverPic)
                trackSongP.appendChild(songLink)
                trackSongP.appendChild(trackArtistP)
                resultsDiv.appendChild(trackSongP)
            }
        }
    })
})