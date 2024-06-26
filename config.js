const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256709521063";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_21_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldGbEZRRjdmYnVOR2JSR05pTzIvMk40RnB4S0VOL2JXTEJ3aTJrOWhkdW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktkQ25DN0dLU0MyUlQzRUpKTXYzZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzNhYzVmNmQtYTQ0Ni00MDkwLTk5MzgtN2ZiZDgwMGI0MjUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMjI4LFxuICAgICAgMTUxLFxuICAgICAgMTgwLFxuICAgICAgMTEwLFxuICAgICAgNjksXG4gICAgICAyMzQsXG4gICAgICAyMDIsXG4gICAgICAxMDAsXG4gICAgICAxNTQsXG4gICAgICA4MCxcbiAgICAgIDI0OSxcbiAgICAgIDksXG4gICAgICAxNDcsXG4gICAgICAyNTEsXG4gICAgICA4NixcbiAgICAgIDQ2LFxuICAgICAgMTQyLFxuICAgICAgMTExLFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA0MixcbiAgICAgIDgzLFxuICAgICAgMTQwLFxuICAgICAgMTU1LFxuICAgICAgMjA4LFxuICAgICAgMzQsXG4gICAgICA4NyxcbiAgICAgIDczLFxuICAgICAgMTkzLFxuICAgICAgODIsXG4gICAgICAyMDUsXG4gICAgICAxMjgsXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICAyNTMsXG4gICAgICAxMjcsXG4gICAgICAxMjAsXG4gICAgICAyNDEsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTEg1NEhUTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA5NTIxMDYzOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTkyMDg3NDcwNTEyNjo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNm16dGtHRVBtSHo3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJaN3RXanpaTHcySS9hUWlOUU1pbXpzRHloTlduR0pwZ2tkYVFJWjNpMzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG1yMG5iQTdoTjYwRUJJL3Q0K1ZiM29ycnRDbjFiZis5UjNOUU1NRk44V2ZBblJWZFQxS0ZRbDlScXBiMk5pc0hGOU1UMlh3cWtHeWlUaVhUNVZ2RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0NEbVFMSUh4eFdrNFhwYWx3MGoveVkvc3I2bS9IQTRiRXpsRGMvdDNIS3FiOWNXcDBiTUlMTTFrTW1sSU1tamNVVlJUZWtPUTdva3J3MFVjOUIvQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA5NTIxMDYzOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzY1NjkzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDFsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjZ1JCSFdKUiswSHRwUFQ5bGcrSkxpbGtIVDdrMjVsSW54NVV0c0hnUWo0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTg1NDIxNTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
