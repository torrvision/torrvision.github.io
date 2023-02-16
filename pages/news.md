---
layout: page
show_meta: false
title: "News"
subheadline: ""
teaser: 
header:
   image_fullwidth: 
permalink: "/news/"
---

<div class="row" style= "margin-top: 30px; margin-left: 1%">
    <div class="light-section mt-6 mb-6">
      <h3 class="section-title">News Archive</h3>
      <ul class="timeline col-md-6 off-md-6">
        {% assign news = site.news | sort: "timestamp" | reverse %}
        {% for n in news %}
          {% include news_item.html news_date=n.news_date title=n.title year=n.year news_content=n.news_content %}
        {% endfor %}
      </ul>
  </div>
</div>
