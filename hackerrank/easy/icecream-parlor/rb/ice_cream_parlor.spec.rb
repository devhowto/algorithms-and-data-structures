require 'rspec'
require_relative './ice_cream_parlor_v1'

describe 'parlor(money, flavorPrices)' do
  it 'when the input is in ascending order' do
    expect(parlor(6, [1, 3, 4, 5, 6])).to eq [1, 4];
  end

  # it 'when the input is NOT sorted' do
  #   expect(iceCreamParlor(6, [3, 2, 5, 7, 1])).toEqual([3, 5]);
  # end

  # it 'when the input contain duplicates' do
  #   expect(iceCreamParlor(6, [2, 3, 5, 3, 2, 7])).toEqual([2, 4]);
  # end
end
