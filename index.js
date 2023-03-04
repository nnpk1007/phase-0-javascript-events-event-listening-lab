function addingEventListener() {
    const input = document.getElementById('button');
    
    function clickAlert() {
        alert("I was click");
    }

    input.addEventListener('click', clickAlert); 
}

addingEventListener();