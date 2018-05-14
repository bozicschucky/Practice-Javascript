const data =[
    {
        name:'Jon Doe',
        age:56,
        gender:'male',
        lookingfor:'female',
        location:'Kampala Ug',
        image:'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name:'Jon Mary',
        age:50,
        gender:'female',
        lookingfor:'male',
        location:'Kampala Ug',
        image:'https://randomuser.me/api/portraits/women/34.jpg'
    },
    {
        name:'John Stone',
        age:32,
        gender:'male',
        lookingfor:'female',
        location:'Kampala Ug',
        image:'https://randomuser.me/api/portraits/men/24.jpg'
    }
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;
    document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name: ${currentProfile.name}</li>
            <li class = "list-group-item">Age: ${currentProfile.age}</li>
            <li class = "list-group-item">Location: ${currentProfile.location}</li>
            <li class = "list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    
    `;
    document.getElementById('imageDisplay').innerHTML = `
     <img src="${currentProfile.image}">
    `;
}

// Profile interator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next:function () {
            return nextIndex < profiles.lenght ? 
            {value: profiles[nextIndex++], done:false} :
            { done:true }
        }
    }
}