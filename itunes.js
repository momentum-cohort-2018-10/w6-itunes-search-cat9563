const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
const trackSongP = document.getElementById('trackSongP')
const songLink = document.getElementById('songLink')
const tackArtistP = document.getElementById('tackArtistP')
const coverPic = document.getElementById('coverPic')

searchButton.addEventListener('click', function (event) {
    $.ajax({
        url: 'https://itunes-api-proxy.glitch.me/search?term=',
        data: {
            term: searchField.value,
            media: 'music',
            limit: 30
        },
        dataType: "json",
        success: function (entity) {
            console.log(entity)
            let resultsDiv = document.getElementById('search-results')
            let songLinkDiv = document.getElementById('songLink')
            let trackArtistPDiv = document.getElementById('trackArtistP')
            let coverPicDiv = document.getElementById('coverPic')
            resultsDiv.innerHTML = '' 
            let countP = document.createElement('p')
            countP.innerText = `Total count: ${entity.resultCount}`
            resultsDiv.appendChild(countP)


            for (let track of entity.results) {
                let trackSongP = document.createElement("p")
                let artP = document.createElement("p")
                let covP = document.createElement("p")
                let songLinks = document.createElement("a")
                let trackArtistP = document.createElement("p")
                let coverPic = document.createElement("img")
                coverPic.src = track.artworkUrl100
                songLinks.href = track.trackViewUrl
                songLinks.innerText = track.trackName
                artP.innerText = track.artistName
                covP.appendChild(coverPic)
                trackSongP.appendChild(songLinks)
                artP.appendChild(trackArtistP)
                songLinkDiv.appendChild(trackSongP)
                trackArtistPDiv.append(artP)
                coverPicDiv.append(coverPic)
                //resultsDiv.appendChild(trackSongP)
            }
        }
    })
})