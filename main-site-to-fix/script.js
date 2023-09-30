// function nextSlide() {
//     var currentSlide = document.querySelector('.slides img:not(:last-child)');
//     var nextSlide = currentSlide.nextElementSibling;
//     currentSlide.style.display = 'none';
//     nextSlide.style.display = 'block';
//   }

//   setInterval(nextSlide, 2000);


const person = {
    name:"John",
    surname:"Smith",
    age:35,
    location:"South Africa"
};

const date = new Date()

console.log(person.surname)
console.log(date)


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
