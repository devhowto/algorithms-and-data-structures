require 'rspec'
require_relative './age_count_v1.rb'

describe 'single age' do
  it 'should find 0' do
    vals = 'key=IAfpK, age=48, key=WNVdi, age=44, key=jp9zt, age=49'

    input = "{'data': #{vals}}'"

    expect(count_ages(input)).to be(0)
  end

  it 'should find 2' do
    vals = 'key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=49'

    input = "{'data': #{vals}}'"

    expect(count_ages(input)).to be(2)
  end
end
