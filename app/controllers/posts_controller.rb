class PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.all

    respond_to do |format|
        format.html # index.html.erb
        format.json { render json: @posts}
    end
  end

  def new
    @post = current_user.posts.build
  end

  def create
    @post = current_user.posts.build(post_params)

    respond_to do |format|
      if @post.save
        format.html{ redirect_to @post }
        format.json { render json: @post }
      else
        # do error stuff
      end
    end

  end

  def post_params
    params.require(:post).permit(:description)
  end

end
