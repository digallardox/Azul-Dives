class AddFieldToDiver < ActiveRecord::Migration[7.1]
  def change
    add_column :divers, :password_digest, :string
  end
end
