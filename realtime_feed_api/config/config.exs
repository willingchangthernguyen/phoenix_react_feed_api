# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :realtime_feed_api,
  ecto_repos: [RealtimeFeedApi.Repo]

# Configures the endpoint
config :realtime_feed_api, RealtimeFeedApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "QoVDcZr9l08Xo1arw4bYf4oVppQVQQakdXV61smYGQAOz271aHY8sK/VthiXqCi/",
  render_errors: [view: RealtimeFeedApiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: RealtimeFeedApi.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "exqekil8"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
