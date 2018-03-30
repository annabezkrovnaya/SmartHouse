"use strict";

function TvSet(name, channelNum, volume, channelList, seriesList){
   Device.call(this, "ТВ", name);
   this._channelNum = channelNum;
   this._volume = volume;
   this._channelList = channelList;
   this._seriesList = seriesList;
   this._defaultChannel = this._channelList[0];
}

   TvSet.prototype = Object.create(Device.prototype);
   TvSet.prototype.constructor = TvSet;

   TvSet.prototype.getChannelNum = function(){
      return this._channelNum;
   };

   TvSet.prototype.setChannelNum = function(channelNum){
      this._channelNum = channelNum;
   };

   TvSet.prototype.getDefaultChannel = function(){
      return this._defaultChannel;
   };

   TvSet.prototype.setDefaultChannel = function(defaultChannel){
      this._defaultChannel = defaultChannel;
   };

   TvSet.prototype.getVolume = function(){
      return this._volume;
   };

   TvSet.prototype.setVolume = function(volume){
      this._volume = volume;
   };

   TvSet.prototype.getChannelList = function(){
      return this._channelList;
   };

   TvSet.prototype.setChannelList = function(channelList){
      this._channelList = channelList;
   };

   TvSet.prototype.getSeriesList = function(){
      return this._seriesList;
   };

   TvSet.prototype.setSeriesList = function(volume){
      this._seriesList = seriesList;
   };

   TvSet.prototype.switchON = function() {
      Device.prototype.report.call(this);
      return this._defaultChannel;
   };

   TvSet.prototype.switchOFF = function() {
      Device.prototype.report.call(this);
   };

   TvSet.prototype.timer = function(time) {
      Device.prototype.report.call(this);
   };

   TvSet.prototype.lowVolume = function() {
      --this._volume;
   };

   TvSet.prototype.riseVolume = function() {
      ++this._volume;
   };

   TvSet.prototype.setChannel = function(channelNumber) {
      this._defaultChannel = channelNumber;
   };

   TvSet.prototype.switchChannel = function(label) {
      switch (label) {
         case '+':
            ++this._defaultChannel;
            break;
         case '-':
            --this._defaultChannel;
            break;
         default: throw new SyntaxError("Wrong label. It can be only \'+\' or \'-\'");
      }
   };

   TvSet.prototype.chooseSeries = function(title, serieNum) {
      for (var serie in this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getSerieNum === serieNum) {
            return this._seriesList[serie].getSerieNum;
         }
      }
   };

   TvSet.prototype.addSerieToViewed = function(title, serieNum) {
      for (var serie in this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getSerieNum === serieNum) {
            this._seriesList[serie].setViewed(1);
         }
      }
   };

   TvSet.prototype.playNextUnviewedSerie = function(title) {
      for (var serie in this._seriesList) {
         if (this._seriesList[serie].getTitle === title && this._seriesList[serie].getViewed === 0) {
            return this._seriesList[serie].getSerieNum;
         }
      }
   };

   
