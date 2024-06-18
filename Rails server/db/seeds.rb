Diver.destroy_all
DiveSpot.destroy_all
SavedDiveSpot.destroy_all

@diego = Diver.create!(
  first_name: "Diego",
  last_name: "Gallardo",
  username: "diegog",
  email: "diego@gmail.com",
  password: "Sharkyshark"
)

@bikini_bottom = DiveSpot.create!(
  name: "Bikini Bottom",
  description: "Who lives in a pineapple under the sea?",
  price: 100,
  diver: @diego
)

@goo_lagoon = DiveSpot.create!(
  name: "Goo Lagoon",
  description: "ahhhh goo lagoon",
  price: 80,
  diver: @diego
)

SavedDiveSpot.create!(diver: @diego, dive_spot: @bikini_bottom)

puts "#{Diver.count} divers created"
puts "#{DiveSpot.count} dive spots created"
puts "#{SavedDiveSpot.count} saved dive spots created"