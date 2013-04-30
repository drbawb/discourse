class AddSecurityToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :secure, :boolean, default: false, null: false

    create_table :category_groups do |t|
      t.integer :category_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
  end
end
