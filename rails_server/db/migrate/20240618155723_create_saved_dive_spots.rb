class CreateSavedDiveSpots < ActiveRecord::Migration[7.1]
  def change
    create_table :saved_dive_spots do |t|
      t.references :diver, null: false, foreign_key: true
      t.references :dive_spot, null: false, foreign_key: true

      t.timestamps
    end

    add_index :saved_dive_spots, [:diver_id, :dive_spot_id], unique: true
  end
end