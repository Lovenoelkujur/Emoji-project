
function searchEmoji(){
    let inputValue = document.getElementById("search").value;
    displayResult(inputValue);
}

function displayResult(searchQuery = ""){
    let filteredData = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    })

    let parent = document.getElementById("search_result_container");

    parent.innerHTML = "";

    filteredData.forEach((e) => {
        let newRow = document.createElement("tr");
        let newEmoji = document.createElement("td");
        let newAliases = document.createElement("td");
        let newDesc = document.createElement("td");

        newEmoji.innerText = e.emoji;
        newAliases.innerText = e.aliases;
        newDesc.innerText = e.description;

        newRow.appendChild(newEmoji);
        newRow.appendChild(newAliases);
        newRow.appendChild(newDesc);

        parent.appendChild(newRow);

        // console.log(newEmoji, newAliases, newDesc);
    })
}

document.getElementById("search").addEventListener("keyup", searchEmoji)


window.onload = () => displayResult();