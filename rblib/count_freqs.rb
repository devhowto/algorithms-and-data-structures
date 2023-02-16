##
# Counts the frequencies in `xs`.
#
# @param xs [Array<Integer>]
# @return [Hash]
#
def count_freqs(xs)
  freqs = {}

  xs.each do |x|
    freqs[x] = freqs[x] ? freqs[x] + 1 : 1
  end

  freqs
end
