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
            resultsDiv.innerHTML = '' //clears stuff out 
             let countP = document.createElement('p')
            countP.innerText = `Total count: ${results.total_count}`
            resultsDiv.appendChild(countP)

            for (let repo of results.items){
                let repoP = document.createElement("p") //creates a new element 
                let repoLink =document.createElement('a') //found from console log 
                repoLink.href = repo.html_url //had to look at log to get that also 
                repoLink.innerText = repo.name //once again log 
                repoP.appendChild(repoP) //puts the link inside repoP
                resultsDiv.appendChild(repoP) //takes above line and appends it to the results div 
            }
        }
    })
})