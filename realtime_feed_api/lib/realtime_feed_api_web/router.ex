defmodule RealtimeFeedApiWeb.Router do
  use RealtimeFeedApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", RealtimeFeedApiWeb do
    pipe_through :api
    resources "/feeds", FeedController, except: [:new, :edit]
  end
end
