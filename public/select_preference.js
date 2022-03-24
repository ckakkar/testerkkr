async function add_preference() {
    //fetch user data and i is the row with the corresponding username
    const response = await fetch('/getdata');
    const data = await response.json();
    for (var i = 0; i < data.results.rows.length; i++) {
        if (data.results.rows[i]['name'] == queryString) {
            break;
        }
    }
    //if username's preference==0, set preference to 1
    if (data.results.rows[i]['preference'] == 0) {
        var str = { code: "update users set preference = 1 where name ='"+queryString+"';" };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(str),
        };

        var wait = await fetch('/update', options);
    }

    //insert preference to table 'username'
    var pref = document.getElementById("pref").value;
    var str = { code: "insert into " + queryString + " values ('" + pref + "');" };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(str),
    };

    var wait = await fetch('/update', options);
}

function continu(){
    location.href = "user.html?"+queryString;
}

const queryString = location.search.substring(1);


anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });