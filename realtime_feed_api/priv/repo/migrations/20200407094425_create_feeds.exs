defmodule RealtimeFeedApi.Repo.Migrations.CreateFeeds do
  use Ecto.Migration

  def change do
    create table(:feeds) do
      add :title, :string
      add :description, :string

      timestamps()
    end

  end
end
