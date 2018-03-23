"use strict";

function Sound(name, emotionList, musicList, natureList){
   Device.call(this, "Звук", name);
   this._emotionList = emotionList;
   this._musicList = musicList;
   this._natureList = natureList;
}

Sound.prototype = Object.create(Device.prototype);
Sound.prototype.constructor = Sound;

Sound.prototype.getEmotionList = function(){
   return this._emotionList;
};

Sound.prototype.setEmotionList = function(emotionList){
   this._emotionList = emotionList;
};

Sound.prototype.getMusicList = function(){
   return this._musicList;
};

Sound.prototype.setMusicList = function(musicList){
   this._musicList = musicList;
};

Sound.prototype.getNatureList = function(){
   return this._natureList;
};

Sound.prototype.setNatureList = function(natureList){
   this._natureList = natureList;
};


function Emotion(name, img, sound, background){
   this._name = name;
   this._img = img;
   this._sound = sound;
   this._background = background;
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


function Music(title, group, image, composition){
   this._title = title;
   this._group = group;
   this._image = image;
   this._composition = composition;
}

Music.prototype.getTitle = function(){
   return this._title;
};

Music.prototype.setTitle = function(title){
   this._title = title;
};

Music.prototype.getGroup = function(){
   return this._group;
};

Music.prototype.setGroup = function(group){
   this._group = group;
};

Music.prototype.getImage = function(){
   return this._image;
};

Music.prototype.setImage = function(image){
   this._image = image;
};

Music.prototype.getComposition = function(){
   return this._composition;
};

Music.prototype.setComposition = function(composition){
   this._composition = composition;
};
