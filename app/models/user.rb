class User < ApplicationRecord
  has_secure_password
#   validates :username,
#             :email,
#             :first_name,
#             :last_name,
#             :password,
#             :password_confirmation,
#             presence: true
end
