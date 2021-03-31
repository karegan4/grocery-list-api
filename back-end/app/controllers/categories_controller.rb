class CategoriesController < ApplicationController

    def index
        @categories = Category.all
        render json: @categories
    end

    def show
        @category = Category.find(params[:id])
        render json: @category, status: 200
    end

    def create
        category = Category.create(category_params)
        render json: category
    end

    def update
        @category.update(category_params)
        render json: @category, status: 200
    end

    private

    def category_params
        params.permit(:category_name)
    end

end