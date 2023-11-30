import { postsData } from "./data.js"

const url  = window.location.pathname
const currentPage = url.substring(url.lastIndexOf('/')+1)

// const x = window.matchMedia('(min-width: 600px)')
// renderRPs(x)
// x.addListener(renderRPs)
// function renderRPs(x) {
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }

function renderHeroLeadPost() {
    const heroPostObj = postsData.filter(post => post.postType === 'hero')[0]
    const heroLeadPost = document.getElementById('hero-lead-post')
    
    heroLeadPost.style.backgroundImage = `url(${heroPostObj.featurePic})`
    heroLeadPost.innerHTML = `
        <p class="date">${heroPostObj.date}</p>
        <h1><a href="article.html">${heroPostObj.title}</a></h1>
        ${heroPostObj.postLead}
    `
}

function renderArticle() {
    const postObj = postsData.filter(post => post.postType === 'hero')[0]
    const postSection = document.getElementById('post-section')
    
    postSection.innerHTML = `
        <p class="date">${postObj.date}</p>
        <h1>${postObj.title}</h1>
        ${postObj.postLead}
        <img src="${postObj.featurePic}" alt="${postObj.alt}" class="post-img">
        ${postObj.postText}
    `
}

function getHeroPostHtml(){
}

function renderHeader() {
    document.getElementById('header-el').innerHTML = `
        <nav>
            <a href="index.html" class="logo">
                <i class="fa-solid fa-fire"></i>
                BenCan Learning Journal
            </a>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutme.html">About Me</a></li>
            </ul>
        </nav>
    `
}

function renderRecentPosts() {
    const recentPostsSection = document.getElementById('recent-posts-section')
    let numPosts = 0
    
    if (currentPage !== "index.html") {
        numPosts = 3
    }

    recentPostsSection.innerHTML = `
        <h3 class="center">Recent posts</h3>
        <div id="recent-posts">
            ${getPostsHtml(numPosts)}
        </div>
        <button id="view-more-btn">View More</button>
    `
}

function getPostsHtml(numOfPosts = 0) {
    const recentPosts = postsData.filter(post => post.postType === 'regular')
    let postsHtml = ``

    if (numOfPosts === 0) {
        numOfPosts = recentPosts.length
    } 

    recentPosts.slice(0, numOfPosts).forEach( post => {
        postsHtml += `
            <article>
                <img src="${post.featurePic}" alt="${post.alt}" class="post-img">
                <p class="date">${post.date}</p>
                <h2>${post.title}</h2>
                <p>${post.postText}</p>
            </article>
        `
    })

    return postsHtml
}

function renderFooter() {
    document.getElementById('footer').innerHTML = `
        <div class="logo-footer">BenCan Learning Journal</div>
        <div>Copyright ©2023</div>
    `
}

renderHeader()

if (currentPage === 'index.html') {
    renderHeroLeadPost()
} else if (currentPage === 'article.html') {
    renderArticle()
}
renderRecentPosts()
renderFooter()