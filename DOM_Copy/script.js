function copyText(params) {
    var copyTextArea = document.getElementById('copyTextArea');
 
    if (copyTextArea.value === '') {
        alert('Please enter some text to copy');
    }
    else{
        copyTextArea.select();
        // above code selects the text area
    
        document.execCommand('copy');
        // above code copies the selected text, execCommand is a built-in function in JavaScript that is used to copy the selected text 
    
    
        updateCopyButtonText(); // function is hoisted, so it can be called before it is defined
         
        // above code updates the button text
    }
   
}

function updateCopyButtonText() {
    var copyButton = document.querySelector('button');
    copyButton.innerText = 'Copied';
    setTimeout(() => {
        copyButton.innerText = 'Copy Text';
    }, 2000); // Reset the button text after 2 seconds
}