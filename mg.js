const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://peter-system.glitch.me/`);
}, 280000);
 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const cd = require('countdown');
const totime = require('to-time');
const Enmap = require('enmap');
const dbg = new Enmap({ name: 'Giveaway' });
client.login(process.env.MG_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////[ STATUS ]////
client.on('ready', () => {
 client.user.setStatus("online")
});
client.on('ready', () => {
     client.user.setActivity("PX | Beta",{type: 'playing'});
 
});
////
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content == prefix + "ping") {
 message.channel.send('› pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\n› Time taken: ${PinG} ms.\n› Discord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
/////////////
////[ H E L P ]////
client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
message.channel.send('**<a:x3:712913420835356682> | Bot Orders\n----------------------------\n<a:x12:712913375956434965> | ``$Profiles`` ➺ أوامـر الـبـروفـايـل\n<a:x24:712913348701716550> | ``$Public`` ➺ أوامـر الـعـامـة\n<a:x26:712913342209064990> | ``$Admin`` ➺ أوامـر الأدمـن\n<a:x8:712913394532876335> | ``$Giveaway`` ➺ أوامـر الجـيـفـاواي\n<a:x27:712913341621731359> | ``$Protection`` ➺ أوامـر الـحـمـايـة\n<a:x5:712913402015514664> | ``$Tickets`` ➺ أوامـر الـتـيـكـيـت\n<a:x25:712913343828197447> | ``$Submit`` ➺ أوامـر الـتـقـديـم\n<a:x10:712913387264409621> |  ``$About`` ➺ أوامـر مـعـلـومـات الـبـوت\n-----------------------------**')
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('')
  if (true) {
if (message.content === prefix+'Profiles') {
      message.author.send('**<a:x3:712913420835356682> | Profile Menu\n----------------------------\n<a:x11:712913377508458577> | ``$profile`` ⇏ لـعـرض الـبـروفـايـل الـخـاص بـك\n\n<a:x11:712913377508458577> | ``$note`` ⇏ لـوضـع سـيـرة ذاتـيـة لـبـروفـايـلـك\n\n<a:x11:712913377508458577> | ``$rep`` ⇏ لأعطـاء ريـب لـشـخـص\n\n<a:x11:712913377508458577> | ``$credits`` ⇏ لـرؤيـة الـكـريدت الـخـاص بـك\n\n<a:x11:712913377508458577> | ``$daily`` ⇏ لاخـذ حـصـتـك الـيـومـيـة مـن الـكـريدت\n\n<a:x11:712913377508458577> | ``$trans @mention amount`` ⇏ لـتـحويـل كـريدت لشـخـص اخر\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });

client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Profiles') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Public') {
      message.author.send('**<a:x3:712913420835356682> | Public Menu\n----------------------------\n<a:x1:712913421934395473> | ``$avatar`` ⇏ لـعـرض صـورتـك\n\n<a:x1:712913421934395473> | ``$image`` ⇏ لـعـرض صـورة الـسـيرفـر\n\n<a:x1:712913421934395473> | ``$user`` ⇏ لـرؤيـة مـعـلـومـاتـك \n\n<a:x1:712913421934395473> | ``$server`` ⇏ لـرؤيـة مـعـلـومـات عـن الـسـيـرفـر\n\n<a:x1:712913421934395473> | ``$allbots`` ⇏ لـمـعـرفـة كـم بـوت بالـسـيـرفـر\n\n<a:x1:712913421934395473> | ``$colors`` ⇏ لـعـرض قـائـمـة الألـوان\n\n<a:x1:712913421934395473> | ``$color`` ⇏ لاخـتـيـار لـون فـي الـسـيـرفـر\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Public') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Admin') {
      message.author.send('**<a:x3:712913420835356682> | Admin Menu\n----------------------------\n<a:x2:712913420986351686> | ``$uptime`` ⇏ لـمـعـرفـة كـم صـار الـبـوت شـغـال\n\n<a:x2:712913420986351686> | ``$mute`` ⇏ لأعطـاء مـيـوت كـتـابـي\n\n<a:x2:712913420986351686> | ``$unmute`` ⇏ لـفـك الـمـيـوت الـكـتـابـي\n\n<a:x2:712913420986351686> | ``$kick`` ⇏ لأعـطـاء طـرد لـشـخـص\n\n<a:x2:712913420986351686> | ``$ban`` ⇏ لـتـبـنـيد عـضـو\n\n<a:x2:712913420986351686> | ``$unban`` ⇏ لـفـك الـبـانـد عـن عـضـو\n\n<a:x2:712913420986351686> | ``$setnick`` ⇏ لـتـغـيـر اسـم عـضـو\n\n<a:x2:712913420986351686> | ``$moveall`` ⇏ لـسـحـب جـمـيـع الأعـضـاء للـروم الـصـوتـي\n\n<a:x2:712913420986351686> | ``$mc`` ⇏ لـقـفـل الـشـات\n\n<a:x2:712913420986351686> | ``$uc`` ⇏ لـفـتـح الـشـات\n\n<a:x2:712913420986351686> | ``$ct`` ⇏ لأنـشـاء روم كـتـابـي\n\n<a:x2:712913420986351686> | ``$cv`` ⇏ لأنـشـاء روم صـوتـي\n\n<a:x2:712913420986351686> | ``$clear`` ⇏ لـمـسـح عـدد مـعـيـن مـن الـرسـائـل\n---------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Admin') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });


client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Giveaway') {
      message.author.send('**<a:x3:712913420835356682> | Giveaway Menu\n----------------------------\n<a:x8:712913394532876335> | ``$start`` ⇏ لـبـدا قـيـفـاواي\n<a:x8:712913394532876335> | ``$reroll`` ⇏ لاعـادة اخـتـيـار فـائـز اخـر\n<a:x8:712913394532876335> | ``$gend`` ⇏ لأنـهـاء الـقـيفـاواي\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Giveaway') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });


client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Protection') {
      message.author.send('**<a:x3:712913420835356682> | Protection Menu\n----------------------------\n<a:x22:712913351922942052> | ``$antibots on`` ⇏ لـتـفـعـيـل مـانـع دخـول الـبـوتـات\n\n<a:x22:712913351922942052> | ``$antibots off`` ⇏ لاغـلاق مـانـع دخـول الـبـوتـات\n\n<a:x22:712913351922942052> | ``$settings limitsban`` ⇏ لـتـحـديـد عـدد أقـصـي للـبـانـد\n\n<a:x22:712913351922942052> | ``$settings limitskick`` ⇏ لـتـحـديـد عـدد أقـصـي للـطـرد\n\n<a:x22:712913351922942052> | ``$settings limitsroleC`` ⇏ لـتـحـديـد عـدد أقـصـي لأنـشـاء رول\n\n<a:x22:712913351922942052> | ``$settings limitsroleD`` ⇏ لـتـحـديـد عـدد أقـصـي لـمـسـح رول\n\n<a:x22:712913351922942052> | ``$settings limitschannelD`` ⇏ لـتـحـديـد عـدد أقـصـي لـمـسـح روم\n---------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Protection') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });



