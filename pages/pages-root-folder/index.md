---
layout: frontpage
header:
  image_fullwidth:
title: "TVG — Torr Vision Group, University of Oxford"
permalink: /index.html
homepage: true
---

<section class="tvg-section" id="research">
  <div class="tvg-container">

    <div class="tvg-section__head tvg-reveal">
      <span class="tvg-eyebrow">Research</span>
      <h2>From computer vision to AI safety and scientific discovery</h2>
      <p>
        Originally focused on computer vision, the group has branched out to other areas,
        as many deep learning techniques developed within computer vision can be applied
        more broadly. Our current application areas are:
      </p>
    </div>

    <div class="tvg-grid tvg-grid--2">

      <article class="tvg-card tvg-topic tvg-reveal">
        <span class="tvg-card__index">01</span>
        <h3>AI Safety</h3>
        <div class="tvg-topic__body">
          <p>
            As many of our advances move from theory to real-world deployment, we have become
            interested in the safe and reliable deployment of AI systems. TVG is well positioned
            to tackle this, as AI safety is easier to reason about when grounded in concrete use
            cases, combined with our experience in developing them. Key topics include
            explainability, guardrails, red teaming, security, and robustness. Our work focuses
            on two main subtasks:
          </p>
        </div>

        <ul class="tvg-topic__list">
          <li>
            <h4>Safety of foundation generative models</h4>
            <p>
              This subtask centers on large foundational models, such as LLMs and VLMs. We develop
              methods to mitigate risks associated with their outputs, including preventing harmful
              or inappropriate content generation and safeguarding against hijacking to produce
              malicious outputs. To achieve this, we are advancing theoretically sound certification
              methods to provide guarantees against unsafe behaviours. Our deployment cases include
              projects such as fighting misinformation, where we are collaborating with the BBC on
              AI tools to process news: detecting deep fakes, identifying factual inaccuracies, and
              explaining the reasoning behind these detections.
            </p>
          </li>
          <li>
            <h4>Safety of AI agents</h4>
            <p>
              AI agents will soon conduct many routine tasks currently carried out by humans. Unlike
              the previous subtask — where the focus is on generation — this work targets
              (multi-)agentic systems that leverage LLMs or VLMs as core components for planning,
              reasoning, and task execution (e.g. controlling operating systems or interacting with
              web applications). We extend safety approaches for foundational models to address the
              unique challenges posed by these action-driven systems, ensuring their safe operation
              in real-world scenarios.
            </p>
          </li>
        </ul>
      </article>

      <article class="tvg-card tvg-topic tvg-reveal">
        <span class="tvg-card__index">02</span>
        <h3>AI for Science</h3>
        <div class="tvg-topic__body">
          <p>
            We aim to close the loop of scientific discovery itself by building autonomous
            "AI Scientists" capable of accelerating progress across the natural, life, and social
            sciences. Rather than merely applying AI as a tool within existing scientific workflows,
            we are developing general-purpose AI systems that can formulate novel hypotheses, design
            and run experiments (in silico, wet-lab, or social-science settings), analyse results,
            and iteratively refine theories — essentially performing the full scientific method with
            minimal human supervision. Current directions include:
          </p>
        </div>

        <ul class="tvg-topic__list">
          <li>
            <h4>Drug discovery &amp; therapeutics</h4>
            <p>
              AI-driven drug discovery, binding-affinity prediction, de-novo molecule generation, and
              automated retrosynthesis planning, with certified safety constraints to avoid toxic or
              off-target compounds.
            </p>
          </li>
          <li>
            <h4>Materials discovery</h4>
            <p>
              Autonomous discovery of new catalysts, batteries, superconductors, and metamaterials by
              combining quantum-accurate simulations with active learning and experimental feedback loops.
            </p>
          </li>
          <li>
            <h4>Generic AI Scientist</h4>
            <p>
              Framework-agnostic systems that can be dropped into any scientific domain, learn its
              literature and experimental protocols, propose high-value experiments, and update beliefs
              in a Bayesian manner. Recent prototypes have already discovered novel algorithms and
              mathematical conjectures.
            </p>
          </li>
          <li>
            <h4>AI Social Scientist</h4>
            <p>
              Extending the same paradigm to economics, sociology, and political science: generating
              testable hypotheses about human and institutional behaviour, designing large-scale online
              experiments or analysing observational data at unprecedented scale, and surfacing
              policy-relevant insights while preserving privacy and ethical standards.
            </p>
          </li>
        </ul>
      </article>

    </div>
  </div>
