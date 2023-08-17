---
layout: page
title: Posts
---

<ul class="grid blog" role="list" data-layout='50-50'>
  {% collections.posts.resources.each do |post| %}
  <li class="card border-2 flow overflow-hidden">
    <img class="ar-image" src="{{ post.data.image || 'https://placehold.co/778x438?text=Hello+Ruby'}}">
    <h3>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
    </h3>
    <p class="text-small">{{ post.data.date | date_to_string: "ordinal", "US" }}</p>
    <p>{{ post.data.description }}</p>
  </li>
  {% end %}
</ul>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
