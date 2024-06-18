class CreateDivers < ActiveRecord::Migration[7.1]
  def change
    create_table :divers do |t|
      t.string :first_name
      t.string :email

      t.timestamps
    end
  end
end
