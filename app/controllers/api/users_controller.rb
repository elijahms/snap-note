class Api::UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  before_action :authorize, only: [:show]

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  private

  def user_params
    params.permit(
      :username,
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation,
    )
  end

  def authorize
    unless session.include? :user_id
      return render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end

  def render_unprocessable_entity(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
