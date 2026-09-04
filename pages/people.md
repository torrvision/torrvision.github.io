---
layout: page
show_meta: false
title: "People"
subheadline: "The researchers, students and staff of the Torr Vision Group."
teaser:
wide: true
header:
   image_fullwidth:
permalink: "/people/"
---

<section class="tvg-peoplegroup">
  <div class="tvg-group-head"><h2>Group Leader</h2></div>
  <ul class="tvg-people">
    {% include member.html name="Philip H.S. Torr" role="Professor, FREng, FRS" photo="/images/people/Phil.jpg" website="http://www.robots.ox.ac.uk/~phst/" email="mailto:philip.torr@eng.ox.ac.uk" %}
    {% include member.html name="Cassandra Warren" role="Group Administrator" %}
    {% include member.html name="Katie Bourke" role="Programme Manager" email="mailto:katie.bourke@eng.ox.ac.uk" %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Senior Researchers</h2>
    <span class="tvg-group-head__count">{{ site.senior_researchers | size }}</span>
  </div>
  <ul class="tvg-people">
    {% for sr in site.senior_researchers %}
      {% include member.html name=sr.name photo=sr.photo website=sr.website email=sr.email %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Research Fellows</h2>
    <span class="tvg-group-head__count">{{ site.postdocs | size }}</span>
  </div>
  <ul class="tvg-people">
    {% assign postdocs = site.postdocs | sort: "name" %}
    {% for pd in postdocs %}
      {% include member.html name=pd.name photo=pd.photo website=pd.website email=pd.email %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Graduate Students</h2>
    <span class="tvg-group-head__count">{{ site.dphils | size }}</span>
  </div>
  <ul class="tvg-people">
    {% assign dphils = site.dphils | sort: "year" %}
    {% for d in dphils %}
      {% include member.html name=d.name photo=d.photo website=d.website email=d.email %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Associate Members</h2>
    <span class="tvg-group-head__count">{{ site.close_members | size }}</span>
  </div>
  <ul class="tvg-people">
    {% for c in site.close_members %}
      {% include member.html name=c.name photo=c.photo website=c.website role=c.category note=c.note %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Graduated PhD Students</h2>
    <span class="tvg-group-head__count">{{ site.alumni | size }}</span>
  </div>
  <ul class="tvg-namelist">
    {% assign alumnis = site.alumni | sort: "year" %}
    {% for a in alumnis %}
      {% include collaborator.html name=a.name title=a.title email=a.email website=a.website note=a.note year=a.year %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head">
    <h2>Former Members</h2>
    <span class="tvg-group-head__count">{{ site.former_members | size }}</span>
  </div>
  <ul class="tvg-namelist">
    {% for f in site.former_members %}
      {% include collaborator.html name=f.name title=f.title email=f.email website=f.website note=f.note %}
    {% endfor %}
  </ul>
</section>

<section class="tvg-peoplegroup">
  <div class="tvg-group-head"><h2>Academic Ancestors</h2></div>
  <p class="tvg-group-note">
    <a href="https://www.robots.ox.ac.uk/~tvg/images/academic_ancestors.png" target="_blank" rel="noopener">See the full family tree</a>
  </p>
  <ul class="tvg-namelist">
    {% include collaborator.html name="Theodore Metochites" website="http://en.wikipedia.org/wiki/Theodore_Metochites" note="1315" %}
    {% include collaborator.html name="Marcilio Ficino" website="http://en.wikipedia.org/wiki/Marsilio_Ficino" note="1462" %}
    {% include collaborator.html name="Emil Warburg" website="http://en.wikipedia.org/wiki/Emil_Warburg" note="1867" %}
  </ul>
</section>