client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Tickets') {
      message.author.send('**<a:x3:712913420835356682> | Ticket Menu\n----------------------------\n<a:x9:712913388698730497> | ``$new`` ⇏ لأنـشـاء تـذكـرة\n\n<a:x9:712913388698730497> | ``$close`` ⇏ لـقـفـل تـذـكـرة\n\n<a:x9:712913388698730497> | ``$add`` ⇏ لأضـافـة شـخـص للـتـذـكـرة\n\n<a:x9:712913388698730497> | ``$remove`` ⇏ لأزالـة شـخـص مـن الـتـذكـرة\n\n<a:x9:712913388698730497> | ``$mtickets`` ⇏ لـتـفـعـيـل واغـلاق خـاصـيـة فـتـح الـتـذاكـر\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Tickets') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Submit') {
      message.author.send('**<a:x3:712913420835356682> | Submit Menu\n----------------------------\n<a:x25:712913343828197447> | ``$room1`` ⇏ لأنـشـاء روم الـتـقـديـمـات\n\n<a:x25:712913343828197447> | ``$room2`` ⇏ لأنـشـاء روم الـقـبـول والـرفـض\n\n<a:x25:712913343828197447> | ``$submit`` ⇏ للـتـقـديـم عـلـي رتـبـة\n\n<a:x13:712913365508292610> | ``$apply @user RoleName`` ⇏ لـقـبـول عـضـو\n\n<a:x30:714394016883540031> | ``$reject @user`` ⇏ لـرفـض عـضـو\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Submit') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'') {
      message.author.send('**<a:x3:712913420835356682> | Game Menu\n----------------------------\n<a:x10:712913387264409621> | ``%hl`` ⇏ لـعـبـة هـل تـعـلـم\n\n<a:x10:712913387264409621> | ``%mr`` ⇏ لـعـبـة مـريـم\n\n<a:x10:712913387264409621> | ``%e7`` ⇏ لـعـبـة احـزر الـفـريـق\n\n<a:x10:712913387264409621> | ``%lw`` ⇏ لـعـبـة لـو خـيـروك\n\n<a:x10:712913387264409621> | ``%3k`` ⇏ لـعـبـة عـقـاب\n\n<a:x10:712913387264409621> | ``%kt`` ⇏ لـعـبـة كـت تـويـت\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Games') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'About') {
      message.author.send('**<a:x3:712913420835356682> | About Menu\n----------------------------\n<a:x4:712913409229979689> | ``%bot`` ⇏ لـعـرض مـعـلـومـات عـن الـبـوت\n\n<a:x4:712913409229979689> | ``$inv`` ⇏ لـدعـوة الـبـوت لـسـيـرفـرك\n\n<a:x4:712913409229979689> | ``$support`` ⇏ لـعـرض سـيـرفـر الـدعـم الـفـنـي\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'About') {
message.channel.send("<a:x13:712913365508292610> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'support') {
 /// حط رابط سيرفرك مكان YourServer Here
      message.author.send('**<a:x3:712913420835356682> | Bot Support\n<a:x3:712913420835356682> - <https://discord.gg/9uwdRH>**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'support') {
message.channel.send("<a:x13:712913365508292610> **-** **Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'inv') {
         //ملحوظة هنا شيل كلمة IDHERE وحط ايدي البوت حقك
      message.author.send('**<a:x3:712913420835356682> | Bot Invite\n<a:x3:712913420835356682> - https://discordapp.com/oauth2/authorize?client_id=747755259228585986&permissions=8&scope=bot**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'inv') {
message.channel.send("<a:x13:712913365508292610> **-** **Check Your DM**")
  }
   });
////[ H E L P ]

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command == "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها ??```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

///------------------///

//////////////////////////////////Codes / الكودات///////////////////////////


//////code discrim | تغير التاق /////////


////////Code server////////

client.on('message', function(msg) {
    if(msg.content == prefix  + 'server') {
      let embed = new Discord.RichEmbed()
      .setColor('000000')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}**`)
      .addField('**⊃** **__Region__ :**',`» [** ${msg.guild.region} **]`,true)
      .addField('**⊃** **__Roles __:**',`» [** ${msg.guild.roles.size} **]`,true)
      .addField('**⊃** **__Members __:**',`» [** ${msg.guild.memberCount} **]`,true)
      .addField('**⊃** **__Online Members__ :**',`» [** ${msg.guild.members.filter(m => m.presence.status == 'online').size} **]`,true)
      .addField('**⊃** **__Text Channels __:**',`» [** ${msg.guild.channels.filter(m => m.type === 'text').size}** ]`,true)
      .addField('**⊃** **__Voice Channels__ :**',`» [** ${msg.guild.channels.filter(m => m.type === 'voice').size} **]`,true)
      .addField('**⊃** **__Owner __:**',`» **[ ${msg.guild.owner} ]**`,true)
      .addField('**⊃** **__ID Server__ :**',`» **[ ${msg.guild.id} ]**`,true)
      .addField('**⊃** **__Created IN __:**', msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

/////////Code bot ////////

 client.on('message', message => {
    if (message.content == prefix + "bot") {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('000000')
            .setTitle('**About Plume Bot**')
            .addField('**⊃** **__Ping__ :**' , [`» [ ${Date.now() - message.createdTimestamp} ]` + 'MS' ], true)
            .addField('**⊃** **__RAM Usage__ :**', `» [ ${(process.memoryUsage().rss / 1048576).toFixed()} ]MB`, true)
            .addField('**⊃** **__Servers__ :**', `» [ ${client.guilds.size} ]`, true)
            .addField('**⊃** **__Channels__ :**' , `»  [ ${client.channels.size} ] ` , true)
            .addField('**⊃** **__Users__ :**' ,`»  [ ${client.users.size} ]` , true)
            .addField('**⊃** **__Name__ :**' , `»  [ ${client.user.tag} ] ` , true)
            .addField('**⊃** **__ID __:**' , `»  ${client.user.id} ` , true)
			      .addField('**⊃** **__Prefix __:**' , `» [ $ ]` , true)
			      .addField('**⊃** **__Language__ :**' , `»  [ Java Script ] ` , true)
            .addField('**⊃** |** __Owner Bot__** :' , `» <@739831331147481199>` , true) 
    })
    
}
});


///////////// Code  uprime  //////////////

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `› [${days}] day  › [${hours}] hour  › [${minutes}] min › [${seconds}] sec` + "`");

}
});

///// Code allbots//////
client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**<a:x1:712913421934395473> | Found ${message.guild.members.filter(m=>m.user.bot).size} bots inServer**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


////////Code Image ///////
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`<a:x13:712913365508292610> | Avatar Server: ${message.guild.name}`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

///////Code avtar//////
client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("<a:x13:712913365508292610> | Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});

/////// //////
client.on('message' , message => {
if(message.content.startsWith(prefix + "user")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    let game;
    if (user.presence.game === null) {
        game = '<a:x30:714394016883540031> No Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'xdddddd';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = '<a:x19:712913361590943780>';
    } else if (user.presence.status === 'dnd') {
        status = '<a:x15:712913362027282483>';
    } else if (user.presence.status === 'idle') {
        status = '<a:x20:712913361418846229>';
    } else if (user.presence.status === 'offline') {
        status = '<a:x18:712913361595007017>';
    }
   
    const embed = new Discord.RichEmbed()
	.addField('**<a:x7:712913395170410579> | Username: **', `» ${user.username}#${user.discriminator}` ,true)
	.addField('**<a:x7:712913395170410579> | Playing: **', `» ${game}` ,true)
	.addField('**<a:x7:712913395170410579> | Status: **', `» ${status}` ,true)
	.addField('**<a:x7:712913395170410579> | JoinDiscord: **', `» ${joineddiscord}` ,true)
	.addField('**<a:x7:712913395170410579> | ID: **', `» ${user.id}` ,true)
	.addField('**<a:x7:712913395170410579> | Bot: **', `» ${user.bot}` ,true)
  .setFooter(`Copy Right©️ Reserved For: ${client.user.username}Bot™`)
	     .setThumbnail(user.displayAvatarURL)
	     .setAuthor(`UserInfo: ${user.username}`, user.displayAvatarURL)
	     .setColor('#7289d9');
  message.channel.send({embed})
}
 });

/////

// ------------ = [Colors] = ------------ //
 
client.on("message", message => {
      if (!message.guild || message.author.bot) return;
        if (message.content == "$colors" || message.content == "الوان") {
          var fsn = require('fs-nextra');
          fs.readdir('./colors', async (err, files) => {
              var f = files[Math.floor(Math.random() * files.length)];
              var {
                  Canvas
              } = require('canvas-constructor');
              var x = 0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                  x += 100;
                  if (x > 100 * 12) {
                      x = 100;
                      y += 80;
                  }
              });
              var image = await fsn.readFile(`./colors/${f}`);
              var xd = new Canvas(100 * 11, y + 350)
                  .addBeveledImage(image, 0, 0, 100 * 11, y + 260, 25)
                  .setTextBaseline('middle')
                  .setColor('black')
                  .setTextSize(80)
                  .addText(`Color List`, 375, 75);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                  x += 75;
                  if (x > 100 * 10) {
                      x = 75;
                      y += 80;
                  }
                  xd
                      .setTextBaseline('middle')
                      .setTextAlign('center')
                      .setColor(role.hexColor)
                      .addBeveledRect(x, y, 60, 60, 15)
                      .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x + 30, y + 30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
      }
  })
 
 // ------------ = [select   Colors] = ------------ //
 
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  if(message.content.split(' ')[0] == prefix+'color' || message.content.split(' ')[0] == 'لون'){
  const embedd = new Discord.RichEmbed()
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:x30:714394016883540031> **-** **No Color With This Name/Number **`)
  .setColor(`ff0000`)
 
  if(!isNaN(args) && args.length > 0)
 
 
  if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
  var a = message.guild.roles.find("name",`${args}`)
   if(!a)return;
  const embed = new Discord.RichEmbed()
 
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:x13:712913365508292610> **-** **Done Give You This Color**`)
 
  .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
  if (!args)return;
  setInterval(function(){})
     let count = 0;
     let ecount = 0;
  for(let x = 1; x < 201; x++){
 
  message.member.removeRole(message.guild.roles.find("name",`${x}`))
 
  }
   message.member.addRole(message.guild.roles.find("name",`${args}`));
 
 
  }
  });
 
