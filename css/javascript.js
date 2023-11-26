var navs = document.getElementById('navs');
    
    window.onscroll = function(){
        
        if (window.pageYOffset >100) {
            
            navs.style.background = "black";
            navs.style.boxShadow = "0px 4px 2px white";
        }
        else{
            navs.style.background = "transparent";
            navs.style.boxShadow = "none";
        }
    }
