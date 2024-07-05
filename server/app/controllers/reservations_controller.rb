class ReservationsController < ApplicationController
    before_action :set_diver

    def index
        @reservations = @diver.reservations.includes(:dive_spot)
        render json: @reservations.as_json(include: :dive_spot)
      end

      def create
        @dive_spot = DiveSpot.find(reservation_params[:dive_spot_id])
        @reservation = Reservation.new(diver: @diver, dive_spot: @dive_spot)
  
        if @reservation.save
          render json: @reservation, status: :created
        else
          render json: @reservation.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @reservation = Reservation.find(params[:id])
        @reservation.destroy
        head :no_content
      end

    def set_diver
        @diver = Diver.find(params[:diver_id])
      end

      def reservation_params
        params.require(:reservation).permit(:dive_spot_id)
      end
end
