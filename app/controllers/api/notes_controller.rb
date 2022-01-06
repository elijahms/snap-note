class Api::NotesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  before_action :authorize

  def index
    user = User.find_by(id: session[:user_id])
    notes = user.notes
    render json: notes
  end

  def destroy
    note = Note.find_by(id: params[:id])
    note.destroy!
    render json: { message: 'Your note was deleted' }, status: :gone
  end

  def update
    note = Note.find_by(id: params[:id])
    new_note = note.update!(note_params)
    render json: new_note, status: :accepted
  end

  def create
    user = User.find_by(id: session[:user_id])
    if Event.find_event_by_time(user)
      event = Event.find_event_by_time(user)
    else
      event = user.events.find_or_create_by(name: 'Other')
    end
    note = event.notes.create!(note_params)
    render json: note, status: :created
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
