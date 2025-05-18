const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94710953535";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94710953535";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_12_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxUc1gvS2VxRU9aOW8wWmZVcVFVWEhqWVV2N1c2ejlHZnlGUHAxbVFrV0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtYWHNzYS1qUV91YTNIUnc1WjlXX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGI0ZGZmYWMtMGYyYS00YWY5LThhZjAtY2ZlNzI1MmYwYjk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDE2NixcbiAgICAgIDEwNixcbiAgICAgIDI0NSxcbiAgICAgIDE1NixcbiAgICAgIDIyNCxcbiAgICAgIDE0NyxcbiAgICAgIDAsXG4gICAgICAxNjAsXG4gICAgICAxOSxcbiAgICAgIDU4LFxuICAgICAgMjAwLFxuICAgICAgNjgsXG4gICAgICAxMTIsXG4gICAgICAxMTksXG4gICAgICAzLFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgMTQ4LFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgNTcsXG4gICAgICA4NCxcbiAgICAgIDEzOSxcbiAgICAgIDI0NyxcbiAgICAgIDE5MyxcbiAgICAgIDQ4LFxuICAgICAgMjEzLFxuICAgICAgODcsXG4gICAgICAxMjYsXG4gICAgICAyMzcsXG4gICAgICAyMDEsXG4gICAgICAxNzIsXG4gICAgICAxODEsXG4gICAgICAyMCxcbiAgICAgIDExMCxcbiAgICAgIDgwLFxuICAgICAgMTYwLFxuICAgICAgMTIyLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZEeVlJQ0VQTElwc0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsTUJQWUw2M256Zk1kdzUwNkxtWHRVcGc5bXg4NG43bjFQbXdEY3RMSVVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJZVVJoWGI4cFNnaVNsT3VmZDdhYVYvbGFQS2ZvYWtGSzJZTDBxMWVxeXFlVHJVNVR2M2Y0S0o4S2Z4VU1yTG51bTQyckdCSWZUWVRydjFCU1ZQTENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF0V1RZMUlRcWFMc205bVlJUkhtVE14MFRLNmMyZFpLTjg1UUpMcnQyUFE0ajJDbGpFMFdaUG1QT1hjYktWUVZibGNISE1KTFJTcGREM1VONnFVSkFBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTA5NTM1MzU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhlc2hhblwiLFxuICAgIFwibGlkXCI6IFwiMzE4OTkzOTMyMjQ4MjU6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzEwOTUzNTM1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NzU1OTU0NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
