---
title: My first page
layout: base.njk
---

Hello World

## Blog Posts

<ul>
{% for post in collections.posts %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>

## Data from API
<ul>
{% for search in searches %}
<li>{{ search.display_query }}</li>
{% endfor %}
</ul>
