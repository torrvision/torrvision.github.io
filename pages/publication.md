---
layout: page
show_meta: false
title: "Publications"
subheadline: "Papers from the Torr Vision Group, newest first."
teaser:
wide: true
header:
   image_fullwidth:
permalink: "/publication/"
---

{% assign all_pubs = site.publications | sort: "year" | reverse %}

<div class="tvg-pubs">

  <div class="tvg-pubs__toolbar">
    <div class="tvg-search">
      <svg class="tvg-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.2-4.2"></path>
      </svg>
      <label class="tvg-visually-hidden" for="pub-search">Search publications</label>
      <input type="search" id="pub-search" data-pub-search
             placeholder="Search by title, author or venue&hellip;" autocomplete="off">
    </div>
    <span class="tvg-pubs__count" data-pub-count>{{ all_pubs | size }} publications</span>
  </div>

  <div data-pub-list>
    {% assign current_year = "" %}
    {% for pub in all_pubs %}
      {% if pub.year != current_year %}
        {% assign current_year = pub.year %}
        <div class="tvg-year" data-year="{{ pub.year }}">
          <span class="tvg-year__label">{{ pub.year }}</span>
        </div>
      {% endif %}

      {% include pub_item.html
          pdf_url=pub.pdf_url
          title=pub.title
          author_list=pub.author_list
          pub_in=pub.pub_in
          bib=pub.bib
          website=pub.website
          code_url=pub.code_url
          blog_post=pub.blog_post
          img_path=pub.img_path
          grant=pub.grant
      %}
    {% endfor %}

    <p class="tvg-empty" data-pub-empty hidden>No publications match that search.</p>
  </div>

</div>
