# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.



ActiveRecord::Schema.define(version: 2020_10_28_060804) do


  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "nom"
    t.string "prenom"
    t.string "email"
    t.string "telephone"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jwt_blacklists", force: :cascade do |t|
    t.string "jti"
    t.datetime "exp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jti"], name: "index_jwt_blacklists_on_jti"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "lieu_depart"
    t.datetime "date_depart"
    t.datetime "heure_depart"
    t.string "lieu_retour"
    t.datetime "date_retour"
    t.datetime "heure_retour"
    t.string "num_vol"
    t.string "compagnie"
    t.integer "montant_total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tarifs", force: :cascade do |t|
    t.string "prix"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "voiture_descriptions", force: :cascade do |t|
    t.string "libelle"
    t.string "valeur"
    t.bigint "voiture_id", null: false
    t.integer "order"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["voiture_id"], name: "index_voiture_descriptions_on_voiture_id"
  end

  create_table "voitures", force: :cascade do |t|
    t.string "marque"
    t.string "model"
    t.integer "status"
    t.text "photo"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_voitures_on_category_id"
  end

  add_foreign_key "voiture_descriptions", "voitures"
end