////

client.on("message", message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let embed = new Discord.RichEmbed().setImage(
    "https://1.top4top.net/p_1410p11ou1.png"
  );

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply(
        "<a:x30:714394016883540031> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **You Don't Have ` BAN_MEMBERS ` Permission**"
      );

    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **I Don't Have ` BAN_MEMBERS ` Permission**"
      );

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(3)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!message.guild.member(user).bannable)
      return message.reply(
        "<a:x30:714394016883540031> **-** **I Don't Have Permission For Ban This User**"
      );

    if (!time.match(/[1-60][s,m,h,d,w]/g))
      return message.channel.send(
        "<a:x30:714394016883540031> This Time Is Incorrect"
      );

    if (!Reason) {
      message.guild.member(user).ban({ reason: Reason });
    }

    if (!Reason && time) {
      message.guild.member(user).ban(7, user);
    }

    if (!time) {
      message.guild.member(user).ban(7, user);
    }
    if (time) {
      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    if (time && Reason && user) {
      message.guild.member(user).ban({ reason: Reason });

      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    message.channel.send(
      `<a:x13:712913365508292610> **-** **${user.tag} banned from the server ! :airplane: **`
    );
  }
});

//////////







////////
client.on("message", async message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let muteRole = message.guild.roles.find("name", "muted");

  let embed = new Discord.RichEmbed().setImage(
    "https://5.top4top.net/p_14102aq7q1.png"
  );

  if (command == "mute") {
    if (!muteRole)
      return message.guild.createRole({ name: "muted", permissions: [] });

    if (!message.channel.guild)
      return message.reply(
        "<a:x30:714394016883540031> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "<a:x30:714394016883540031> **-** **You Don't Have ` MUTE_MEMBERS ` Permission**"
      );

    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "<a:x30:714394016883540031> **-** **I Don't Have ` MUTE_MEMBERS ` Permission**"
      );

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(4)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!message.guild.member(user).bannable)
      return message.channel.send(
        "<a:x30:714394016883540031> **-** **I Don't Have Permission For Mute This User**"
      );

    if (!Reason) {
      message.guild.member(user).addRole(muteRole);
    }

    if (!Reason && time) {
      message.guild.member(user).addRole(muteRole);
    }

    if (!time) {
      message.guild.member(user).addRole(muteRole);
    }
    if (time) {
      if (!time.match(/[1-60][s,m,h,d,w]/g))
        return message.channel.send(
          "<a:x30:714394016883540031>  This Time Is Incorrect"
        );

      setTimeout(() => {
        message.guild.member(user).removeRole(muteRole);
      }, ms(time));
    }

    if (time && Reason && user) {
      message.guild.member(user).addRole(muteRole);

      setTimeout(() => {
        message.guild.member(user).removeRole(muteRole);
      }, ms(time));
    }

    message.channel.send(
      `<a:x13:712913365508292610> **-**  ${user} **has been muted !** :zipper_mouth:`
    );
  }
});

