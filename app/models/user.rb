class User < ApplicationRecord
  has_secure_password
  has_many :events
  validates :username,
            :email,
            :first_name,
            :last_name,
            :password,
            :password_confirmation,
            presence: true
end
