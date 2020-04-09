defmodule RealtimeFeedApiWeb.FeedView do
  use RealtimeFeedApiWeb, :view
  alias RealtimeFeedApiWeb.FeedView

  def render("index.json", %{feeds: feeds}) do
    %{data: render_many(feeds, FeedView, "feed.json")}
  end

  def render("show.json", %{feed: feed}) do
    %{data: render_one(feed, FeedView, "feed.json")}
  end

  def render("feed.json", %{feed: feed}) do
    %{id: feed.id,
      title: feed.title,
      description: feed.description}
  end
end
