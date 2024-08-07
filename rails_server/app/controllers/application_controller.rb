class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin

      @payload = decode(token)
      @current_diver = Diver.find(@payload[:id])

    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end

  def set_current_user
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    if token
      begin
        @payload = decode(token)
        @current_diver = Diver.find(@payload[:id])
      rescue ActiveRecord::RecordNotFound, JWT::DecodeError
        @current_diver = nil
      end
    else
      @current_diver = nil
    end
  end
