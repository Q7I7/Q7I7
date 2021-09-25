// index.js
var B,L,N,J;
Page({
  data:{
    flag:true,
  },

  Bnum:function(e){
    B=parseFloat(e.detail.value);
  },
  Lnum:function(e){
    L=parseFloat(e.detail.value)
  },
  Nnum:function(e){
    N=parseFloat(e.detail.value)
  },
  calc:function(){
    var sum=B;
    var j=L;
for(var i=N;i>=1;i--){
  sum=sum+sum*j;
}
    this.setData({
      J:sum,
      B:B,
L:L,
      N:N,
      flag:false
    });
  }
})
