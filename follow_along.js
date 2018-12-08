const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')

searchButton.addEventListener('click', function(event){//make ajax requet
    $.ajax({
        url: 'https://api.github.com/search/repositories',
        data: {
            q: searchField.value
        },
        success: function (results){
            console.log(results)
            let resultsDiv = document.getElementById('search-results')
            let countP = document.createElement('p')
            countP.innerText = `Total count: ${results.total_count}`
            resultsDiv.appendChild(countP)
        }
    })
})