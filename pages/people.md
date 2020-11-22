---
layout: page
show_meta: false
title: "People"
subheadline: ""
teaser: 
header:
   image_fullwidth: 
permalink: "/people/"


---

<div class="row">

<h3 class="section-title">Group Leader</h3>
<br/>
{% include member.html name="Philip H.S. Torr" title="Professor" photo="/images/people/Phil.jpg" homepage="http://www.robots.ox.ac.uk/~phst/" %}

{% include member.html name="Joanna Zapisek" photo="/images/people/JoannaZ.jpg" title="Project Manager" %}

{% include member.html name="Cassandra Warren" title="Group Administrator" %}

<hr/>

<h3 class="medium-12 section-title" >Senior Researcher</h3>
<br/>
	

{% include member.html name="Dr. Puneet Kumar Dokania" homepage="http://puneetkdokania.github.io/" %}


<hr/>

<h3 class="medium-12 section-title">Research Fellows</h3>
<br/>

{% assign postdocs = site.postdocs | sort: "name" | reverse %}
{% for pd in postdocs %}
	{% include member.html name=pd.name photo=pd.photo homepage=pd.homepage %}
{% endfor %}



<hr/>

<h3 class="medium-12 section-title">Graduate Students</h3>
<br/>

{% for d in site.dphils %}
	{% include member.html name=d.name photo=d.photo homepage=d.homepage email=d.email year=d.year%}
{% endfor %}


{% include member.html name="Christian Schroeder de Witt" photo="/images/people/ChristianSchroederDeWitt.jpg" homepage="http://www.robots.ox.ac.uk/~cs/" %}

{% include member.html name="Andrew Gambardella" photo="/images/people/AndrewGambardella.png"  homepage="http://www.robots.ox.ac.uk/~gambs/" %}

{% include member.html name="Robert Zinkov" homepage="https://www.zinkov.com/" %}

{% include member.html name="Bradley Gram-Hansen" photo="/images/people/Bradley_Gram_Hansen.png"   homepage="http://www.robots.ox.ac.uk/~bradley/" %}

{% include member.html name="Viveka Kulharia" photo="/images/people/VivekaKulharia.jpg" homepage="http://vivkul.github.io/" %}

{% include member.html name="Arnab Ghosh" photo="/images/people/ArnabGhosh.jpeg" homepage="http://arnabgho.github.io/" %}

{% include member.html name="Amartya Sanyal" photo="/images/people/AmartyaSanyal.jpg" homepage="http://amartya18x.github.io/" %}

{% include member.html name="Thomas Joy" photo="/images/people/TomJoy.png" homepage="https://thwjoy.github.io" %}

{% include member.html name="Harkirat Singh Behl" homepage="https://harkiratbehl.github.io/" %}

{% include member.html name="Feihu Zhang" homepage="http://www.feihuzhang.com/" %}

{% include member.html name="Yuge (Jimmy) Shi" photo="/images/people/JimmyShi.jpg" homepage="http://yugeten.github.io" %}

{% include member.html name="Francesco Pinto" %}

{% include member.html name="Botos Csaba" photo="/images/people/CsabaBotos.png" homepage="https://www.linkedin.com/in/botos-csaba/" %}

{% include member.html name="Jishnu Mukhoti" photo="/images/people/JishnuMukhoti.jpeg" homepage="https://omegafragger.github.io/" %}

<br/>
<hr/>

<h3 class="medium-12 section-title">Visiting Student</h3>
<br/>

	{% include member.html photo="" name="" title="" %}

	{% include member.html photo="" name="" title="" %}

	{% include member.html photo="" name="" title="" %}

	{% include member.html photo="" name="" title="" %}
</div>
