class AuthenticationsController < ApplicationController
    before_action :authorize_request, except: :login

    def login
        @diver = Diver.find_by(email: login_params[:email])
        if @diver.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
          @token = encode({id: @diver.id})
          render json: {
            diver: @diver.attributes.except("password_digest"),
            saved_dives: @diver.saved_spots,
            token: @token
            }, status: :ok
        else
          render json: { errors: 'unauthorized' }, status: :unauthorized
        end
      end
      
      # GET /auth/verify
      def verify
        render json: @current_diver.attributes.except("password_digest"), status: :ok
      end
    
    
      private
    
      def login_params
        params.require(:authentication).permit(:email, :password)
      end
end
