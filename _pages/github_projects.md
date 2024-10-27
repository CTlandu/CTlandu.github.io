---
layout: page
title: Projects
permalink: /projects/
description: Some of my passionate side hustles.
nav: true
nav_order: 1
---

<div class="projects-container">
  <div class="github-projects">
    {% for project in site.data.github_projects %}
      <div class="project-card">
        <a href="{{ project.url }}" target="_blank">
          <img src="{{ project.image | relative_url }}" alt="{{ project.name }} preview" class="project-image">
        </a>
        <h2><a href="{{ project.url }}">{{ project.name }}</a></h2>
        <p>{{ project.description }}</p>
        <p><strong>Tech Stack：</strong> {{ project.technologies | join: ", " }}</p>
        <a href="{{ project.github }}" class="btn btn-sm z-depth-0" role="button">GitHub Repo</a>
      </div>
    {% endfor %}
  </div>
</div>

<h2>My GitHub Contributions</h2>

<div class="github-contributions">
  <a href="https://github.com/CTlandu" target="_blank">
    <img src="https://ghchart.rshah.org/CTlandu" alt="CTlandu's GitHub Contributions" />
  </a>
</div>

<!-- <div class="github-stats">
  <a href="https://github.com/CTlandu" target="_blank">
    <img src="https://github-readme-stats.vercel.app/api?username=CTlandu&show_icons=true&theme=default" alt="CTlandu's GitHub Stats" />
  </a>
</div> -->
