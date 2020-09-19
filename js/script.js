
        function light(value){
            var pic;
            if(value==0){
                pic="bulb-off.jpg";
            }else{
                pic="bulb-on.jpg";
            }
            document.getElementById('bulb').src="images/"+pic;
        }