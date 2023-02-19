const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },
    {
        dogName: "Akino",
        breed: "Husky",
        age: 5
    },
    {
        dogName: "Archie",
        breed: "Poodle",
        age: 2
    },
    {
        dogName: "Ava",
        breed: "Pit Bull",
        age: 3
    },
    {
        dogName: "Bailey",
        breed: "Labrador Retriever",
        age: 4
    },
    {
        dogName: "Benny",
        breed: "Beagle",
        age: 6
    },
    {
        dogName: "Biscuit",
        breed: "Golden Retriever",
        age: 9
    },
    {
        dogName: "Buddy",
        breed: "German Shepherd",
        age: 8
    },
    {
        dogName: "Cassie",
        breed: "Corgi",
        age: 1
    },
    {
        dogName: "Charlie",
        breed: "Bulldog",
        age: 2
    }
];

function filterDogs() {
    const ageInput = document.getElementById("ageInput").value;
    const selectedDogs = [];

    allDogs.forEach(function(dog) {
        if (dog.age >= ageInput) {
            selectedDogs.push(dog);
        }
    });

    const dogList = document.getElementById("dogList");
    dogList.innerHTML = "";

    selectedDogs.forEach(function(dog) {
        const li = document.createElement("li");
        const text = document.createTextNode(dog.dogName + " - " + dog.breed + " - " + dog.age + " years old");
        li.appendChild(text);
        dogList.appendChild(li);
    });
}