class AddLocationToDiverSpot < ActiveRecord::Migration[7.1]
  def change
    add_column :dive_spots, :location, :string
  end
end
