class Event < ApplicationRecord
  # validates :start_date,
  #           :end_date,
  #           :weekday,
  #           :start_hour,
  #           :end_hour,
  #           :user_id,
  #           presence: true
  validates :name, presence: true
  belongs_to :user
  has_many :notes, dependent: :destroy

  @@weekday_to_str = %w[
    Sunday
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
  ]

  def self.find_event_by_time(user)
    current_time = Time.new
    weekday = @@weekday_to_str[current_time.wday]
    user.events.find do |event|
      event.weekday == weekday && event.start_hour.hour < current_time.hour &&
        event.end_hour.hour > current_time.hour &&
        current_time <= event.end_date && current_time >= event.start_date
    end
  end
end
