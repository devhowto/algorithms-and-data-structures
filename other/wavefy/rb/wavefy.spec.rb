require_relative 'wavefy_v2'

describe 'wavefy(s)' do
  context 'empty string' do
    it 'returns empty string' do
      expect(wavefy('')).to eq('')
    end
  end

  context 'single-char string' do
    it 'lowercases the first char' do
      expect(wavefy('z')).to eq('z')
      expect(wavefy('Z')).to eq('z')
    end
  end

  context 'two-or-more-chars string' do
    it 'wavefies the string' do
      expect(wavefy('ruby on rails')).to eq('rUbY On rAiLs')

      expect(
        wavefy('good bye cruel world')
      ).to eq('gOoD ByE CrUeL WoRlD')
    end
  end
end
