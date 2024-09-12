---
layout: page
title: Blog Posts
page_class: posts
paginate:
  collection: posts
  per_page: 3
---

<!-- <section class="grid container"> -->
<br-container>
  <br-grid>
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
  </br-grid>
</br-container>  
<!-- </section> -->


<% if paginator.total_pages > 1 %>
<!-- <nav role="navigation" aria-label="Pagination Navigation"> -->
<br-container>
  <ul class="pagination">
    <% if paginator.previous_page %>
    <li class="pagination-left">
      <a href="<%= paginator.previous_page_path %>">
        <button class="outline">Previous Page</button>
      </a>
    </li>
    <% end %>
    <% if paginator.next_page %>
    <li class="pagination-right">
      <a href="<%= paginator.next_page_path %>">
        <button class="outline">Next Page</button>
      </a>
    </li>
    <% end %>
  </ul>

<!-- </nav> -->
</br-container>
<% end %>