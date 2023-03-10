console.log("linked successfully");

newsaccordian =document.getElementById("collapsenews");

let source="bbc";
let api_key="5162f83175d44cc5999b10aa2023613e";

const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5162f83175d44cc5999b10aa2023613e`,true);
xhr.send();
xhr.onload=function(){
    if(this.status==200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let innews="";
        articles.forEach(function(element,index){
            let news=`
            <table class="tables my-4" cellspacing="50">
            <tr>
              
              <td>
              <img src="${element["urlToImage"]}" width="200" height="200">
              </td>
              <td>
              <p>
              <a class="my-3"  data-bs-toggle="collapse" href="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                ${element["title"]}
              </a>
            </p>
              <div class="collapse collapse-horizontal my-4 center" id="collapse${index}">
                <div class="card card-body" style="width: 700px;">
                ${element["content"]}.<a href="${element["url"]}" target="_balnk">Read More here</a>
                </div>
              
            </div>
            </td>
          <tr>
          <hr>
          </table>
          
         `
          innews+=news;
        });
        newsaccordian.innerHTML=innews;
    }else{
        console.log("some error occur");
    }
}