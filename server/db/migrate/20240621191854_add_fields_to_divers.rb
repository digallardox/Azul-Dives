class AddFieldsToDivers < ActiveRecord::Migration[7.1]
  def change
    add_column :divers, :account_balance, :integer
  end
end
