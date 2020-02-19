class Api::BookingsController < ApplicationController

    before_action :require_logged_in!

    def index
        @bookings = Booking.where(guest_id: current_user.id)
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render :show
    end
    
    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id

        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        
        if @booking.destroy
            render :show
        end
    end

    def update
        @booking = Booking.update(booking_params)

        if @booking
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

private

    def booking_params
        params.require(:booking).permit(:listing_id, :guest_id, :start_date, :end_date, photos: [])
    end

end