class SavedDiveSpot < ApplicationRecord
  belongs_to :diver
  belongs_to :dive_spot

  validates :diver_id, uniqueness: { scope: :dive_spot_id, message: "has already saved this dive spot" }
end
