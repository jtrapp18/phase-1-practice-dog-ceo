console.log('%c HI', 'color: firebrick')


function renderDog(imgSrc) {
    const dogContainer = document.querySelector("#dog-image-container")
    
    const newDog = document.createElement("img") 
    newDog.src = imgSrc
    newDog.alt = "dog"

    dogContainer.append(newDog)
}

function renderBreed(breed) {
    const breedList = document.querySelector("#dog-breeds")
    
    const newBreed = document.createElement("li") 
    newBreed.textContent = breed

    newBreed.addEventListener("click", () => {
        Array.from(breedList.children).forEach(node => node.classList.remove("selected"))
        newBreed.classList.add("selected")
    })
    
    breedList.append(newBreed)
}

function renderDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        dogs = data.message
        dogs.forEach(renderDog)
    })
    }

function renderBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        breeds = data.message
        for (breed in breeds) {
            renderBreed(breed)
        }
    })
    }

function filterBreeds(letter) {
    const breedList = document.querySelector("#dog-breeds")
    const breedNodes = Array.from(breedList.children)

    breedNodes.forEach(breed => {
        if (breed.textContent[0] === letter) {
            breed.classList.remove("hide")
        }
        else {
            breed.classList.add("hide")
        }
    })
}

function changeDropdown() {
    document.querySelector("#breed-dropdown").addEventListener("change", (e) => {
        const letter = e.target.value[0]
        filterBreeds(letter)
    })
}

addEventListener("DOMContentLoaded", () => {
    renderDogs()
    renderBreeds()
    changeDropdown()
})