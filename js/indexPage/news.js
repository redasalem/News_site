const news=`
          <a href="" class="article-link">
                <img src="" alt="12">
                <div class="article-text mt-3">
                  <span class="article-catgory"></span>
                  <h5 class="article-title"></h5>
                  <p></p>
                </div>
          </a>  
`


class News extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=news;
        this.querySelector('h5').innerText=this.getAttribute('text')
        this.querySelector('img').setAttribute("src",this.getAttribute("src"))
        this.querySelector('a').setAttribute('href',this.getAttribute('href'))
        this.querySelector('span').innerText=this.getAttribute('category')

        if(this.getAttribute('excerpt')){
            this.querySelector('p').innerText=this.getAttribute('excerpt')

        }else{
            this.querySelector('p').style.display="none";
        }

       
    }
}

window.customElements.define('news-component',News);