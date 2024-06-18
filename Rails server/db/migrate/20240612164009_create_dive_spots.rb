class CreateDiveSpots < ActiveRecord::Migration[7.1]
  def change
    create_table :dive_spots do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.references :diver, null: false, foreign_key: true

      t.timestamps
    end
  end
end
