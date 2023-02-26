##
# This solution is not mine. Got it here:
#
# • https://exercism.org/tracks/ruby/exercises/meetup/solutions/kkchu791
#

require 'date'

class Meetup
  attr_reader :month, :year, :days_in_month, :calendar

  def initialize(month, year)
    @month = month
    @year = year
    @days_in_month = (Date.new(year, 12, 31) << (12 - month)).day

    @calendar = {
      first: [*1..7],
      second: [*8..14],
      third: [*15..21],
      fourth: [*22..28],
      teenth: [*13..19],
      last: [*(days_in_month - 6)..days_in_month],
    }
  end

  def day(weekday, schedule)
    section_of_month = calendar[schedule]

    Date.new(@year, @month, section_of_month.select do |x|
      Date.new(year, month, x).strftime('%A') == weekday.to_s.capitalize
    end.join.to_i)
  end
end
