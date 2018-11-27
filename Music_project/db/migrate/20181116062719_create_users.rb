class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :seesion_token, null: false


      t.timestamps
    end

    add_index :users, :email
    add_index :users, :seesion_token, unique: true
  end

end
