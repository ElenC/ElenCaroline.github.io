let inf = document.querySelector('main')

let rep = JSON.parse(localStorage.getItem('detalhe'))

if(rep == null){
    rep =[]
} 

const det = new XMLHttpRequest()
det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name, false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
    
        inf.innerHTML += '<div id="container-det"><div id="login">' + rep1.owner.login + '</div><div><img id="img2" src="' + rep1.owner.avatar_url + '"></div><div id="descrip">' 
        + rep1.description + '</div></div>' 
        
    }
}
det.send()


det.open('GET', ' https://api.github.com/users/ElenC/following', false )

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
    
        inf.innerHTML += '<div><div id="follow">Seguindo: ' + rep1.length + ' Usuários</div></div>' 
        
    }
}
det.send()

det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name +'/commits', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        
        let rep1 = JSON.parse(this.responseText)
        for(let i=0; i<rep1.length; i++){

        inf.innerHTML += '<div><div id="msg">' + rep1[i].commit.message + '</div></div>' 

        }
    }
}
det.send()

det.open('GET', ' https://api.github.com/repos/ElenC/' + rep[0].name +'/branches', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
        for(let i=0; i<rep1.length; i++){

        inf.innerHTML += '<div><div id="branch">' + rep1[i].name+ '</div></div>' 

        }
    }
}
det.send()

det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name +'/languages', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
        for(prop in rep1){

        inf.innerHTML += '<div><div id="lang" >' + prop + '</div></div>' 

        }
    }
}
det.send()

