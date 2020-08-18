const det = new XMLHttpRequest()
det.open('GET', 'https://api.github.com/users/ElenC/repos')

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        const main1 = document.querySelector('main').innerHTML = localStorage.getItem('main')
        const inf = JSON.parse(det.responseText)

        for(let i = 0; i<inf.length; i++){
            
            main1.innerHTML += '<div><div>' + inf[i].login + '</div><div>' + inf[i].avatar_url + '</div><div>' 
            + inf[i].following_url + '</div></div>' 
        }
    }
}
det.send()