// index.js
var rand;
function createRand(){
  rand=[];
  for(var i=0;i<=6;i++){
    var r=(Math.random()*30+1).toFixed(0)*1;
    rand.push(r);
    console.log(rand[i]);
  }
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
    })
  }
})