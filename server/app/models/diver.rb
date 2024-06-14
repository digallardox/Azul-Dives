class Diver < ApplicationRecord
    has_secure_password
    has_many :dive_spots, dependent: :destroy

    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }
end
