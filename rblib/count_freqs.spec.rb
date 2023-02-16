require 'rspec'
require_relative 'count_freqs'

describe 'count_freqs(xs)' do
  context 'empty array' do
    it 'should return empty hash' do
      expect(count_freqs([])).to eq({})
    end
  end

  context 'single element array' do
    it 'should return that element with count 1' do
      expect(count_freqs([7])).to eq({ 7 => 1 })
    end
  end

  context 'single element multiple times' do
    it 'should return that element with count 1' do
      expect(count_freqs([7, 7, 7, 7])).to eq({ 7 => 4 })
    end
  end

  context 'multiple elements once each' do
    it 'should return that element with count 1' do
      expect(
        count_freqs([7, 1, 9, 5])
      ).to eq({
        7 => 1,
        1 => 1,
        9 => 1,
        5 => 1,
      })
    end
  end
end
