Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'next', to: 'home#next'
  get 'prev', to: 'home#prev'
  get 'calendar', to: 'calendar#index'
  get 'prev_calendar', to: 'calendar#prev'
  get 'next_calendar', to: 'calendar#next'
  root to: 'home#index'
end
