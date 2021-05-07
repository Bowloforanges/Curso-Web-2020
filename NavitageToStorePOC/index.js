//https://app.urlgeni.us/?
//https://urlgeni.us/IMSSDigital
function navigateToStore(){

    const userAgent = navigator.userAgent;
    var store = "";

    if((/Mobi|Android/i.test(userAgent))){
        //window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico';
        store = PlayStore;
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
        //window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
        store = AppStore;
    }
    if(/windows/i.test(userAgent)){
        alert("Windows PC");
    }
}

function toStore2(){
    window.location.href = 'https://urlgeni.us/IMSSDigital';
}