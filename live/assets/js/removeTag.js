$('#tik').each(function(){
    var $this = $(this);
    var t = $this.text();
    $this.html(t.replace('&lt','<').replace('&gt', '>'));
});