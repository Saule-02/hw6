const courses = {
    img: './IMG/it.png',
    names: ['"OKURMEN"; "MOTION WEB"; "IT-RUN"; "PEAKSOFT HOUSE"'],
    description:'IT academy:  FRONT END;  \nUX/UI;  \nPYTHON; IT kids; soft skills/hard skills; \nENGLISH',
    price: '10.000k - 15.000k',
    durationInDays: "1,5 - 9 weeks",
    levelOfDifficulty: ['Junior, Middle, Senior'],
    language: 'Kyrgyz, Russian language',
    audiences: true,
    prerequisitesForEnrolment: false,
    mentors: true
} 
console.log(course);

const course = {
    img: '/IMG/123.jpeg',
    name: '"OKURMEN"',
    description:'IT academy:  FRONT END;  \nUX/UI;  \nPYTHON;  \nENGLISH',
    linkToCoursePage: 'https://instagram.com/okurmen_it?igshid=MzRlODBiNWFlZA==',
    price: '10.000k - 15.000k',
    durationInDays: "1,5 - 6 weeks",
    levelOfDifficulty: ['Junior, Middle, Senior'],
    yearOfOpening: 2022,
    language: 'Kyrgyz language',
    instructorName: '[Mansurbek; Ulukbek; Munarbek]',
    namesOfTreners: '[Kutman, Aizada, Bayastan]',
    audiences: true,
    prerequisitesForEnrolment: false,
    mentors: true
} 
// const course = {
//     img: '/IMG/123.jpeg',
//     name: '"OKURMEN"',
//     description:'IT academy:  FRONT END;  \nUX/UI;  \nPYTHON;  \nENGLISH',
//     linkToCoursePage: 'https://instagram.com/okurmen_it?igshid=MzRlODBiNWFlZA==',
//     price: '10.000k - 15.000k',
//     durationInDays: "1,5 - 6 weeks",
//     levelOfDifficulty: ['Junior, Middle, Senior'],
//     yearOfOpening: 2022,
//     language: 'Kyrgyz language',
//     instructorName: '[Mansurbek; Ulukbek; Munarbek]',
//     namesOfTreners: '[Kutman, Aizada, Bayastan]',
//     audiences: true,
//     prerequisitesForEnrolment: false,
//     mentors: true
// } 
// const course = {
//     img: '/IMG/123.jpeg',
//     name: '"OKURMEN"',
//     description:'IT academy:  FRONT END;  \nUX/UI;  \nPYTHON;  \nENGLISH',
//     linkToCoursePage: 'https://instagram.com/okurmen_it?igshid=MzRlODBiNWFlZA==',
//     price: '10.000k - 15.000k',
//     durationInDays: "1,5 - 6 weeks",
//     levelOfDifficulty: ['Junior, Middle, Senior'],
//     yearOfOpening: 2022,
//     language: 'Kyrgyz language',
//     instructorName: '[Mansurbek; Ulukbek; Munarbek]',
//     namesOfTreners: '[Kutman, Aizada, Bayastan]',
//     audiences: true,
//     prerequisitesForEnrolment: false,
//     mentors: true
// } 

 const input = document.getElementById ('input')
const btn = document.getElementById ('btn-s')
const emptyDiv = document.getElementById ('course')

function fetchCourse(param1) {
    return new Promise((resolve, reject) => {
        emptyDiv.innerHTML = 'LOADING...'
        setTimeout(() => {
            if (param1.toLowerCase() === 'course') {
                resolve(course)
            } else {
                reject("Invalid Course Name")
            }
        resolve(course)
    }, 2500);
    })
}


btn.onclick = () => {
    const name = input.value
    fetchCourse(name).then( (res) => {
        emptyDiv.innerHTML = `
        <div>
        <img src="${res.img}" width="150px" alt="" />
        </div>
        <div>
        <h4>${res.name}</h4>
        <p>Description: ${res.description} </p>
        <p>Link:${res.linkToCoursePage} </p>
        <p>Price: ${res.price} </p>
        <p>Duration in days: ${res.durationInDays} </p>
        <p>Level of difficulty ${res.levelOfDifficulty } </p>
        <p>Year of opening  ${res.yearOfOpening} </p>
        <p>Language ${res.language} </p>
        <p>Instructor name ${res.instructorName} </p>
        <p>Names of treners ${res.namesOfTreners} </p>
        <p>audiences: ${res.audiences} </p>
        <p>prerequisites for enrolment ${res.prerequisitesForEnrolment} </p>
        <p>mentors: ${res.mentors} </p>
        </h4>
        </div>
        `
    } ).catch((error) => {
        emptyDiv.innerHTML = 'Error fetching('
        alert (`Error fetching data for "${name}". Error message is: \n${error}`)
    }).finally( () => { 
        input.value = ''
    })
}