////

client.on("message", message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply(
        "<a:x30:714394016883540031> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply(
          "<a:x30:714394016883540031> **-** **You Don't Have KICK_MEMBERS Permission**"
        )
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **I Don't Have KICK_Members Permission**"
      );
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    let embed = new Discord.RichEmbed().setImage(
      "https://6.top4top.net/p_14100i64i1.png"
    );
    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!reason) return message.reply("**Write Reason For Kick.**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "<a:x30:714394016883540031> **-** **I Don't Have Permission For Kick This User**"
      );

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `<a:x13:712913365508292610> **-** **${user.tag} Kicked From Server**`
    );
  }
});

////

client.on("message", async message => {
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send("<a:x30:714394016883540031> **-** **This command only for servers**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "<a:x30:714394016883540031> **-** **You Don't Have ` MANAGE_ROLES ` Permission**"
    );
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message.channel
      .send(
        "<a:x30:714394016883540031> **-** **I Don't Have ` MANAGE_ROLES ` Permission**"
      )
      .then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "-muteeetttee") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let embed = new Discord.RichEmbed().setImage(
      "https://5.top4top.net/p_14102aq7q1.png"
    );
    if (!tomute) return message.channel.sendEmbed(embed);
    if (tomute.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:x30:714394016883540031> **-** **Sorry I Don't Have ` MANAGE_MESSAGE ` Permission"
      );
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime)
      return message.channel.send(
        "<a:x30:714394016883540031>  This Time Is Incorrect"
      );

    await tomute.addRole(muterole.id);
    message.channel.send(
      "<a:x13:712913365508292610> **-** **has been muted !** :zipper_mouth:"
    );
    setTimeout(function() {
      tomute.removeRole(muterole.id);
      message.channel.send(
        `<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `
      );
    }, ms(mutetime));
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel
        .sendMessage(
          "<a:x30:714394016883540031> **-** **You Don't Have Permission For Unmute This User."
        )
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message
        .reply(
          "<a:x30:714394016883540031> **-** **I Don't Have `MANAGE_ROLES` Permission**"
        )
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage(
        "<a:x30:714394016883540031> **-** **I can't find this member**"
      );

    let role = message.guild.roles.find(r => r.name === "muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "<a:x30:714394016883540031> **-** **This user not muted**"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "<a:x30:714394016883540031> **-** **Done unmuted.**"
    );

    return;
  }
});


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "allllll") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:x13:712913365508292610> **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `<a:x30:714394016883540031> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

////

client.on("message", message => {
  if (message.content.startsWith(prefix + "setnick")) {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("MANAGE_NICKNAMES") ||
      !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")
    )
      return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args)
      return message.channel.send(
        `**<a:x30:714394016883540031> Write:** ${prefix}setnick \`\`@Name\`\` nickname`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `<a:x30:714394016883540031> | I couldn't update that user. Please check my permissions and role position!`
      );
    message.guild
      .member(user.user)
      .setNickname(`${nick}`)
      .then(() => {
        message.channel.send(
          `<a:x13:712913365508292610> | Done changed **${user.user.username}** nickname to **${nick}**`
        );
      })
      .catch(console.error);
  }
});

