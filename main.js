var reasons=["Hawa Mahal is a palace in Jaipur, India approximately 300 kilometers from the capital city of Delhi.","The Lotus Temple, located in Delhi, India, is a House of Worship that was dedicated in December 1986","Mysore Palace took about 15 years for the construction of this unprecedented structure for the Mysore Maharaja.","One of the oldest stone structures in India, the great stupa of Sanchi is an important Buddhist monument."];
var images=["https://s.yimg.com/fz/api/res/1.2/ACCmIlSR.f1Nqy_zYA9C9A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/415e994c-c978-32fb-93cc-8085cf26859e/t_1024x1024","http://lonelyplanetimages.imgix.net/mastheads/GettyImages-177334270_high.jpg?auto=enhance&w=770&h=430&fit=crop","https://i0.wp.com/triponzy.com/blog/wp-content/uploads/2018/10/maysoor-palace.jpg?w=960&ssl=1","https://i0.wp.com/triponzy.com/blog/wp-content/uploads/2018/10/sanchi-stupa-1.jpg?w=960&ssl=1"];
var i=0;
function nextSlide()
{
document.getElementById("r1").src=images[i];  
  document.getElementById("i1").innerHTML=reasons[i]; 
  i++;

}

var city=["Delhi is the image of old and new India that’s essentialness lies not simply in its past glory as the seat of empires and grand landmarks, additionally in the rich and various cultures. Delhi offers lots of fascinating places and attractions to the guest, to such an extent that it comes to be challenging to choose from where to start exploring the city.","Bangalore renamed Bengaluru is the ‘The Garden city of India’ gloats now of additionally being ‘The Silicon Valley of India’. A delightful city of Bangalore is perfectly brightened with parks, enclosures, lakes and wellsprings. It likewise serves as an impeccable stopover for some exceptionally wonderful spots close-by incorporating Mysore and the Jog Falls.","Kolkata has a different and interesting history, which you’ll truly have the ability to submerge yourself in on one of these Kolkata strolls. Then again, there are likewise strolling tours in Calcutta that will give you an up to date look inside the city.","Jaipur, lovingly alluded to as the Pink City in view of the pink dividers and the structures of the old city, baits guests with its staggering reminders of a past time. The most famous Jaipur attractions and places to visit are the aged royal residences and forts; with expanded construction modeling that serves as a brilliant indication of their royal heritage."];
var img=["https://www.indiafamousfor.com/wp-content/uploads/2017/03/India-gate-in-Delhiflickrswetank.jpg","https://www.indiafamousfor.com/wp-content/uploads/2017/03/Bangalore-Palaceflickrnavaneeth.jpg","https://www.indiafamousfor.com/wp-content/uploads/2017/03/Victoria-Memorial-Hallkolkataflickrwikipedia.jpg","https://www.indiafamousfor.com/wp-content/uploads/2017/03/Hawa-Mahal-in-Jaipur-1.jpg"];
var r=0;
function nextSlide1()
{
document.getElementById("r2").src=img[r];  
  document.getElementById("i2").innerHTML=city[r]; 
  r++;

}