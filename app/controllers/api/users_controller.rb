class Api::UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def index
    users = User.all
    render json: users
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :email, :password_digest)
  end

  def render_unprocessable_entity(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end
end
