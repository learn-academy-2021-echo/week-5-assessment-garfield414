# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def find_words(haystack, needle)
    haystack.select { |word| word.include?(needle) || word.include?(needle.upcase) }
end

p find_words(beverages_array, letter_o)
p find_words(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def find_sum(arr)
    arr.reduce(:+)
end

p find_sum(nums_array1)
p find_sum(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    
    attr_reader :current_speed
   
    def initialize(model, wheels = 2, current_speed = 0)
      @model         = model
      @wheels        = wheels
      @current_speed = current_speed
    end
  
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  
    def pedal_faster(mph)
      @current_speed += mph
    end
  
    def brake(mph)
      @current_speed -= mph
      @current_speed = (@current_speed > 0) ? @current_speed : 0
    end
  end

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

gt = Bike.new('dyno', 2, 0)

gt.pedal_faster(10)
p gt.current_speed

gt.pedal_faster(18)
p gt.current_speed

gt.brake(5)
p gt.current_speed

gt.brake(25)
p gt.current_speed