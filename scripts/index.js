const url = "https://grocery-masai.herokuapp.com/items"

async function groceryData(){
    try{
        let res = await fetch(url)
        let data= await res.json()
        append(data.data)
    }catch (err){
        console.log(err)
    }
}
groceryData()

function append(data){
    let container = document.querySelector("#container")
    data.forEach(function (el){
        let img= document.createElement("img")
        img.src= el.image
        let name=document.createElement("p")
        name.innerText=el.name
        let price = document.createElement("p")
        price.innerText=+el.price
        let div= document.createElement("div")
        let button=document.createElement("button")
        button.innerText="Add to Cart"
        button.addEventListener("click", AddToCart)
        div.append(img,name,price,button)
        container.append(div)
    })
}

function AddToCart(el){
    let CartData=JSON.parse(localStorage.getItem("Cart"))||[]

    // el.preventDefault()
    console.log(CartData)
    let wallet= document.querySelector("#wallet")
    wallet.innerText=700-+el.price
    console.log(wallet)
    localStorage.setItem("Cart",JSON.stringify(CartData))
}