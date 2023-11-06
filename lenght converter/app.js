(function(){
    //declearing the varaible we need
    var converttype='none'
    var form=document.getElementById('form')
    var select1=document.getElementById('select1')
    var select2=document.getElementById('select2')
    var ans=document.getElementById('ans')
    var wrong=document.getElementById('wrong')
    
    //creating a submit event on the varable named form
    form.addEventListener('submit',function(e){
        e.preventDefault()
        //targeting the input value on the form
        var distance=document.getElementById('moo1').value
        //making sure uts a number being inputed on the form with the use if parsefloat
        distance=parseFloat(distance)
       
        /*creating an if condition that stae when distance is a number it should
        peform something
        else dont*/
        if(distance){
            /*meter--centimeter
              meter--millemeter
              meter--inches
              meter--yard

              centimeter--meter
              centimeter--inches
              centimeter--millemeter
              centimeter--yard

              millemeter--meter
              millemeter--inches
              millemeter--centimeter
              millemeter--yard

              inches--meter
              inches--centimeter
              inches--millemetr
              inches--yard
            */

              /*by targeting the select.value in the html we would
              know what particular option was picked
              and using the if statement to perform a particular tax*/
            if(select1.value==='meter' && select2.value=='centimeter'){
                   var result=distance*100
                   ans.innerText=result+'cm'
            }
            else if(select1.value==='meter' && select2.value=='millimeter'){
                    result=distance*1000
                    
                    ans.innerText=result.toFixed(3)

            }
            else if(select1.value==='meter' && select2.value=='inches'){
                    result=distance*39.3701
                    ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='meter' && select2.value=='yard'){
                   result=distance*36
                   ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='centimeter' && select2.value=='meter'){
                   result=distance/100
                   ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='centimeter' && select2.value=='millimeter'){
                   result=distance*10
                   ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='centimeter' && select2.value=='inches'){
                   result=distance/2.54 
                   ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='centimeter' && select2.value=='yard'){
                   result=distance/0.0109361
                   ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='millimeter' && select2.value=='meter'){
                result=distance/1000
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='millimeter' && select2.value=='centimeter'){
                result=distance/10
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='millimeter' && select2.value=='inches'){
                result=distance/25.4
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='millimeter' && select2.value=='yard'){
                result=distance/914.4
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='inches' && select2.value=='meter'){
                result=distance/36
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='inches' && select2.value=='centimeter'){
                result=distance*2.54
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='inches' && select2.value=='millimeter'){
                result=distance*25.4
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='inches' && select2.value=='yard'){
                result=distance/36
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='yard' && select2.value=='meter'){
                result=distance/1.094
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='yard' && select2.value=='centimeter'){
                result=distance*91.44
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='yard' && select2.value=='millimeter'){
                result=distance*914.4
                ans.innerText=result.toFixed(3)
            }
            else if(select1.value==='yard' && select2.value=='inches'){
                result=distance*36
                ans.innerText=result.toFixed(3)
            }
            else{
                wrong.innerText='you did not select an option pls try again'
                result='Error'
                ans.innerText=result
            }
        }
        else{
            wrong.innerText='you did not input a number'
            result='Error'
            ans.innerText=result
        }
    })
}())