////

client.on("message", message => {
  if (message.content.startsWith(prefix + "moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        "<a:x30:714394016883540031> **-** **You Dont Have Permssion**"
      );
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **Check My Permession**"
      );
    if (message.member.voiceChannel == null)
      return message.channel.send(
        `<a:x30:714394016883540031> **-** **Join Voice Room**`
      );
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `<a:x13:712913365508292610> **-** **Done Move All Members To Your Room**`
    );
  }
});

////

client.on("message", luxy => {
  if (luxy.content === prefix + "mc" || luxy.content === "قفل الشات") {
    if (!luxy.channel.guild)
      return luxy.reply("<a:x30:714394016883540031> | **This command only for servers**");

    if (!luxy.member.hasPermission("MANAGE_MESSAGES"))
      return luxy.reply("**__عــلــي كــيــف أمــك تــقــفــل الــشــات__**");
    luxy.channel
      .overwritePermissions(luxy.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        luxy.reply("**__تـــم قــفــل الــشــات__ :lock: **");
      });
  }
  if (luxy.content === prefix + "uc" || luxy.content === "فتح الشات") {
    if (!luxy.channel.guild)
      return luxy.reply("<a:x30:714394016883540031> | **This command only for servers**");

    if (!luxy.member.hasPermission("MANAGE_MESSAGES"))
      return luxy.reply("**__عــلــي كــيــف أمــك تــفــتــح الــشــات__**");
    luxy.channel
      .overwritePermissions(luxy.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        luxy.reply("**__تــم فــتــح الــشــات__ :unlock: **");
      });
  }
});

