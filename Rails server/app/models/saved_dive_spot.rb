class SavedDiveSpot < ApplicationRecord
  belongs_to :diver
  belongs_to :dive_spot
end
