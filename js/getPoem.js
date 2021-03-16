var url = 'https://poetrydb.org';

function getRandInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

fetch(url + "/author")
.then(res => res.json())
.then((out) => {
    var authorLength = Object.keys(out["authors"]).length;
    var randNum = getRandInt(authorLength);
    var randAuthor = out["authors"][randNum];

    console.log(randAuthor);
    console.log(url + "/author/" + randAuthor);
    
    fetch(url + "/author/" + randAuthor)
    .then(res => res.json())
    .then((out2) => {
        var numOfPoems = out2.length;
        var randNum = getRandInt(numOfPoems);
        
        document.getElementById("title").innerHTML = out2[randNum]["title"];
        document.getElementById("author").innerHTML = out2[randNum]["author"];

        var lines = ""
        for(i=0;i < out2[randNum]["lines"].length;i++){
            lines += out2[randNum]["lines"][i] + "<br>";
        }
        document.getElementById("by").innerHTML = "by";
        document.getElementById("lines").innerHTML = lines;
    })
    .catch(err => {throw err});
})
.catch(err => {throw err});