////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "ct") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "text");
    message.channel.sendMessage(
      "<a:x13:712913365508292610> **-** **تــم انـشـاء روم كـتــابــي**"
    );
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "cv") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "<a:x30:714394016883540031> **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "voice");
    message.channel.sendMessage(
      "<a:x13:712913365508292610> **-** **تــم انـشـاء روم صـوتــي"
    );
  }
});

////


client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
if(codes.content == prefix + "antibots on") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("**<a:x13:712913365508292610> | AntiBotsJoin: ON!**");
}
if(codes.content == prefix + "antibots off") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("**<a:x13:712913365508292610> | AntiBotsJoin: OFF!**");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});


////

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
///Uploaded By L U X Y

////

const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;


client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .setColor("#36393e")
      .addField(`⇏ -new                     → لفتح تكت`)
      .addField(`⇏ -close                   → لغلق تكت`)
      .addField(`⇏ -mtickets enable/disable → لتعطيل وتفعيل تكت `)
      .addField(`⇏ cleartickets             →  لمسح جميع تكتات`)
      .addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
    if (mtickets === false)
      return message.channel.send(
        `<a:x30:714394016883540031> | **تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `<a:x30:714394016883540031> | **الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**<a:x13:712913365508292610> | تـم فـتـح تـذكرتـك**`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });

      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}mtickets`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `<a:x30:714394016883540031> | **هـذا الأمـر للأدارة فـقـط**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `<a:x13:712913365508292610> | **تـم تـفـعـيـل نـظـام الـتذاكـر**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `<a:x13:712913365508292610> | **تـم اغـلاق نـظـام الـتذاكـر**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `<a:x13:712913365508292610> | **تـم اغـلاق نـظـام الـتذاكـر**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `<a:x13:712913365508292610> | **تـم تـفـعـيـل نـظـام الـتذاكـر**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `<a:x30:714394016883540031> | **انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`<a:x30:714394016883540031> | **هـذا لـيـس روم تـيـكـيـت**`);

    message.channel.send(
      `<a:x13:712913365508292610> | **جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `remove`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`<a:x30:714394016883540031> | **This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`<a:x30:714394016883540031> | **Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `<a:x30:714394016883540031> | **${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done <a:x13:712913365508292610>\nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** <a:x30:714394016883540031>\nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`<a:x30:714394016883540031> | **This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`<a:x30:714394016883540031> | **Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done <a:x13:712913365508292610>\nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeeeestart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
  } else if (args[0].toLowerCase() === `${prefix}closeeeeeeee-alaaaaaaaaaal`) {
    let iq = 0;
    for (let q = 0; q < tchannels.length; q++) {
      let c = message.guild.channels.get(tchannels[q]);
      if (c) {
        c.delete();
        tchannels.splice(tchannels[q], 1);
        iq++;
      }
      if (q === tchannels.length - 1 || q === tchannels.lengh + 1) {
        message.channel.send(
          `<a:x13:712913365508292610> | **Done Deleted\`${iq}\` From Tickets.**`
        );
      }
    }
  }
});

////

