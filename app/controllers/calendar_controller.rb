class CalendarController < ApplicationController
  before_action :get_date

  def index
  end

  def prev
    respond_to do |format|
      format.js
    end
  end

  def next
    respond_to do |format|
      format.js
    end
  end

  private
  def get_date
    @date = params[:date] ? Time.zone.parse(params[:date]).to_date : Date.current.to_date
  end
end
