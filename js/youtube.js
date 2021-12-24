 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8',
     playerVars: {
       autoplay:true,
       loop:true,
       playlist: 'An6LvWQuj_8',
     },
     events:{
       onReady: (e)=>{
        e.target.mute()
       }
     }
   });
 }
 function random(min,max){
   return parseFloat((Math.random()*(max-min)+min).toFixed(2))
 }


 function floatingObject(selector, delay, size){
   gsap.to(selector,random(1.5, 2.5),{
     y: size,
     repeat:-1,
     yoyo:true,
     ease: Power1.easeInOut,
     delay: random(0, delay),
   });
 }
 floatingObject('.floating1',1,15);
 floatingObject('.floating2',.5,15);
 floatingObject('.floating3',1.5,20);