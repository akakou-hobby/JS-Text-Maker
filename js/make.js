var make = {
    run_func: function(string){
        eval(string);

        var result = '';
        for(var func of line_functions){
            result += func() + '\n';
        }

        return result;
    },

    make_text: function(content){
        var downloader = document.createElement('a');
        downloader.download = 'text.txt';
        downloader.href = 'data:application/octet-stream,' + encodeURIComponent(content);
        downloader.click();
    }
}