class EventSerializer < ActiveModel::Serializer
  attributes :weekday, :start_date, :end_date, :start_hour, :end_hour, :name
end
