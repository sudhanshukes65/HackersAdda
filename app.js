const SearchBoxFunction = () => {
    let filter = document.getElementById('searchBox').value.toUpperCase() ;
    let ul = document.getElementById('myUL');
    let li = ul.getElementsByTagName('li');
    
    for(var i=0;i<li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        let textValue = a.innerText.toUpperCase();

        if(textValue.indexOf(filter)>-1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
         
    }


}