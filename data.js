"use strict";

function Data(){
   var channel1 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/ArdWL2uKf7k?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   var channel2 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/y2iEeCc2DZM?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   var channel3 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/iCEvHuVPgjs?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   var channel4 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/LMT1tajuyls?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';
   var channel5 = '<iframe id="channal" width="560" height="315" src="https://www.youtube.com/embed/UoKlKx-3FcA?rel=0&showinfo=0&autoplay=1"  frameborder="0" allowfullscreen></iframe>';

   var type1 = new Type("TB", "img/icon-tv.png", "Здесь можно смотреть телевизионные передачи и любимые сериалы", "tv_set.html");
   var type2 = new Type("Звук", "img/icon-sound.png", "Здесь можно послушать музыку или включить фоновый саунд", "sound.html");
   var type3 = new Type("Кофе", "img/icon-coffee.png", "Множество сортов кофе на выбор к любому времени и настроению", "coffee.html");

   var seriesList = [{name: "Доктор Кто", link: '<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/the_doctor.mp4"></video>'}, {name:"Шерлок", link: '<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/sher.mp4"></video>'}, {name:"Американские боги", link:'<video width="560" height="315", controls="controls", autoplay="autoplay"><source src ="video/amer_gods.mp4"></video>'}];

   var channelList = [channel1, channel2, channel3, channel4, channel5];

   var tv1 = new TvSet("Huge plasma", 3, 5, channelList, seriesList);
   var tv2 = new TvSet("Itsy bitsy tv set", 2, 4, channelList, seriesList);

   var programmList = [new Programm("Классический кофе", 2000, '<img src="img/coffee.png">'), new Programm("Капучино", 3000, '<img src="img/cappucсino.png">'), new Programm("Американо", 3000, '<img src="img/americano.png">'), new Programm("Кофе для двоих", 2000, '<img src="img/for_pair.png">'), new Programm("Арт Латте", 4000, '<img src="img/latte-art.png">')];

   var coffee1 = new Coffee("Too Smart Coffee machine", programmList);

   var typeList = [type1, type2, type3];
   var deviceList = [tv1, tv2, coffee1];
   this.sh = new Smart(deviceList, typeList);
}

   Data.prototype.getSmart = function(){
      return this.sh;
   };
