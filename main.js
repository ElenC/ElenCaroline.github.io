
    const acesso = new XMLHttpRequest()
    acesso.open('GET', 'https://api.github.com/users/ElenC/repos')
    
    acesso.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const main = document.querySelector('main')
            const cont = JSON.parse(acesso.responseText)
            
            for(let i =0; i<cont.length; i++){

                main.innerHTML += "<div id='container'><div>"+ cont[i].name + "<div id='name'><img id='img1' src='../imagens/" + cont[i].name + 
                ".png'></div><div id='html'><a href='"+ cont[i].html_url + "'target='_blank'><input type='button'id='button' value='ACESSAR'></a></div><div><a id='detalhe' href='detalhes.html'>Mais Detalhes</div></div>"
            }
        }
      localStorage.setItem('main')
    }
    acesso.send()
