var ui = {
    editor: null,
    
    setEditor: function(){
        this.editor = ace.edit('editor');
        this.editor.$blockScrolling = Infinity;
        this.editor.setOptions({
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true
        });
        this.editor.setTheme('ace/theme/monokai');
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.getSession().setValue(config.editor_sample);        
    },
    getEditorBody: function(){
        return this.editor.getSession().getValue();
    },
    
    setWallpaper: function(){
        $(window).scroll(function() {
            if($(this).scrollTop()) {
                $('nav').addClass('shadow');
            } else {
                $('nav').removeClass('shadow');
            }
        });
    }
}