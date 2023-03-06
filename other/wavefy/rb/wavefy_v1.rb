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
  wavefied = []
  state = true

  s.each_char do |c|
    wavefied << (state ? c.downcase : c.upcase)

    state = !state
  end

  wavefied.join('')
end
