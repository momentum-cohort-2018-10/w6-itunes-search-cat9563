const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')

searchButton.addEventListener('click', function(event){//make ajax requet
    $.ajax({
        url: 'https://itunes-api-proxy.glitch.me/search?term=',
        data: {
            term: searchField.value
        },
        dataType: "json",
        success: function (results){
            console.log(results)
            let resultsDiv = document.getElementById('search-results')
            let countP = document.createElement('p')
            countP.innerText = `Total count: ${results.resultCount}`
            resultsDiv.appendChild(countP)
        }
    })
})