class Event < ApplicationRecord
  validates :start_date,
            :end_date,
            :weekday,
            :start_hour,
            :end_hour,
            :user_id,
            presence: true
  belongs_to :user
  has_many :notes, dependent: :destroy

  def self.find_event_by_time(user)
    current_time = Time.new

    # weekday = current_time.wday
    user.events.find do |event|
      event.start_hour.hour < current_time.hour &&
        event.end_hour.hour > current_time.hour &&
        current_time <= event.end_date && current_time >= event.start_date
    end
  end
end
