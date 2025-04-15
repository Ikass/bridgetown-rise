---
layout: page
title: Blog Posts
page_class: posts
paginate:
  collection: posts
  per_page: 6
---

  <div class="grid">
    <% paginator.resources.each do |post| %>
      <article>     
        <header>
          <img
            slot="image"
            src="<%= post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby' %>"
            alt="Placeholder image wth the text 'Hello Ruby'."
          />
        </header>
        <article-body>
          <h2><%= post.data.title %></h2>
          <%= post.data.description %>
          <small><%= date_to_string post.data.date, "ordinal" %></small>
        </article-body>
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
        <button class="outline">Previous </button>
      </a>
    </li>
    <% else %>
    <li class="pagination-left">
      <button class="outline" disabled>Previous</button>
    </li>
    <% end %>
    <!-- Display the previous page number -->
    <% if paginator.previous_page %>
    <li>
      <a href="<%= paginator.previous_page_path %>">
        <button class="outline"><%= paginator.previous_page %></button>
      </a>
    </li>
    <% end %>
    <!-- Display the current page number -->
    <li>
      <button class="outline" disabled>
        <%= paginator.page %> 
      </button>
    </li>
    <!-- Display the next page number -->
    <% if paginator.next_page %>
    <li>
      <a href="<%= paginator.next_page_path %>">
        <button class="outline"><%= paginator.next_page %></button>
      </a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li class="pagination-right">
      <a href="<%= paginator.next_page_path %>">
        <button class="outline">Next</button>
      </a>
    </li>
    <% else %>
    <li class="pagination-right">
      <button class="outline" disabled>Next</button>
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