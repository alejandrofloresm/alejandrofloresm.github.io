var resources_list = null;

$(function() {
  $.getJSON( "js/resources_database.json", function(data) {
    var links = data.links;
    $.each(links, function(i, link){
      var html = '<li>';
      // Título
      html += '<h4>';
      if (link.type == "video") {
        html += '<i class="fa fa-youtube-play"></i> ';
      }
      html += '<a href="' + link.link + '" target="_blank" class="name">'+ link.name + '</a>';
      html += '</h4>';
      html += '<p class="description">' + link.description + '</p>';
      html += '<p>Categoría: <span class="category">' + link.category +'</span> <br>';
      html += 'Tags: ';
      var separator = '';
      $.each(link.tags, function(j, tag) {
        html += separator;
        html += '<span class="tag">'+ tag + '</span>';
        separator = ' ';
      });
      html += '</p>';
      html += '<a class="button button-primary" href="'+ link.link +'" target="_blank">Ir</a>';
      html += '</li>';
      $('#resources-wrapper .list').append(html);
    });

    var options = {
      valueNames: [ 'name', 'category', 'tag', 'description' ]
    };
    resources_list = new List('resources-wrapper', options);
  });
  
  $('.filter').click(function() {
    $('.filters .filter').removeClass('active');
    $(this).addClass('active');
    var filter = $(this).data('filter');
    if (filter == "_ALL_") {
      resources_list.filter();
    } else {
      resources_list.filter(function(item) {
        if (item.values().category == filter) {
          return true;
        } else {
          return false;
        }
      });
    }
    return false;
  });
});

