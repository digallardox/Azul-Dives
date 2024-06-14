class DiversController < ApplicationController
  before_action :set_diver, only: %i[ show update destroy ]
  before_action :authorize_request, except: :create

  # GET /divers
  def index
    @divers = Diver.all

    render json: @divers
  end

  # GET /divers/1
  def show
    render json: @diver
  end

  # POST /divers
  def create
    @diver = Diver.new(diver_params)

    if @diver.save
      @token = encode({id: @diver.id})
      render json: {
        diver: @diver.attributes.except("password_digest"),
        token: @token
      }, status: :created, location: @diver
    else
      render json: @diver.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /divers/1
  def update
    if @diver.update(diver_params)
      render json: @diver
    else
      render json: @diver.errors, status: :unprocessable_entity
    end
  end

  # DELETE /divers/1
  def destroy
    @diver.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diver
      @diver = Diver.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def diver_params
      params.require(:diver).permit(:email, :password)
    end
end
