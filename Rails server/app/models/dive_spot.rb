class DiveSpot < ApplicationRecord
  belongs_to :diver

  has_many :saved_dive_spots
  has_many :divers_who_saved, through: :saved_dive_spots, source: :diver
end
