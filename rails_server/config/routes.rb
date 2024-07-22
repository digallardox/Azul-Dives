Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  get '/dive_spots_with_saved_status', to: 'dive_spots#index_with_saved_status'

  resources :dive_spots
  resources :divers
  resources :saved_dive_spots, only: [:index, :create, :destroy]
  resources :reservations, only: [:index, :create, :destroy]
end
