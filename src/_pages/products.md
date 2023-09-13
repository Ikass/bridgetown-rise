---
layout: page
title: Shop
permalink: /shop/
---

<ul class="grid" role="list" data-layout='50-50'>
  {% collections.products.resources.each do |product| %}
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

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
