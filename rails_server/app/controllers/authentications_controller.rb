class AuthenticationsController < ApplicationController
    before_action :authorize_request, except: :login

    def login
        @diver = Diver.find_by(username: login_params[:username])
        if @diver.authenticate(login_params[:password]) 
          @token = encode({id: @diver.id})
          render json: {
            # diver: @diver.attributes.except("password_digest"),
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
        params.require(:auth).permit(:username, :password)
      end
end
