# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_18_155723) do
  create_table "dive_spots", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "price"
    t.integer "diver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["diver_id"], name: "index_dive_spots_on_diver_id"
  end

  create_table "divers", force: :cascade do |t|
    t.string "first_name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "username"
    t.string "last_name"
  end

  create_table "saved_dive_spots", force: :cascade do |t|
    t.integer "diver_id", null: false
    t.integer "dive_spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dive_spot_id"], name: "index_saved_dive_spots_on_dive_spot_id"
    t.index ["diver_id", "dive_spot_id"], name: "index_saved_dive_spots_on_diver_id_and_dive_spot_id", unique: true
    t.index ["diver_id"], name: "index_saved_dive_spots_on_diver_id"
  end

  add_foreign_key "dive_spots", "divers"
  add_foreign_key "saved_dive_spots", "dive_spots"
  add_foreign_key "saved_dive_spots", "divers"
end
