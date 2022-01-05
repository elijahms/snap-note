class User < ApplicationRecord
  has_secure_password
  has_many :events, dependent: :destroy
  has_many :notes, through: :events
  validates :password, presence: true
  validates :email, uniqueness: true
end

# :first_name,
# :last_name,
# :password_confirmation,
