var event = {
    onPushSubmit: function(){
        var body = ui.getEditorBody();
        body = make.run_func(body);
        make.make_text(body);
    }
}
onPushSubmit = event.onPushSubmit;