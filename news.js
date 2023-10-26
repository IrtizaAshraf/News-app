// declear thr variable in news.html------------>
const newsBox = document.querySelector('.morenews');

///// get the  sessionstoreg data ------------>


const news = sessionStorage.getItem('new');
console.log(news);
const moreinfo = JSON.parse(news);
// console.log(moreinfo);
console.log(moreinfo);

///// pharase the secssion stirage data in api ----------------->
const storedUsers = JSON.parse( sessionStorage.getItem('new')) || [];
console.log(storedUsers);


/// render the nextpage data ---------------->
newsBox.innerHTML = `
    <div id="single-box">
    <h4> ${moreinfo.author} :- </h4>
        <img src="${moreinfo.urlToImage}" alt="img">
        <h1> ${moreinfo.title} </h1>
        <p  id="publish-date"> Published at: ${moreinfo.publishedAt}</p>
        <h4> ${moreinfo.description} </h4>
        <p> ${moreinfo.content}</p>
        <a class="more" href="${moreinfo.url}">Read Complete News</a>
    </div>
`









window.onbeforeunload = function () {
      sessionStorage.setItem('new', JSON.stringify(allNews));
};








//// paractice the another mehtod ------------>


// const newsBox = document.querySelector('.morenews');


// const news = localStorage.getItem('new');
// const singleNews = JSON.parse(news);
// console.log(singleNews);



// newsBox.innerHTML = `
//     <div   id="single-box">
//         <img src="${singleNews.urlToImage}" alt="">
//         <h1> ${singleNews.title} </h1>
//         <p  id="publish-date"> Published at: ${singleNews.publishedAt}</p>
//         <h4> ${singleNews.description} </h4>
//         <p> ${singleNews.content}</p>
//         <a href="${singleNews.url}">Read Complete News</a>
//     </div>
// `



// function displayNews(moreinfo) {
//       const newsBox = document.querySelector('.morenews');
//       newsBox.innerHTML = `
//           <div id="single-box">
//               <img src="${moreinfo.urlToImage}" alt="">
//               <h1>${moreinfo.title}</h1>
//               <p id="publish-date">Published at: ${moreinfo.publishedAt}</p>
//               <h4>${moreinfo.description}</h4>
//               <p>${moreinfo.content}</p>
//               <a href="${moreinfo.url}">Read Complete News</a>
//           </div>
//       `;
//   }
  