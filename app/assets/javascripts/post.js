// $(function() {
//     $("#submit-button").on("click", function(){
//     var value = $('input[name="post[description]"]').val();
//     var url = '/posts';
//     var data = {
//       post: {
//         description: value
//       }
//     }
//     $.ajax = (url, {type: 'post', data: data }).done(function(data){
//
//       var postTemplate ='\
//       <div class="ui card"> \
//         <div class="content"> \
//           <div class="description">' + post.description + '</div> \
//         </div>\
//         </div> '
//       }
//
//       $('#posts-container').append(postTemplate)
//     })
//
// });





$(function() {
  var postsIndexUrl = "/posts.json";
  var postsContainer = $('#posts-container');
  var javascriptTemplate = Handlebars.compile($('#entry-template').html());

// fetching all posts from server and putting them on the page
  $.getJSON(postsIndexUrl, function(data, textStatus, thing){
    data.forEach(function(post){
      var htmlForPost = javascriptTemplate(post);
      postsContainer.append(htmlForPost);
    });
  }).fail(function(){
    debugger
  });

  // $(document).on('click', '.ui.card', function(){
  //   debugger
  // })


  // $('.card').on('hover', function(){
  //   $(this).highlight()
  // })


  $("#submit-button").on("click", function(event){
    var input = $('input[name="post[description]"]');
    var value = input.val();

    if (value == "") {
        alert("Please enter text");
        // show an error
      return;
    }

    var data = {
      post: {
        description: value
      }
    }

    $.post(postsIndexUrl,data, function(objectData,textStatus,jqXHR){
      debugger
      var newPost = objectData;

      html = javascriptTemplate(newPost);
      postsContainer.append(html);
      input.val('');
    }, "JSON");

  });

  $("div").on("click", ".x", function(){
    var reply =confirm("Are you sure you want to delete this post?");
      if (reply == true) {
        $(this).parent().parent().remove();
      }
      else {
        return
      }
  });







});
