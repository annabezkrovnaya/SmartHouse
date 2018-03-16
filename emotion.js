"use strict";

function Emotion(name, img, sound, background){
   this._name = name;
   this._img = img;
   this._sound = sound;
   this._backgroung = background;
}

Emotion.prototype.getName = function(){
   return this._name;
};

Emotion.prototype.setName = function(name){
   this._name = name;
};

Emotion.prototype.getImg = function(){
   return this._img;
};

Emotion.prototype.setImg = function(img){
   this._img = img;
};

Emotion.prototype.getSound = function(){
   return this._sound;
};

Emotion.prototype.setSound = function(sound){
   this._sound = sound;
};

Emotion.prototype.getBackground = function(){
   return this._background;
};

Emotion.prototype.setBackground = function(background){
   this._background = background;
};
