class Track < ApplicationRecord

  validates :lyrics, :ord, :title, presence: true
  validates :bonus, inclusion: {in: [true, false]}
  validates :ord, uniqueness: {scope: :album_id}

  belongs_to :album
  has_one :band

  after_initialize :set_defaults

  def set_defaults
    self.bonus ||= false
  end
end
