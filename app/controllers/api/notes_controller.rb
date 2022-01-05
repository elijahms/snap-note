class Api::NotesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


  def index
    notes = Note.all
    render json: notes
  end

  def create 
    puts "hello"
    user = User.find_by(id: session[:user_id])
    puts user.id
    if Event.find_event_by_time(user)
      event = Event.find_event_by_time(user)
      note = Note.create!(:note_params, event_id: event.id )
      render json: note
    else 
      head :no_content
    end

  end

  private

  def note_params
    params.permit(:content)
  end

  def render_unprocessable_entity(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
