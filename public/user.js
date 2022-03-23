function read_username() {
    document.getElementById("welcome").innerHTML = "Welcome " + queryString;
}

async function logout() {
    var str = { code: "truncate current;" };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(str),
    };

    var wait = await fetch('/update', options);
    location.href = "index.html";
}

const queryString = location.search.substring(1);
read_username();
