"use strict";

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
