class ApplicationController < ActionController::API
  include ActionController::Cookies

  def authorize
    unless session.include? :user_id
      return render json: { error: 'Not authorized' }, status: :unauthorized
    end
  end
end
