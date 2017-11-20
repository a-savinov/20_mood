    $.ajax({
      url: 'quotes.json',
      type: 'get',
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      async: false,
      success: function (data) {
        var random_index = Math.floor(Math.random() * data.items.length);
        var phrase = data.items[random_index].phrase;
        var signature = data.items[random_index].signature
        $('#phrase').text(phrase);
        $('#signature').append(signature);
      }
    });
