class AddFieldsToDiver < ActiveRecord::Migration[7.1]
  def change
    add_column :divers, :username, :string
    add_column :divers, :last_name, :string
  end
end
