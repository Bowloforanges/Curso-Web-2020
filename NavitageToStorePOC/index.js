//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore(){

    const userAgent = navigator.userAgent;

    alert("User Agent: " + userAgent);

    /*if((/Mobi|Android/i.test(userAgent))){

        window.location.href = 'st.android.imsspublico://IMSSDigital'; //deeplink

        setTimeout(function(){ 

            window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico'; //playstore link

        }, 2000);
    
    } else if(/iPad|iPhone|iPod/i.test(userAgent)){
        //window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
        //window.location.href = 'gob.mx.imss.digital://IMSSDigital';

        window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8'; //deeplink (inexistente)

        setTimeout(function(){ 

            window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8'; //appstore link
            
        }, 2000);


    } else {
        alert("Por favor abra esta página en un dispositivo móvil para descargar la aplicación IMSS Digital.");
    }*/

}

