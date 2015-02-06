class CommentsController < ApplicationController

  before_action :authenticate_user!

  def index
    @comments = Comment.all

    respond_to do |format|
        format.html # index.html.erb
        format.json { render json: @comments}
    end
  end

  def new
    @comment = current_user.comments.build
  end

  def create
    @comment = current_user.comments.build(comment_params)

    respond_to do |format|
      if @comment.save
        format.html{ redirect_to @comment }
        format.json { render json: @comment }
      else
        # do error stuff
      end
    end

  end

  def post_params
    params.require(:comment).permit(:comment)
  end

end
