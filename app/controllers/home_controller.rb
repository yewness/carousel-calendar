class HomeController < ApplicationController
  before_action :get_date, only: [:prev, :next]
  def index
  end

  def prev
    respond_to do |format|
      format.html
      format.js
    end
  end

  def next
    respond_to do |format|
      format.html
      format.js
    end
  end

  def slick

  end

  private
  def get_date
    @date = params[:date] ? Time.zone.parse(params[:date]) : Date.current
  end
end
