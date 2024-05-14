const first = `
[
    function addToCart($form) {
        var
        formProduct = $form,
        path        = formProduct.attr('action') || '/cart_items',
        pathJson    = path + '.json',
        dataParam   = formProduct.serialize();
    
            $.ajax({
            url: pathJson,
            type: 'POST',
            datatype: 'json',
            data: dataParam,
            success: function(response){
                       },
            error: function(response) {
                      })
        }
            $('[data-buy]').click(function(event) {
        event.preventDefault();
        addToCart( $(this).parents('form:first') );
      });
    });
]