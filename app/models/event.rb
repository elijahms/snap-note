class Event < ApplicationRecord
    validates :start_date, :end_date, :weekday, :start_hour, :end_hour, presence: true
end
