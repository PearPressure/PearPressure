const newRoomEndpoint = 'https://pearpressure.daily.co/test-call/meeting-tokens/'
tokenEndpoint = 'https://pearpressure.daily.co/test-call/meeting-tokens/token';
/*var data = "{\"properties\":{\"hide_daily_branding\":false}}";

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://api.daily.co/v1/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "Bearer 44b40a95595ee9a1b106706e6e4dede27b4d0a06eb091eedd2d5240ee722a263");

xhr.send(data);
*/
async function createMtgRoom() {
    try {
        let response = await fetch(newRoomEndpoint),
            room = await response.json();
        return room;
    } catch (e) {
        console.error(e);
    }
}

async function createMtgLinkWithToken(room, properties = {}) {
    try {
        let response = await fetch(
            tokenEndpoint, {
                method: 'POST',
                url: 'https://pearpressure.daily.co/test-call/meeting-tokens',
                headers: {
                    authorization: 'Bearer 44b40a95595ee9a1b106706e6e4dede27b4d0a06eb091eedd2d5240ee722a263'
                },
                body: JSON.stringify({
                    properties: {
                        room_name: room.name, ...properties
                    }
                })
            },
        );
        let token = await response.text();
        return `${room.url}?t=${token}`;
    } catch (e) {
        console.error(e);
    }
}

