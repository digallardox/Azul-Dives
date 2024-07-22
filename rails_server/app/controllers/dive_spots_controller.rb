class DiveSpotsController < ApplicationController
  before_action :set_dive_spot, only: %i[ show update destroy ]
  before_action :set_current_user, only: :index
  # before_action :authorize_request, except: :index :show

  # GET /dive_spots
  def index
    @dive_spots = DiveSpot.all

    if @current_diver
    @saved_dive_spots = @current_diver.saved_dive_spots
    @saved_dive_ids = @saved_dive_spots.pluck(:dive_spot_id)
  
    @dive_spot_with_saved_status = @dive_spots.map do |dive_spot|
    saved_spot = @saved_dive_spots.find_by(dive_spot_id: dive_spot.id)
    dive_spot.attributes.merge(
      saved: @saved_dive_ids.include?(dive_spot.id),
      saved_id: saved_spot&.id
    )
  end
  render json: @dive_spot_with_saved_status
else
  render json: @dive_spots
end
end

  # GET /dive_spots/1
  def show
    render json: @dive_spot
  end

  # POST /dive_spots
  def create
    @dive_spot = DiveSpot.new(dive_spot_params)

    if @dive_spot.save
      render json: @dive_spot, status: :created, location: @dive_spot
    else
      render json: @dive_spot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dive_spots/1
  def update
    if @dive_spot.update(dive_spot_params)
      render json: @dive_spot
    else
      render json: @dive_spot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dive_spots/1
  def destroy
    @dive_spot.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dive_spot
      @dive_spot = DiveSpot.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dive_spot_params
      params.require(:dive_spot).permit(:name, :description, :diver_id, :price, :location)
    end
end