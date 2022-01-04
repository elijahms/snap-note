class Event < ApplicationRecord
    validates :start_date, :end_date, :weekday, :start_hour, :end_hour, :user_id, presence: true
    belongs_to :user
    has_many :notes
end
