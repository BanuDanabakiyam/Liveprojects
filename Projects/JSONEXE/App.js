fetch('./data.json')
.then((res) => res.json())
.then((datalist) => {
    let userdisplay = document.getElementById("card-body");
    let getdata = "";
    datalist.map((index) => {
        getdata += `<h5>${index.name}</h5><p>${index.age}</p><p>${index.designation}</p><hr>`;
    })
    userdisplay.innerHTML = getdata;
})