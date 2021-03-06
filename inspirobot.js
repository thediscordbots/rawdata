{
  "name": "inspirobot",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "YNrUg",
  "actions": [
    {
      "title": "🕒 Loading! 🕒",
      "author": "${member}",
      "color": "ff0000",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed1",
      "name": "Create Embed Message"
    },
    {
      "url": "https://inspirobot.me/api?generate=true&oy=vey",
      "storage": "1",
      "varName": "img",
      "name": "Store HTML From Webpage"
    },
    {
      "title": "✔ Got your image! ✔",
      "author": "${member}",
      "color": "00ff00",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "${tempVars(\"img\")}",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "message": "1",
      "varName": "embed2",
      "info": "0",
      "storage": "1",
      "varName2": "obj2",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "channel": "0",
      "varName2": "",
      "storage3": "1",
      "varName3": "obj",
      "name": "Send Embed Message"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "obj",
      "storage2": "1",
      "varName2": "obj2",
      "name": "Edit Embed"
    }
  ]
}