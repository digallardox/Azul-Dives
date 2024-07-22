class Diver < ApplicationRecord
    has_secure_password

    has_many :dive_spots, dependent: :destroy
    has_many :saved_dive_spots, dependent: :destroy
    has_many :saved_spots, through: :saved_dive_spots, source: :dive_spot
    has_many :reservations, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    # validates :password, length: { minimum: 6 }
end
