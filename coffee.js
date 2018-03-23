"use strict";

function Coffee(name, programmList){
   Device.call(this, "Кофе", name);
   this._programmList = programmList;
}

Coffee.prototype = Object.create(Device.prototype);
Coffee.prototype.constructor = Coffee;

Coffee.prototype.getProgrammList = function(){
   return this._programmList;
};

Coffee.prototype.setProgrammList = function(programmList){
   this._programmList = programmList;
};

function Programm(title, time, img){
   this._title = title;
   this._time = time;
   this._img = img;
}


Programm.prototype.getTitle = function(){
   return this._title;
};

Programm.prototype.setTitle = function(title){
   this._title = title;
};

Programm.prototype.getTime = function(){
   return this._time;
};

Programm.prototype.setTime = function(time){
   this._time = time;
};

Programm.prototype.getImg = function(){
   return this._img;
};

Programm.prototype.setPictureURL = function(img){
   this._img = img;
};
