$.ajax({ type:"GET"
   ,url: "index.html"
   ,data:""
   ,success:function(res){
   }
   ,beforeSend:function(){
   $('.wrap-loading').removeClass('display-none');
   }
   ,complete:function(){
   $('.wrap-loading').fadeOut();
   $("#loadingtext").text("완료");
   }
   ,error:function(e){
   }
   ,timeout:10000});
