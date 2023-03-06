##
# Wavefies a string.
#
# NOTE: Makes the first char lowercase and then alternates the
# case from there.
#
# ASSUME: The input is all lowercase.
#
# @param s [String]
# @return [String]
#
def wavefy(s)
  return s.downcase if s.size == 1

  s.gsub(/(.)(.)/) { "#{_1[0]}#{_1[1].swapcase}" }
end
