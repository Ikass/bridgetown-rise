---
layout: page
title: Blog Posts
page_class: posts
paginate:
  collection: posts
  per_page: 6
---

  <div class="grid" data-layout="thirds">
    <% paginator.resources.each do |post| %>
      <article class="card">     
        <header>
          <img
            slot="image"
            src="<%= post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby' %>"
            alt="Placeholder image wth the text 'Hello Ruby'."
          />
        </header>
        <div class="article-body">
          <h2><%= post.data.title %></h2>
          <%= post.data.description %>
          <small><%= date_to_string post.data.date, "ordinal" %></small>
        </div>
        <footer>
          <a href="<%= post.relative_url %>" >
            <button>Read More</button>
          </a>
        </footer>
      </article>
    <% end %>
  </div>

<% if paginator.total_pages > 1 %>
<div class="container region" id="pagination">
  <ul class="pagination">
    <!-- Display the previous page link -->
    <% if paginator.previous_page %>
    <li class="pagination-left">
      <a href="<%= paginator.previous_page_path %>">
        <button data-variant="secondary">Previous</button>
      </a>
    </li>
    <% else %>
    <li class="pagination-left">
      <button data-variant="secondary" disabled>Previous</button>
    </li>
    <% end %>
    <!-- Display the previous page number -->
    <% if paginator.previous_page %>
    <li>
      <a href="<%= paginator.previous_page_path %>">
        <button data-variant="secondary"><%= paginator.previous_page %></button>
      </a>
    </li>
    <% end %>
    <!-- Display the current page number -->
    <li>
      <button data-variant="secondary" disabled>
        <%= paginator.page %> 
      </button>
    </li>
    <!-- Display the next page number -->
    <% if paginator.next_page %>
    <li>
      <a href="<%= paginator.next_page_path %>">
        <button data-variant="secondary"><%= paginator.next_page %></button>
      </a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li class="pagination-right">
      <a href="<%= paginator.next_page_path %>">
        <button data-variant="secondary">Next</button>
      </a>
    </li>
    <% else %>
    <li class="pagination-right">
      <button data-variant="secondary" disabled>Next</button>
    </li>    
    <% end %>
  </ul>

</div>
<% end %>

<style>
#pagination button {
  font-size: var(--font-size-fluid-0);
}
</style>