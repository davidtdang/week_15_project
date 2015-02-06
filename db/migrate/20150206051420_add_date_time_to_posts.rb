class AddDateTimeToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :date, :date
    add_column :posts, :time, :time
  end
end
