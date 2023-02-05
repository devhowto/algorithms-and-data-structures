require 'net/http'
require 'uri'
require 'json'

#
# We are commenting this out and instead reading the data
# from a text file to avoid network calls.
#
# uri = URI('https://coderbyte.com/api/challenges/json/age-counting')
# res = Net::HTTP.get(uri)

##
# `data.txt` contains a single line.
#
data = File.readlines('./data.txt').first
hash = JSON.parse(data)

##
# The `data` key is a string, not a symbol.
#
# p hash[:data]
# → nil

##
# This is a method call. It is not accessing the `data` property
# on the hash (like it would on JS for instance).
#
# p hash.data
#
# “undefined method `data' for {"data"=>"key=IAfpK, age=58..."}”
#

##
# @param s [String]
# @return [Integer]
#
def count_ages(s)
  s.split(', ').inject(0) do |memo, elem|
    key, val = *elem.split('=')

    if key == 'age' && val.to_i >= 50
      memo += 1
    end

    memo
  end
end

##
# If we are running this file directly (not required in some other file
# or in some spec file), then we print the count of the original data
# which should contain 128 age entries >= 50.
#
if __FILE__ == $0
  p $0
  p count_ages(hash['data'])
end
