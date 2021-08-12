/*function onError(error){
	console.log(`Error: ${error}`);
}
*/

//Convert spotify link to youtube link
//Convert spotify embed to youtube link
function spotToYoutube(link){
	//TODO
}

//Create context menu

browser.menus.create({
	id: "spotify-to-youtube",
	title: "Spotify link to youtube",
	contexts: ["link","frame"],
});

browser.menus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "spotify-to-youtube"){
		if (info.frameUrl){// Spotify embed iframe
			console.log(info.frameUrl);
			browser.tabs.create({url:info.frameUrl});
		}else if (info.linkUrl){// Spotify link
			console.log(info.linkUrl);
			browser.tabs.create({url:info.linkUrl});
		}
	}
}
);
// Search youtube 
// youtube link
// redirect to youtube link
//}
