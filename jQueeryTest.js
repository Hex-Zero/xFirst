$(document).ready(() => {
  //  $('.postText').focus();
  $('.nav-menu').toggle();
$('.menu').on('mouseenter', () => {
  $('.nav-menu').toggle();
})
$('.nav-menu').on('mouseleave', () => {
  $('.nav-menu').toggle();
})
$('.postText').on('keyup', event => {
 let post = $(event.currentTarget).val();
    let remaining = 10;
  remaining -=post.length;
  if(remaining <0){
    $('.wordcount').addClass("red");
    $('.characters').hide();
    $('.wordcount').html("Remove Characters");
  }else if(remaining ==0){
    $('.wordcount').removeClass("red");
    $('.characters').hide();
    $('.wordcount').html("No More Characters Available");
  }else{
    $('.wordcount').removeClass("red");
    $('.characters').show();
    $('.characters').html(remaining);
    $('.wordcount').html(" Characters Remaning");
  }
}) 
}); 
