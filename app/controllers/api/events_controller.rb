class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
      event = Event.create!(event_params)
      render json: event, status: :created
    end

  
    private
  
    def event_params
      params.permit(:name, :start_date, :end_date, :weekday, :start_hour, :end_hour )
    end
  
    def render_unprocessable_entity(invalid)
      render json: {
               errors: invalid.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
end
