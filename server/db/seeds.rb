Diver.destroy_all
DiveSpot.destroy_all

@diego = Diver.create!(first_name:"diego", email:"diego@gmail.com")
@bikini_bottom = DiveSpot.create!(name:"bikini bottom", description:"Who lives in a pineapple under the sea?", price:100, diver: @diego)
@goo_lagoon = DiveSpot.create!(name:"goo lagoon", description:"ahhhh goo lagoon", price:80, diver: @diego)
@goo_lagoon = DiveSpot.create!(name:"goo lagoon", description:"ahhhh goo lagoon", price:80, diver: @diego)

puts "#{Diver.count} divers created"
puts "#{DiveSpot.count} divers created"