</section>


<section class="tvg-section tvg-section--alt">
  <div class="tvg-container">

    <div class="tvg-section__head tvg-section__head--row tvg-reveal">
      <div>
        <span class="tvg-eyebrow">Latest</span>
        <h2>Recent news</h2>
      </div>
      <a class="tvg-btn tvg-btn--outline" href="{{ site.url }}{{ site.baseurl }}/news/">
        All news
        <span class="tvg-btn__arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>

    <ul class="tvg-news">
      {% assign news = site.news | sort: "timestamp" | reverse %}
      {% for n in news %}
        {% if n.show_on_index %}
          {% include news_item.html news_date=n.news_date title=n.title year=n.year news_content=n.news_content %}
        {% endif %}
      {% endfor %}
    </ul>

  </div>
</section>


<section class="tvg-section" id="about">
  <div class="tvg-container">

    <div class="tvg-split">
      <div class="tvg-split__text tvg-reveal">
        <span class="tvg-eyebrow">About</span>
        <h2>The group</h2>

        <p>
          <a href="{{ site.url }}{{ site.baseurl }}/about-tvg/">TVG</a> (formerly the Brookes Vision
          Group at Oxford Brookes University), now in the Department of Engineering Science at the
          University of Oxford, was formed in 2005 and moved to the University of Oxford in 2013.
          It is led by Professor Philip Torr, FREng, FRS, who was made a Turing AI World-Leading
          Researcher Fellow in 2021.
        </p>
        <p>
          The group has won major awards at most of the top machine learning and computer vision
          conferences, and has contributed to technology transfer into real-world applications,
          from autonomous cars to cybersecurity. We strongly believe that research should be
          inspired by applications that can make a positive difference in people's lives.
        </p>
        <p>
          For up-to-date news or jobs, see the
          <a href="https://www.linkedin.com/in/philip-torr-freng-frs-1085702/" target="_blank" rel="noopener">LinkedIn</a>
          and <a href="https://x.com/philiptorr" target="_blank" rel="noopener">X</a> pages of Prof. Philip Torr.
        </p>

        <div class="tvg-callout">
          <p class="tvg-callout__title">Torr's Law</p>
          <p class="tvg-callout__quote">"Any idea you have will appear on arXiv within two days."</p>
          <p class="tvg-callout__note">
            <strong>Formal statement:</strong> In a rapidly expanding research domain, the probability
            that a novel idea independently appears on arXiv approaches 1 as time from conception
            increases, with a characteristic lag of approximately 48 hours.
          </p>
          <p class="tvg-callout__note">
            <strong>Weak Torr's Law:</strong> "If you don't write it down today, someone will publish it tomorrow."
          </p>
        </div>

        <div class="tvg-hero__actions" style="margin-top: 2rem;">
          <a class="tvg-btn tvg-btn--primary" href="{{ site.url }}{{ site.baseurl }}/people/">
            Meet the group
            <span class="tvg-btn__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div class="tvg-split__media tvg-reveal">
        <div class="tvg-carousel" data-carousel aria-roledescription="carousel" aria-label="Group photos">
          <div class="tvg-carousel__viewport">
            {% include carousel_item.html active="true" image="/images/group_photos/group_photo_2026.jpg" alt="TVG group photo, 2026" %}
            {% include carousel_item.html image="/images/group_photos/tvg20.jpg" alt="TVG group photo, 2024" %}
            {% include carousel_item.html image="/images/group_photos/group_photo_1123_2021.jpg" alt="TVG group photo, 2021" %}
            {% include carousel_item.html image="/images/group_photos/oct_2018.jpg" alt="TVG group photo, 2018" %}
            {% include carousel_item.html image="/images/group_photos/june_2016.jpg" alt="TVG group photo, 2016" %}
          </div>

          <button class="tvg-carousel__nav tvg-carousel__nav--prev" type="button" data-carousel-prev aria-label="Previous photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button class="tvg-carousel__nav tvg-carousel__nav--next" type="button" data-carousel-next aria-label="Next photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div class="tvg-carousel__dots" data-carousel-dots role="tablist"></div>
        </div>

        <p class="tvg-figcaption">The group, 2016&ndash;2026.</p>
      </div>
    </div>

  </div>
</section>
