---
layout: page
title: Shop
permalink: /shop/
paginate:
  collection: products
  per_page: 4
---

<ul class="grid" role="list" data-layout='50-50'>
  {% paginator.resources.each do |product| %}
  <li class="card border-2 flow overflow-hidden">
    <img class="ar-image" src="{{ product.data.image || 'https://placehold.co/778x438?text=Hello+Ruby'}}">
    <h3>
      <a href="{{ product.relative_url }}">{{ product.data.title }}</a>
    </h3>
    <p class="text-small">{{ product.data.date | date_to_string: "ordinal", "US" }}</p>
    <p>{{ product.data.description }}</p>
  </li>
  {% end %}
</ul>

{% if paginator.total_pages > 1 %}

  <ul class="pagination">
    {% if paginator.previous_page %}
    <li>
      <a href="{{ paginator.previous_page_path }}">Previous Page</a>
    </li>
    {% end %}
    {% if paginator.next_page %}
    <li>
      <a href="{{ paginator.next_page_path }}">Next Page</a>
    </li>
    {% end %}
  </ul>
{% end %}
