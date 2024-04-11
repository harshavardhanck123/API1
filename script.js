async function foo() {
    try {
        var res = await fetch("https://api.kanye.rest")
        var resdata = await res.json()
        var total_tn_data = resdata.quote;
        var div = document.createElement("div")
        div.className = "main"
        div.id="background-container"
        div.innerHTML = `<div class="jumbotron">
    <h1 class="display-4">Kanye West Quotes Generator</h1>
    <hr class="my-4">
    <p class="font">${total_tn_data}</p>
    <i class="fa fa-refresh  refresh-button" aria-hidden="true"></i>
  </div>`
        document.addEventListener("click", function (event) {
            if (event.target && event.target.matches(".refresh-button")) {
                location.reload();
            }
        });
        document.body.append(div);
    }
    catch (error) {
        console.log(error)
    }
}

foo();

