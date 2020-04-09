defmodule RealtimeFeedApiWeb.FeedChannel do
  use RealtimeFeedApiWeb, :channel

  def join("feed:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end
  def join("feeds", payload, socket) do
    {:ok, "Joined feeds", socket}
  end
  def handle_out(event, payload, socket) do
    push socket, event, payload
    {:noreply, socket}
  end
  def broadcast_create(feed) do
    payload = %{
      "id" => to_string(feed.id),
      "title" => feed.title,
      "description" => feed.description
    }
   
    RealtimeFeedApiWeb.Endpoint.broadcast("feeds", "app/FeedsPage/HAS_NEW_FEEDS", payload)
  end
  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (feed:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
