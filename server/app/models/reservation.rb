class Reservation < ApplicationRecord
    belongs_to :diver
    belongs_to :dive_spot
  end
  