client.on("message", message => {
  if (message.content == prefix + "submit") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find("name", "تـقـديـم");
    if (!channel)
      return message.reply(
        "<a:x30:714394016883540031> | **Type [ -room 1 ] To Make Room Submit.**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسـمــك  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **عــمــرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **تـسـاعـدنـا بأيــة 🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هـتـحـتـرم الـقـوانـيـن 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **أقسـم انـي مـا أبـوظ سـمـعـة الـسـيـرفـر أبـدا 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **... جـاري جـمـع الـبـيـانـات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**New Submit.** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`الـمـسـاعـدة`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`احـتـرام الـقـوانـيـن`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`الـقـسـم`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  message.author.username,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content == prefix + "room 1") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:x30:714394016883540031> | **You Don't Have Permission.**");
    message.guild.createChannel("تـقـديـم", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:x13:712913365508292610> | **تـم انـشـاء روم تـقـديـم**");
  }
});
client.on("message", async message => {
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.find("name", role);
  if (message.content == prefix + "apply") {
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom)
      return message.reply(
        "<a:x30:714394016883540031> | **Type [ -room 2 ] To Make Room Reject or Apply.**"
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("<a:x30:714394016883540031> | مـنـشـن الـعـضـو");
      if (!role) return message.reply("<a:x30:714394016883540031> | أدخـل اسـم رتـبـة");
      if (!mySupport) return message.reply("<a:x30:714394016883540031> | لـم أجـد هذة الـرتـبـة");
      if (mention.roles.has(mySupport))
        return message.reply("<a:x13:712913365508292610> | **هـذا الـشـخـص يـمـلـك الـرتـبـة**");

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطـاءك رتـبـة ${mention} تـم قـبـولـك  <a:x13:712913365508292610>**`
        );
      });
    }
  }
});

client.on("message", async message => {
  let mention = message.mentions.members.first();
  if (message.content == prefix + "reject") {
    if (!message.channel.guild) return;
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom) return message.reply("<a:x30:714394016883540031> | **Type [ -room 1 ] To Make Room Submit.**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("<a:x30:714394016883540031> | مـنـشـن الـعـضـو");

    acRoom.send(`<a:x13:712913365508292610> | **${mention} تـم رفـضـك للأسـف**`);
  }
});
client.on("message", message => {
  if (message.content == prefix + "room2") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:x30:714394016883540031> | **You Don't Have Permission.**");
    message.guild.createChannel("قـبـول-رفـض", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:x13:712913365508292610> | **تـم انـشـاء روم الـقـبـول-الـرفـض**");
  }
});


/////
///// [      1      ] ////
client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'hl')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

//// [    2   ] ////
var spee={};
var fox="$";
let pointsfox= {}
const foxt = [
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055751447773195/bandicam_2019-07-16_14-38-25-841.jpg",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055755080302593/bandicam_2019-07-17_17-14-28-589.jpg",
        "answers": ["بلجيكا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055760180576276/bandicam_2019-07-17_17-15-04-686.jpg",
        "answers": ["فرنسا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055761467965452/bandicam_2019-07-17_17-15-42-926.jpg",
        "answers": ["كرواتيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055764542390287/bandicam_2019-07-17_17-16-28-291.jpg",
        "answers": ["برتغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055766576889863/bandicam_2019-07-17_17-16-42-901.jpg",
        "answers": ["سنغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055769399525394/bandicam_2019-07-17_17-16-57-102.jpg",
        "answers": ["سعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055772377350165/bandicam_2019-07-17_17-17-17-663.jpg",
        "answers": ["المانيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773421862913/bandicam_2019-07-17_17-17-37-828.jpg",
        "answers": ["المكسيك"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773761732619/bandicam_2019-07-17_17-17-52-326.jpg",
        "answers": ["ارغواي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055830451683359/bandicam_2019-07-17_17-18-00-272.jpg",
        "answers": ["صربيا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055832704155658/bandicam_2019-07-17_17-18-20-074.jpg",
        "answers": ["مصر"]
       
    }
];
 
client.on('message', foxm => {
if (!pointsfox[foxm.author.id]) pointsfox[foxm.author.id] = { ///LuXy-SaAD
    points: 0,
  };
  if(!foxm.guild) return;
    let id = foxm.author.id
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) { ///LuXy-SaAD
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    foxm.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( foxm.content == fox+'e7'){
       
        try{
}catch(e){ ///LuXy-SaAD
 
}
 
    if(!foxm.channel.guild) return;
 
 
const foxitem = foxt[Math.floor(Math.random() * foxt.length)];
const foxfilter = response => {  
    return foxitem.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
foxm.channel.send('<a:x13:712913365508292610> | **Game Starts**').then(msg => {
 
 const embeda7zr = new Discord.RichEmbed()
 .setColor("RANDOM")
     .setAuthor(`لـديـك 15 ثـانـيـة`)
          .setImage(`${foxitem.type}`)
 .setFooter(`${foxm.author.tag}`, foxm.author.avatarURL) ///By KillerFox and MEDSPORT
 
 
         
foxm.channel.send(embeda7zr).then(() => {
        foxm.channel.awaitMessages(foxfilter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const foxyembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('<a:x13:712913365508292610> | **Good You Got Point!**') ///By KillerFox and MEDSPORT
   .setFooter(`${collected.first().author}`)
  foxm.channel.sendEmbed(foxyembed);
            let won = collected.first().author;
            pointsfox[won.id].points++; ///By KillerFox and MEDSPORT
          })
          .catch(collected => {
            foxm.channel.send(`<a:x30:714394016883540031> | **خـلـص الـوقـت**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
   
   
    }
  });

