var inf = document.querySelector('main')

var rep = JSON.parse(localStorage.getItem('detalhe'))

if(rep == null){
    rep =[]
} 


const det = new XMLHttpRequest()
det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name, false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
    
        inf.innerHTML += '<div><div>' + rep1.owner.login + '</div><div><img src="' + rep1.owner.avatar_url + '"></div><div>' 
        + rep1.description + '</div></div>' 
        
    }
}
det.send()


det.open('GET', ' https://api.github.com/users/ElenC/following', false )

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
    
        inf.innerHTML += '<div>Seguindo: ' + rep1.length + ' Usuários</div>' 
        
    }
}
det.send()

det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name +'/commits', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        
        let rep1 = JSON.parse(this.responseText)
        for(let i=0; i<rep1.length; i++){

        inf.innerHTML += '<div>' + rep1[i].commit.message + '</div>' 

        }
    }
}
det.send()

det.open('GET', ' https://api.github.com/repos/ElenC/' + rep[0].name +'/branches', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
        for(let i=0; i<rep1.length; i++){

        inf.innerHTML += '<div>' + rep1[i].name+ '</div>' 

        }
    }
}
det.send()

det.open('GET', 'https://api.github.com/repos/ElenC/' + rep[0].name +'/languages', false)

det.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

        let rep1 = JSON.parse(this.responseText)
        for(prop in rep1){

        inf.innerHTML += '<div>' + prop + '</div>' 

        }
    }
}
det.send()

