class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :description
      t.text :comment
      t.string :username
      t.string :image_url
    end
  end
end
