var scenes = [ "src 1", "src 2", "src 3", "src 4", "src 5", "src 6", "src 7", "src 8" ];

var ViewCount = 0;
var ip = "127.0.0.1";
var port = "4444";

window.addEventListener("load", init, false);

var socketisOpen = 0;
var intervalID = 0;
var PRVid = "box1";
var PGMid = "box2";

function setPRV(id) {
	lg("PRV Old: " + PRVid + " New: " + id);
	if (PGMid != PRVid) {
		document.getElementById(PRVid).style.background = "grey";
	}
	if (PGMid != id) {
		document.getElementById(id).style.background = "green";
	}
	PRVid = id;
}

function setPGM(id) {
	lg("PGM Old: " + PGMid + " New: " + id);
	if (id != PGMid) {
		document.getElementById(PGMid).style.background = "grey";
	}
	document.getElementById(id).style.background = "red";
	PGMid = id;
}

function event(text) {
	json = JSON.parse(text);
	switch (json["update-type"]) {
	case "PreviewSceneChanged":
		switch (json["scene-name"]) {
		case scenes[0]:
			setPRV("box1");
			break;
		case scenes[1]:
			setPRV("box2");
			break;
		case scenes[2]:
			setPRV("box3");
			break;
		case scenes[3]:
			setPRV("box4");
			break;
		case scenes[4]:
			setPRV("box5");
			break;
		case scenes[5]:
			setPRV("box6");
			break;
		case scenes[6]:
			setPRV("box7");
			break;
		case scenes[7]:
			setPRV("box8");
			break;
		}
		break;
	case "SwitchScenes":
		switch (json["scene-name"]) {
		case scenes[0]:
			setPGM("box1");
			break;
		case scenes[1]:
			setPGM("box2");
			break;
		case scenes[2]:
			setPGM("box3");
			break;
		case scenes[3]:
			setPGM("box4");
			break;
		case scenes[4]:
			setPGM("box5");
			break;
		case scenes[5]:
			setPGM("box6");
			break;
		case scenes[6]:
			setPGM("box7");
			break;
		case scenes[7]:
			setPGM("box8");
			break;
		}
		break;
	case "TransitionBegin":
		break;
	}
}

function init() {
	doConnect();
}

function sendCommand(p) {
	if (socketisOpen) {
		websocket.send(p);
		lg("sent: " + p)
	} else {
		console.log('Fail: Not connected\n');
	}
}

function doConnect() {
	websocket = new WebSocket("ws://" + ip + ":" + port + "/");
	websocket.onopen = function(evt) {
		onOpen(evt)
	};
	websocket.onclose = function(evt) {
		onClose(evt)
	};
	websocket.onmessage = function(evt) {
		onMessage(evt)
	};
	websocket.onerror = function(evt) {
		onError(evt)
	};
}

function onClose(evt) {
	socketisOpen = 0;
	if (!intervalID) {
		intervalID = setInterval(doConnect, 5000);
	}
}

function onOpen(evt) {
	socketisOpen = 1;
	clearInterval(intervalID);
	intervalID = 0;
}
function lg(text) {
	console.log(text);
}
function onMessage(evt) {
	event(evt.data);
}

function onError(evt) {
	socketisOpen = 0;
	if (!intervalID) {
		intervalID = setInterval(doConnect, 5000);
	}
}

function doDisconnect() {
	socketisOpen = 0;
	websocket.close();
}