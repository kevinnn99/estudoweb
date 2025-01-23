const myImage = document.querySelector("img");


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "C:/vscode/web/imagen/yugioh_ledd-ena01_pt.jpg") {
        myImage.setAttribute("src" , "C:/vscode/web/imagen/bluedrag_ss02_ena01_en.webp");
    } else {
        myImage.setAttribute("src" , "C:/vscode/web/imagen/yugioh_ledd-ena01_pt.jpg")
    }
};