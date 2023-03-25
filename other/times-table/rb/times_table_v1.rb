#
# Question oritinated on Discord:
#
# • https://discord.com/channels/518658712081268738/650031651845308419/1083424890754977813
#

class Mult
  class << self
    def multiples(qty, multiple)
      result = []

      (1..qty).each do |val|
        result << val * multiple
      end

      result
    end

    def times_table(qty)
      tbl = []

      for x in 1..qty
        arr = []
        for y in 1..10
          arr << x * y
        end

        tbl << arr
      end

      tbl
    end
  end
end
