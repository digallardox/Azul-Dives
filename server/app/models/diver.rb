class Diver < ApplicationRecord
    has_many :dive_spots, dependent: :destroy
end
