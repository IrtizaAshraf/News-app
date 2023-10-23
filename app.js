
// const search = document.querySelector('#search');
// const input = document.querySelector('.form-control');

// const cardsBox = document.querySelector('.container')

// let allNews = [];


// search.addEventListener('submit', async (e) => {
//       e.preventDefault()
//       console.log(input.value);

//       try {
//         let cricket = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=c503b61ff6f0498faae701d558977fb2`)
//         console.log(cricket.data);
//         cricket = cricket.data.articles.slice(0, 20)
//         console.log(cricket);
//         allNews = [...cricket];

//         cricket.forEach((item, index) => {

//             cardsBox.innerHTML += `
            
//             <div class="card" style="width: 20rem;">
//                   <img src="${item.urlToImage}">
//                   <div class="card-body">
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of
//                               the card's content.</p>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                   </div>
//             </div>
//       //           `
//        });

//        input.value = ''
//       }
//     catch {
//         console.log('No data found');
//      }

// });



const search = document.querySelector('#search');
const input = document.querySelector('.form-control');
const cardsBox = document.querySelector('.container');
let allNews = [];

search.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(input.value);

    try {
        let cricket = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=c503b61ff6f0498faae701d558977fb2`);
        console.log(cricket.data);
        cricket = cricket.data.articles.slice(0, 20);
        console.log(cricket);
        allNews = [...cricket];

        // Clear existing cards
        cardsBox.innerHTML = '';

        cricket.forEach((item) => {
            cardsBox.innerHTML += `
            <div class="card" style="width: 20rem;">
                <img src="${item.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="${item.url}" class="btn btn-primary" target="_blank">Read More</a>
                </div>
            </div>
            `;
        });

        input.value = '';
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
