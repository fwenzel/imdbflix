$('a[href].mdpLink').each(function() {
    if (!$(this).text()) return;  // No movie title, no dice.

    var imdblink = $('<a class="imdb" target="_blank">IM</a>');
    imdblink.attr('href', 'http://www.imdb.com/find?s=tt&q=' +
        escape($(this).text()));

    $(this).after(imdblink);
});
