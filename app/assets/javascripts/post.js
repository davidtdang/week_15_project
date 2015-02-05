var listView = function(){

  var success = function(data, textStatus, thing){
    debugger

    var postsContainer = $('#posts-container');

    data.forEach(function(post){
      var htmlForPost = postTemplate(post);
      postsContainer.append(htmlForPost);
    });

  };

  var postTemplate = function(post){
    return "<li>" + post.description + "<li>"
    // return "<div class="ui card">
    // <div class="content">
    // <div class="meta">date</div>
    // <div class="description">
    // <p>" + post.description + "</p>
    // </div>
    // </div>
    // <div class="extra content">
    // <i class="star icon"></i>
    // ### Likes
    // </div>
    // </div>"
  }











  var fail = function(){
    debugger
  };

  var postsIndexUrl = "/posts.json"
  var request = $.getJSON(postsIndexUrl, success)
  request.fail(fail)

}

var formStuff = function(){
  var postSuccess = function(a,b,c){
    debugger

    // postsContainer.append(template)
  };

  var postsCreateUrl = "/posts.json"
  var datatype = "JSON";

  $("#submit-button").on("click", function(event){
    var value = $('input[name="post[description]"]').val()
    debugger
    var data = {
      post: {
        description: value
      }
    }

    $.post(postsCreateUrl,data, postSuccess, datatype)

  });
};

$(function() {

  listView()

  formStuff()
  // fetch the posts
  // after fetching, render them
});
