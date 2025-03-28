import { API_URL } from "../urs.js";

async function sliderFetch(){
    let res = await fetch(`${API_URL}slider`);
    let data = await res.json();
    data.map(slide=>{
        const el = document.createElement('slider-component')
        el.setAttribute("src",slide.img_uri)
        el.setAttribute('text',slide.title)
        el.setAttribute('href',slide.link)
        document.getElementById("carousel-inner").appendChild(el);
    });
 
}
async function headerarticleFetch(){
    let res = await fetch(`${API_URL}header-articles`);
    let data = await res.json();
    data.map(i=>{
        const el = document.createElement('header-articles')
        el.setAttribute("src",i.img_uri)
        el.setAttribute('text',i.title)
        el.setAttribute('href',i.link)
        el.setAttribute('category',i.category)
        document.getElementById('header-articles').appendChild(el);
    });
 
}
async function newsFetch(){
    let res = await fetch(`${API_URL}news`);
    let data = await res.json();
    data.map(article=>{
        const el = document.createElement('news-component')
        el.setAttribute("src",article.img_uri)
        el.setAttribute('text',article.title)
        el.setAttribute('href',article.link)
        el.setAttribute('category',article.category)
        el.classList.add('col-lg-3','col-md-4','col-sm-6','mt-4');
        document.getElementById('news').appendChild(el);
    });
 
}

async function mostReadCardFetch(){
    let res = await fetch(`${API_URL}most-read`);
    let data = await res.json();
    for(let i=0;data.length;i++){
        if(i % 2 == 0){
        const el = document.createElement('most-read-card')
        el.setAttribute("src",data[i].img_uri)
        el.setAttribute('text',data[i].title)
        el.setAttribute('href',data[i].link)
        el.setAttribute('excerpt',data[i].paragraph)
        el.setAttribute('datetime',moment(parseInt(data[i].date)).format('dddd')+" , "+moment(parseInt(data[i].date)).format('LL') )

        document.getElementById('most-read').appendChild(el);

        }else{
        const el = document.createElement('big-most-read-card')
        el.setAttribute("src",data[i].img_uri)
        el.setAttribute('text',data[i].title)
        el.setAttribute('href',data[i].link)
        el.setAttribute('datetime',moment(parseInt(data[i].date)).format('dddd')+" , "+moment(parseInt(data[i].date)).format('LL') )

        document.getElementById('most-read').appendChild(el);

        }
    }
 
}


sliderFetch();
headerarticleFetch();
newsFetch();
mostReadCardFetch();