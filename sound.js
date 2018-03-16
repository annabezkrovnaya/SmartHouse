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
