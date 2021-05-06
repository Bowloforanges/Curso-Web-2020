function navigateToStore(){

    const userAgent = navigator.userAgent;

    if((/Mobi|Android/i.test(userAgent))){
        window.location.href = 'https://play.google.com/store/apps/details?id=st.android.imsspublico';
    }
    if(/iPad|iPhone|iPod/i.test(userAgent)){
        window.location.href = 'https://itunes.apple.com/us/app/imss-digital/id975273006?mt=8';
    }
    if(/windows/i.test(userAgent)){
        alert("Windows PC");
    }
}