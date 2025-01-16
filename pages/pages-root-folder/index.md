---

layout: frontpage
header:
  image_fullwidth:
title: "Torr Vision Group - University of Oxford"

sidebar: right

permalink: /index.html
homepage: true

---

<div class="row" style= "margin-top: 30px; margin-left: 1%">
    <div class="light-section mt-6 mb-6">
      <h3 class="section-title">Recent News</h3>
      <ul class="timeline col-md-6 off-md-6">
        {% assign news = site.news | sort: "timestamp" | reverse %}
        {% for n in news %}
          {% if n.show_on_index %}
            {% include news_item.html news_date=n.news_date title=n.title year=n.year news_content=n.news_content %}
          {% endif %}
        {% endfor %}
      </ul>
  </div>
</div>


<div class="pc dark-section" style="">
  <br>
  <h3 class="section-title"> About TVG </h3> 

  <p>
    Originally focused on computer vision, the group has branched out to other areas, 
    as many deep learning techniques developed within computer vision can be applied more broadly.
  </p>

  <p>Our current application areas include:</p>

  <ol>
    <li>
      <strong>AI Safety</strong>
      <p>
        As many of our advances move from theory to real-world deployment, 
        we have become interested in the safe and reliable deployment of AI systems. 
        TVG is well positioned to tackle this, as AI safety is easier to reason about 
        when grounded in concrete use cases, combined with our experience in developing them. 
        Key topics in AI safety include explainability, guardrails, red teaming, security, 
        and robustness. Our work focuses on two main subtasks:
      </p>

      <ul>
        <li>
          <strong>Safety of Foundation Generative Models</strong>
          <p>
            This subtask centers on large foundational models, such as LLMs and VLMs. 
            We develop methods to mitigate risks associated with their outputs, including 
            preventing harmful or inappropriate content generation and safeguarding against hijacking 
            to produce malicious outputs. To achieve this, we are advancing theoretically sound 
            certification methods to provide guarantees against unsafe behaviors. 
            Our deployment cases include projects such as fighting misinformation, 
            where we are collaborating with the BBC on AI tools to process news: detecting deep fakes, 
            identifying factual inaccuracies, and explaining the reasoning behind these detections.
          </p>
        </li>

        <li>
          <strong>Safety of AI Agents</strong>
          <p>
            AI agents will soon conduct many routine tasks currently carried out by humans. 
            Unlike the previous subtask—where the focus is on generation—this work targets 
            (multi-)agentic systems that leverage LLMs or VLMs as core components for planning, 
            reasoning, and task execution (e.g., controlling operating systems or interacting 
            with web applications). We extend safety approaches for foundational models to address 
            the unique challenges posed by these action-driven systems, ensuring their safe operation 
            in real-world scenarios.
          </p>
        </li>
      </ul>
    </li>

    <li>
      <strong>Drug Discovery</strong>
      <p>
        We have established a strategic partnership with Novo Nordisk to develop AI methods 
        that assist in drug discovery. In this domain, topics such as explainability are 
        also critically important.
      </p>
    </li>
  </ol>

  <!-- 
    The aim of the group is to engage in state of the art research into the mathematical theory 
    of computer vision and artificial intelligence, but to keep the mathematical research 
    relevant to the needs of society. A particular emphasis of the group has been on real time 
    understanding and reconstruction of the world around using mobile cameras, such as those 
    on drones, intelligent glasses or other robots. Examples of which can be seen here 
    <a href="http://www.robots.ox.ac.uk/~szheng/crfasrnndemo">CRF-RNN</a> and here 
    <a href="https://www.youtube.com/watch?v=z_TcWC7yjj0">Semantic Paint</a>.

    Members of the group have won major awards in all the main conferences in the field including 
    the International Conference on Computer Vision (ICCV), CVPR, ECCV, BMVC, NeurIPS as well as 
    various thesis awards for the students, and industrial awards such as best Knowledge Transfer 
    Partnership. We have collaborated with many exciting high tech companies including Google, 
    Sony, Microsoft, Technicolor, and Sharp.
  -->
</div>