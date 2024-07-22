class SavedDiveSpotsController < ApplicationController
    # before_action :set_diver
    before_action :authorize_request

    def index
        @diver = @current_diver
        @saved_dives = @diver.saved_dive_spots.includes(:dive_spot)
        render json: @saved_dives.as_json(include: :dive_spot)
      end

    def create
      @dive_spot = DiveSpot.find(saved_dive_params[:dive_spot_id])
      @saved_dive_spot = SavedDiveSpot.new(diver: @current_diver, dive_spot: @dive_spot)

      if @saved_dive_spot.save
        render json: @saved_dive_spot, status: :created
      else
        render json: @saved_dive_spot.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @saved_dive_spot = SavedDiveSpot.find(params[:id])
      @saved_dive_spot.destroy
      head :no_content
    end

      def set_diver
        @diver = Diver.find(params[:diver_id])
      end

      def saved_dive_params
        params.require(:saved_dive).permit(:dive_spot_id)
      end
end
