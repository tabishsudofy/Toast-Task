var i = 1;
function creatediv() {
    newDiv = document.createElement('div');
    // newDiv.style.visibility = "show";
    // newDiv.style.width = "200px";
    // newDiv.style.height = "80px";
    newDiv.className='child-div';
    var time = Math.floor((Math.random() * 1000) + 1);
    // newDiv.style.margin = "10px";
    newDiv.innerHTML = "Toast Messages goes here";
      var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     newDiv.style.background = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("newBox").appendChild(newDiv);
    var time_ = document.getElementById("newBox").appendChild(newDiv);
    newDiv.style.transition = "all "+((1000+.2)+time)+""; 
     console.log(time_);
     var time_parent = document.getElementById('newBox');
	 setTimeout(function () {
        time_.style.display='none';
    }, 1000+time);
    console.log(Math.floor(Math.random() * 200)/100 *2.1);
    //  var time_parent = document.getElementById('newBox');
	//  setTimeout(function () {
    //     time_parent.style.display='none';	
    // }, 1000+time);
}
  