Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :events, only: %i[index create]
  end
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
