require 'rubygems'
require 'sinatra/base'
require 'haml'
require 'podio'

class SinatraBootstrap < Sinatra::Base
  require './helpers/render_partial'

  get '/' do
    haml :index
  end

  get '/podio' do
    Podio.setup(:api_key => 'bannernavalny', :api_secret => '4zgOSsd3baOc3LLN4dcGTniPw0ql26qaQMTCf62Jazj7nx2oFfkI6zJSVrKfXQY2')
    # Podio.client.authenticate_with_credentials('', '')

    # Podio::Organization.find_all.inspect
    Podio.connection.get('/organizatsiia-piketov/apps/kuby').body.inspect
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
