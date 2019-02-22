window.onload = function(){
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
               document.querySelector('.img-preview').setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    var imageInput = document.querySelector('#logo-id');
    imageInput.onchange=changeEventHandler;
    
    function changeEventHandler(event) {
        readURL(this);
    }
};