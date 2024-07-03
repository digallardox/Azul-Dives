Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :dive_spots
  resources :divers do
    resources :reservations, only: [:index, :create, :destroy]
    resources :saved_dive_spots, only: [:index, :create, :destroy]
  end
end
