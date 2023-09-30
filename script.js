// var mediaQuery = window.matchMedia('(max-width: 800px)')
// let responsiveState;
// mediaQuery.addEventListener(mediaCheck)


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// const nav_burger = document.querySelector(".nav-burger");
// const nav_bar = document.querySelector(".ul-navbar");

// nav_burger.addEventListener("click", () => {
//   nav_burger.classList.toggle("active");
//   nav_bar.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   nav_burger.classList.remove("active");
//   nav_bar.classList.remove("active");
// }))


// function mediaCheck(mediaQuery) {
//   if (mediaQuery.matches) {
//     responsiveState = 1;
//     console.log ("The page is currently responsive");
//     console.log(responsiveState);
//   } else {
//     responsiveState = 0;
//     console.log("The page is currently not responsive");
//     console.log(responsiveState);
//   }
// }


// function checkNavs_Resp0() {
//   if (responsiveState === 0 && originalNav.style.display === "block") {
//     originalNav.style.display = "none";
//     hiddenNav.style.display = "block";
//   } else if (responsiveState === 0 && hiddenNav.style.display === "block") {
//     originalNav.style.display = "block";
//     hiddenNav.style.display = "none";
//   }
// }

// function checkNavs_Resp1() {
//   if (responsiveState === 1 && hiddenNav.style.display === "none") {
//     hiddenNav.style.display = "block";
//     console.log("The page is responsive - HiddenNav has been set to visible");
//   } else {
//     hiddenNav.style.display = "none";
//     console.log("The page is responsive - HiddenNav has been set to invisible");
//   }
// }

// function burgerMenu() {
//   mediaCheck(mediaQuery);

//   var hiddenNav = document.getElementById("hidden-navbar-cont");
//   var originalNav = document.getElementById("original-navbar");
//   var navBurger = document.getElementById("nav-burger")

    // if (responsiveState === 0) {
    //   hiddenNav.style.display = "block";
    //   originalNav.style.display = "none";
    // }
    // else {
    //   originalNav.style.display = "block";
    //   hiddenNav.style.display = "none";
    // }


  





  //Burger opens but never closes

  // if (responsiveState === 0) {
  //   originalNav.style.display = "none";
  //   hiddenNav.style.display = "block";
  //   console.log("step 1");
  // } else if(originalNav.style.display === "block") {
  //   hiddenNav.style.display = "none"
  // }


// }
















// if (responsiveState === '0' && originalNavDisplay === shown) {
//   console.log("Page is not responsive & the original nav is shown")
// } else {
//   console.log("This function did not work")
// }


//This works but has a delay at the start of the function
  // if (responsiveState === 0 && originalNav.style.display === "block") {
  //     originalNav.style.display = "none"; console.log("og nav display hidden");
  //     hiddenNav.style.display = "block"; console.log("hidden nav display shown");
  //   } else {
  //     hiddenNav.style.display = "none";
  //     originalNav.style.display = "block";
  //   }

  


  
  // if (responsiveState === 0 && hiddenNav.style.display === "none") {
  //   originalNav.style.display = "block";
  //   hiddenNav.style.display = "none";
  // }
  
  
  // else if (responsiveState === 1 && hiddenNav.style.display === "none") {
  //   hiddenNav.style.display = "block";
  //   console.log("The page is responsive - HiddenNav has been set to visible");
  // } else if (responsiveState === 1 && hiddenNav.style.display === "block") {
  //   hiddenNav.style.display = "none";
  //   console.log("The page is responsive - HiddenNav has been set to invisible");
  // }


//If the Hidden Navbar is visible, please hide it. But if it is not visible, then please show it.
  // if (hiddenNav.style.display === "block") {
  //   hiddenNav.style.display = "none";
  // } else {
  //   hiddenNav.style.display = "block";
  // }


  // if (responsiveState === 0 && originalNav.style.display === "block") {
  //   originalNav.style.display = "none";
  //   hiddenNav.style.display = "block";
  // } else if (responsiveState === 0 && hiddenNav.style.display === "block") {
  //   originalNav.style.display = "block";
  //   hiddenNav.style.display = "none";
  // }

  // if (responsiveState === 1 && hiddenNav.style.display === "none") {
  //   hiddenNav.style.display = "block";
  //   console.log("The page is responsive - HiddenNav has been set to visible");
  // } else {
  //   hiddenNav.style.display = "none";
  //   console.log("The page is responsive - HiddenNav has been set to invisible");
  // }

  // if (responsiveState === 1 && hiddenNav.style.display === "block") 


// If the orignal navbar is visible, then check if the
// if (originalNav.style.display === "block") {
//   originalNav.style.display = "none";
//   hiddenNav.style.display = "block";
// }
// else if
// (hiddenNav.style.display === "block") {
// hiddenNav.style.display = "none";
// originalNav.style.display = "block";
// }

  // if (hiddenNav.style.display === "block")  {
  //   originalNav.style.display = "none";
  // } else {
  //   originalNav.style.display = "block"
  // }



//If the hidden navbar is displayed, please hide the original navbar, But if the hidden navbar is hidden, please show the orginal navbar
// if (hiddenNav.style.display === "block")  {
//   ogNav.style.display = "none";
// } else {
//   ogNav.style.display = "block"
// }


  // if (ogNav.style.display === "block") {
  //   ogNav.style.display = "none";
  // } else {
  //   ogNav.style.display = "block";
  // }




const person = {
  name: 'John Doe',
  age: 25,
}

// const updatedPerson = Object.assign(person, { age: 50});
let updatedPerson = Object.assign({}, {...person, age:30})
console.log(updatedPerson);


// Replace YOUR_API_KEY with your Google API key
const API_KEY = "YOUR_API_KEY";

function displayReviews(placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const place = data.result;
      const name = place.name;
      const rating = place.rating;
      const reviews = place.reviews;

      // Create HTML elements to display the reviews
      const container = document.createElement("div");
      const header = document.createElement("h2");
      const ratingEl = document.createElement("p");

      header.innerText = `${name} Reviews`;
      ratingEl.innerText = `Rating: ${rating}`;

      container.appendChild(header);
      container.appendChild(ratingEl);

      // Create a div for each review
      reviews.forEach(review => {
        const reviewContainer = document.createElement("div");
        const authorEl = document.createElement("p");
        const ratingEl = document.createElement("p");
        const textEl = document.createElement("p");

        authorEl.innerText = `Author: ${review.author_name}`;
        ratingEl.innerText = `Rating: ${review.rating}`;
        textEl.innerText = review.text;

        reviewContainer.appendChild(authorEl);
        reviewContainer.appendChild(ratingEl);
        reviewContainer.appendChild(textEl);

        container.appendChild(reviewContainer);
      });

      // Add the reviews container to the page
      const reviewsContainer = document.querySelector("#reviews-container");
      reviewsContainer.appendChild(container);
    })
    .catch(error => {
      console.log(error);
    });
}
