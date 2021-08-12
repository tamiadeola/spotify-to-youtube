//Create context menu
//browser.contextMenus.create({
 //   id: "spotify-to-youtube",
  //  title: "Convert spotify to youtube",
   // contexts: ["link"],
//});
console.log("START");
var links = document.getElementsByTagName("a");
var spotifylinks = [];
//Signal for working
document.body.style.border = "5px solid red";
//
// Find embedded spotify links
for (var i = 0; i < links.length; i++) {
    //if (links[i].href.contains("spotify")){
    //spotifylinks.add(links[i]);
    //}
    if (links[i].href.toString().includes("open.spotify.com/track/")) {
        spotifylinks.push(links[i].href.toString());
        console.log("href :" + links[i].href.toString());

    } else if (links[i].title.toString().includes("open.spotify.com/track/")) {
        spotifylinks.push(links[i].title.toString());
        console.log("title: " + links[i].title.toString());
    }
}
// Form of link to look for
//	"https://open.spotify.com/"
console.log(spotifylinks);
console.log("END");
// Scrape info
// Google youtube link
// replace with youtube link
//}
