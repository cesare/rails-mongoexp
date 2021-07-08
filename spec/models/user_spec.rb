RSpec.describe User do
  describe "#save" do
    specify do
      user = User.with_session do |s|
        s.start_transaction
        user = User.create!(name: "test")
        s.commit_transaction
        user
      end

      expect(user).to be_persisted
    end
  end
end
