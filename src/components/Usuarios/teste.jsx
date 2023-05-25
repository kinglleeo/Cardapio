$(document).ready( function () {
    google.accounts.id.initialize({
        client_id: "977256094975-3dk0e1a6mo06bl19n89k9750lkh8jdfp.apps.googleusercontent.com",
        ux_mode: "redirect", 
        login_uri: 'http://localhost:3000/',
    })
        
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { type: "standard", shape:"rectangular", theme: "filled_blue", text:"Continuar com o Google", size: "large", logo_alignment:"left", width:"100%" }
    );
    
    google.accounts.id.prompt();
}, []);


google.accounts.id.prompt();