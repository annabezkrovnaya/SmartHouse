"use strict";
function Type(title, img, description, url){
   this._title = title;
   this._img = img;
   this._description = description;
   this._url = url;
}

Type.prototype.getTitle = function(){
   return this._title;
};

Type.prototype.setTitle = function(title){
   this._title = title;
};

Type.prototype.getImg = function(){
   return this._img;
};

Type.prototype.setImg = function(img){
   this._img = img;
};

Type.prototype.getDescription = function(){
   return this._description;
};

Type.prototype.setDescription = function(description){
   this._description = description;
};

Type.prototype.getUrl = function(){
   return this._url;
};

Type.prototype.setUrl = function(url){
   this._url = url;
};
