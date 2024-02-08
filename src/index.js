// index.js

// Callbacks
const handleClick = (ramen) => {
  
  let name = ramen.name
  let nameClass = document.querySelector(".name")
  nameClass.textContent = name

  let restaurant = ramen.restaurant
  let restaurantClass = document.querySelector(".restaurant")
  restaurantClass.textContent = restaurant

  let pic = ramen.image
  let imgClass = document.querySelector(".detail-image")
  imgClass.src = pic
  
  let rate = ramen.rating
  let h3 = document.querySelector("#rating-display")
  h3.textContent = rate

  let keyComment = ramen.comment
  let h3Key = document.querySelector("#comment-display")
  h3Key.textContent = keyComment

  // divDetail.append(imgClass, nameClass, restaurantClass, h3Key)
};

const ramenFunction = (ramen) => {
  let img = document.createElement("img")
  img.src = ramen.image

  div.append(img)

  img.addEventListener("click", ()=>{
    handleClick(ramen)
  })
}


let form = document.getElementById("new-ramen")
  console.log(form)

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    let newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
    }
    console.log(newRamen)

  ramenFunction(newRamen)
})

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((ramens) => {
    for (let ramen of ramens) {
      // console.log(ramen)

      ramenFunction(ramen)
    }
  }
)};

let div = document.getElementById("ramen-menu")




const main = () => {
  displayRamens()
 }

main()

// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
