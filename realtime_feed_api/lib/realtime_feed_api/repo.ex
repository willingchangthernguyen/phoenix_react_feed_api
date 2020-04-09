defmodule RealtimeFeedApi.Repo do
  use Ecto.Repo,
    otp_app: :realtime_feed_api,
    adapter: Ecto.Adapters.Postgres
end
