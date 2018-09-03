function checkboxMultiManager(params){
  var targetElement = (typeof params.targetElement !== 'undefined') ? params.targetElement : null;
  var postType = (typeof params.postType !== 'undefined') ? params.postType : null;
  var fieldSlug = (typeof params.fieldSlug !== 'undefined') ? params.fieldSlug : null;
  var savedValue = (typeof params.savedValue !== 'undefined') ? params.savedValue : [];

  var render = {
    checkbox: function(params){
      var title = (typeof params.title === 'undefined') ? '' : params.title;
      var id = (typeof params.id === 'undefined') ? '' : params.id;
      var isSet = savedValue.indexOf(id.toString()) != -1;

      var inputObject = $('<input />');
      inputObject.attr({
        type: 'checkbox',
        name: fieldSlug + '[]',
        value: id,
        checked: isSet
      });

      targetElement.append(inputObject);

      var labelObject = $('<label />');
      labelObject.html(title)
      
      targetElement.append(labelObject);

      targetElement.append('<br />');
    }
  }

  var get = {
    postTypeData: function(postType, callback){
      $.get('/?rest_route=/wp/v2/' + postType, function(data){
        callback(data)
      }, 'json');
    }
  };

  var init = function(){
    get.postTypeData(params.postType, function(postTypeData){
      for (var i = 0; i < postTypeData.length; i++) {
        render.checkbox({
          title: postTypeData[i].title.rendered,
          id: postTypeData[i].id
        });
      }
    });
  };

  if(targetElement != null && postType != null){
    init();
  }
}
