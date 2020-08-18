
    const acesso = new XMLHttpRequest()
    acesso.open('GET', 'https://api.github.com/users/ElenC/repos')
    
    acesso.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const main = document.querySelector('main')
            var cont = JSON.parse(acesso.responseText)
            
            for(let i =0; i<cont.length; i++){

                main.innerHTML += "<div id='container'><div id='name'>"+ cont[i].name + "<div><img id='img1' src='../imagens/" + cont[i].name + 
                ".png'></div><div id='html'><a href='"+ cont[i].html_url + "'target='_blank'><input type='button'id='button' value='ACESSAR'></a></div><div><a href='#' class='detalhe' id='"+ cont[i].name + "' onclick='enviar(this)'>Mais Detalhes</div></div>"
            }

        }
      
    }
    acesso.send()

    function enviar(e){
        var rep = []

        rep.push({name: e.id})
        var repJson = JSON.stringify(rep)
        localStorage.detalhe = repJson
        

        window.location.href = 'detalhes.html'
    }
  

 