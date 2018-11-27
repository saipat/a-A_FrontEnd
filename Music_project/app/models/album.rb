class Album < ApplicationRecord

  validates :name, :band, :year, :live, presence: true
  validates :year, numericality: {minimum: 1900, maximun:9000}
  validates :live, inclusion: { in: [true, false] }
  validates :name, uniqueness: {scope: :band_id}


  belongs_to :band
  has_many :tracks

  after_initialize :set_defaults

  def set_defaults
    self.live ||= false
  end

end
