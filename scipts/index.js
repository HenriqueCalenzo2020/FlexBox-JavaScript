for(var videoid = 0; videoid < 6; videoid++)
{
    var video = window.document.querySelectorAll("img")[videoid];
    var legends = window.document.querySelectorAll("p")[videoid];

    video.style.background = "#CCCCCC";
    legends.innerText = "Legenda X";
}