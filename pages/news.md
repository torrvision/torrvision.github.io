---
layout: page
show_meta: false
title: "News"
subheadline: "Awards, papers, appointments and group milestones."
teaser:
wide: true
header:
   image_fullwidth:
permalink: "/news/"
---

<ul class="tvg-news">
  {% assign news = site.news | sort: "timestamp" | reverse %}
  {% for n in news %}
    {% include news_item.html news_date=n.news_date title=n.title year=n.year news_content=n.news_content %}
  {% endfor %}
</ul>
