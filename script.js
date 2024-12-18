const shareButton = document.querySelector('#share');
const previewAvatar = document.querySelector('#previewAvatar');

shareButton.addEventListener('click', () => {

    // create element
    const shareBox = document.createElement("div");
    
    // setAttribute class = "shareBox"
    shareBox.setAttribute("class", "shareBox");

    // add element in sharebox
    shareBox.innerHTML = `
        <div class = "socialBox">
            <p>Share</p>
            <a href="#"><img src="images/icon-facebook.svg" alt=""></a>
            <a href="#"><img src="images/icon-twitter.svg" alt=""></a>
            <a href="#"><img src="images/icon-pinterest.svg" alt=""></a>
        </div>
        <a id="remove" href="#"><img class="shareImage" src="images/icon-share.svg" alt=""></a>
    `

    // append chlid (shareBox)
    previewAvatar.appendChild(shareBox);
    
    // protech bubble click delay time 500ms
    setTimeout(() => {
        // event after click icon, previireAvatar appendchlid
        const removeShare = document.getElementById('remove');   
        removeShare.addEventListener('click', () => {
    
            // remove chilid (shareBox)
            previewAvatar.removeChild(shareBox);
        });
        
    }, 500);
});
