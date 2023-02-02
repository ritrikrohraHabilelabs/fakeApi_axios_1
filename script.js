let tbody = document.querySelector("tbody");

axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
        res.data.filter((val, id) => {
            return id < 10
        }).map((val, id) => {
            let tr = document.createElement("tr");

            let idTd = document.createElement("td");
            idTd.appendChild(document.createTextNode(`${val.id}`));

            let nameTd = document.createElement("td");
            nameTd.appendChild(document.createTextNode(`${val.name}`));

            let emailTd = document.createElement("td");
            emailTd.appendChild(document.createTextNode(`${val.email}`));

            tr.appendChild(idTd);
            tr.appendChild(nameTd);
            tr.appendChild(emailTd);

            tbody.appendChild(tr);
        })
    })
    .catch((err) => console.log(err))
    .then(() => {
        console.log("ended")
    })

async function fakeApi() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        res.data.filter((val, id) => {
            return id > 9 && id < 20
        }).map((val, id) => {
            let tr = document.createElement("tr");

            let idTd = document.createElement("td");
            idTd.appendChild(document.createTextNode(`${val.id}`));

            let nameTd = document.createElement("td");
            nameTd.appendChild(document.createTextNode(`${val.name}`));

            let emailTd = document.createElement("td");
            emailTd.appendChild(document.createTextNode(`${val.email}`));

            tr.appendChild(idTd);
            tr.appendChild(nameTd);
            tr.appendChild(emailTd);

            tbody.appendChild(tr);
        })
    }
    catch (err) {
        console.log(err)
    }
}
fakeApi();