class DiveSpot < ApplicationRecord
  belongs_to :diver

  has_many :saved_dive_spots, dependent: :destroy
  has_many :divers_who_saved, through: :saved_dive_spots, source: :diver
  has_many :reservations, dependent: :destroy
end

