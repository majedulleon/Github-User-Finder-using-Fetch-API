let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.Value;
    if (userText != '') {
        //Fetch API Use here
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                if (data.messege == 'Not Found') {
                    //Show Alert
                }
                else {
                    //Show User Info
                }
            })
    }
    else {
        //Clear Profile
    }
});