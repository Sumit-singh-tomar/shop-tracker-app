document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("to-show-data")
    const table = document.createElement('table')

    const row = table.insertRow()
    row.style.fontWeight = 'bold'
    row.insertCell(0).innerHTML = "Item Name"
    row.insertCell(1).innerHTML = "Description"
    row.insertCell(2).innerHTML = "Quantity"
    row.insertCell(3).innerHTML = "Price"

    div.appendChild(row)

    axios.get("http://localhost:3000/item/get-item")
        .then((result) => {
            console.log(result);
            result.data.data.map((item) => {
                const row = table.insertRow()
                row.insertCell(0).innerHTML = item.item_name
                row.insertCell(1).innerHTML = item.description
                row.insertCell(2).innerHTML = item.qty
                row.insertCell(3).innerHTML = item.price

                const buyButton1 = document.createElement("button")
                buyButton1.id = item.id
                buyButton1.innerHTML = 'Buy1'
                buyButton1.onclick = function(){
                    axios.put(`http://localhost:3000/item/update-item/${item.id}`,{value:1})
                        .then((result) =>{
                            console.log(result)
                        })
                        .catch((e)=>{
                            console.log(e);
                        })
                }

                
                const buyButton2 = document.createElement("button")
                buyButton2.innerHTML = 'Buy2'
                buyButton2.id = item.id
                buyButton2.style.marginLeft = '5px'
                buyButton2.onclick = function(){
                    axios.put(`http://localhost:3000/item/update-item/${item.id}`,{value:2})
                        .then((result) =>{
                            console.log(result)
                        })
                        .catch((e)=>{
                            console.log(e);
                        })

                }

                
                const buyButton3 = document.createElement("button")
                buyButton3.innerHTML = 'Buy3'
                buyButton3.style.marginLeft = '5px'
                buyButton3.id = item.id
                buyButton3.onclick = function(){
                    axios.put(`http://localhost:3000/item/update-item/${item.id}`,{value:3})
                        .then((result) =>{
                            console.log(result)
                        })
                        .catch((e)=>{
                            console.log(e);
                        })
                }

                row.insertCell(4).append(buyButton1,buyButton2,buyButton3)

                div.appendChild(row)
            })
        })
        .catch((e) => {
            console.log(e);
        })
})

function handleSubmit(event) {
    event.preventDefault()

    var data = {
        item_name: item_name.value,
        description: description.value,
        price: price.value,
        qty: qty.value
    }

    axios.post("http://localhost:3000/item/add-item", data)
        .then((result) => {
            console.log(result);
        })
        .catch((e) => {
            console.log(e)
        })
}