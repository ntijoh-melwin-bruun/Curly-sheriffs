function search (){
    // get GET /orgs/ntijoh-te4/repos
}

const url = "https://api.github.com";
const user = "ntijoh-axel-ostan";
const token = { method: 'GET', headers: { 'Authorization': 'token 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' } };

// class api {
//     static async user_info() {
//         const getrequest = await fetch(`${url}/user`);
//         const fetched = await getrequest.json();
//         console.log(fetched);
//         return fetched;
//     }

//     static async users(){
//         const getrequest = await fetch(`${url}/user/${user}`);
//         const fetched = await getrequest.json();
//         console.log(fetched);
//         return fetched;
        
//     }
    
//     static async repositories(){
//         const getrequest = await fetch(`${url}/user/${user}/repos`);
//         const fetched = await getrequest.json();
//         console.log(fetched);
//         return fetched;
//     }
    
// }

function api() {
    
    async function user_info(){
        const getrequest = await fetch(`${url}/user`, token);
        const fetched = await getrequest.json();
        console.log(fetched);
        return fetched;
    }

    async function users() {
        const getrequest = await fetch(`${url}/users/${user}`, token);
        const fetched = await getrequest.json();
        console.log(fetched);
        return fetched;
    }

    async function repositories() {
        const getrequest = await fetch(`${url}/users/${user}/repos`, 
        { method: 'GET', headers: { 'Authorization': 'token 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' } });
        const fetched = await getrequest.json();
        console.log(fetched);
        return fetched;
    }

    user_info();
    users();
    repositories();
}
api();




// const section = document.querySelector('.container content');
// const template = document.querySelector('#repo');
// const clone = template.content.cloneNode(true);
// section.appendChild(clone)

