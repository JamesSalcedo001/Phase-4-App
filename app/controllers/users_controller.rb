class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create] 

    def show
        # user = User.find_by_id(params[:id])
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :avatar, :password)
    end
   
end