//// [    3    ] ////

 client.on('message', message => {
 if (message.content.startsWith('$mr')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("<a:x13:712913365508292610> | **Game Starts**")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

//// [    4    ] ////

  


client.on('message', message => {
 if (message.content.startsWith("$3k")) {
              if(!message.channel.guild) return;
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('<a:x13:712913365508292610> | **Game Starts**' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
  }
});

//// [    5    ] ////

 
 client.on('message', message => {
   if (message.content.startsWith("%kt")) {
                if(!message.channel.guild) return;
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('<a:x13:712913365508292610> | **Game Starts**' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

//// [   6    ] ////
const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("%lw")) {
                if(!message.channel.guild) return;
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('<a:x13:712913365508292610> | **Game Starts**' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

/////

client.on("ready", async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id &&
            r.content ==
              `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (
              !m ||
              m.content ==
                `🎉 **GIVEAWAY ENDED** 🎉`
            )
              return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});
client.on("message", async message => {
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}start`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}start [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}start 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(
          `React with 🎉 to enter!\nTime remaining: ${timespan}`
        )
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(
          `**🎉 GIVEAWAY 🎉**`,
          embed
        )
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (
          !msg ||
          msg.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
        )
          return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  } else if (args[0] == `${prefix}reroll`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}reroll [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content !=
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is not ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          if (
            m.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          )
            return message.channel.send(``);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u.filter(user => !user.bot).random();
                await message.channel.send(`The new winner is: ${rusers}`);
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  } else if (args[0] == `${prefix}gend`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}gend [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          let gv = dbg.get(
            `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
          );
          let rusers = m.reactions.map(r =>
            r.users.filter(u => !u.bot).random(parseInt(gv.gwin))
          );
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(gv.gtext)
            .setFooter(`Ended at`);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u
                  .filter(user => !user.bot)
                  .random(parseInt(gv.gwin));
                m.edit(
                  `**🎉 GIVEAWAY ENDED 🎉**`,
                  embed2
                    .setTimestamp()
                    .setDescription(`Winners:\n${rusers || "No winners"}`)
                );
                if (
                  m.reactions
                    .filter(a => a.emoji.name == "🎉")
                    .map(reaction => reaction.count)[0] <= 1
                ) {
                  return message.channel.send(`No winners :rolling_eyes:`);
                } else {
                  message.channel.send(
                    `Congratulations ${rusers}! You won the **${gv.gtext}**`
                  );
                }
                await dbg.delete(
                  `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
                );
                return;
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  }
})


///////////////

let luxy = JSON.parse(fs.readFileSync("./profile.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!luxy[message.author.id]) luxy[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = luxy[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./profile.json", JSON.stringify(luxy), (err) => {
     if (err) console.error(err)
   });
 
 });
//profile
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: '$note',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 1,
    points: 1,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});


client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credits')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`** :atm: | ${message.author.username} you received your :yen: **310**daily credits!**`)}
 else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
    
 if(isNaN(args[0]) || args[0] < 0) return message.channel.send('?! try type this number!')
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-profile")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });
 client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "note")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = ""
        if(!tit) {
            message.channel.send("**:large_orange_diamond: -title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`**:ok: Done Dude !?**`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
    client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
  message.channel.send("**<a:x13:712913365508292610> |`Show Profile` By ➤ **" + `${message.author}`,)
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "-title", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./profile.jpg", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة

})


                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; 
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك

                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري

                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 225, 159) // احداثيات النقاط

                        //Level
                        ctx.font = "bold 20px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 224, 117) // احداثيات اللفل

                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط

                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 20px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 76,113)

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;

ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                          ctx.drawImage(ava, 116, 82, 73, 74);

message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});
////

client.on("message", message => {
  if (message.channel.type === "dm") {  

      message.channel.startTyping();  
      setTimeout(() => {  
        message.channel.stopTyping();  
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }  
});

//////////////


/*

- [       All Copy Right Reserved For: MoJRemGames/MG      ] -

*/
