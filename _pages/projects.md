---
layout: page
title: Photography
permalink: /photography/
description: A collection of some of my photography & video works
nav: true
nav_order: 2
display_categories: [Photography, Videos]
horizontal: false
---

<!-- Adding the award announcement at the top of the page -->
<h3>🎉 Recent photography award: <a href="https://www.instagram.com/p/C_twhg3oUM2/?igsh=MWt5MjVlMmJlbmZuNA==">Winner of AAP Magazine 41 B&W</a></h3>

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}

<!-- Display projects without categories -->

{%- assign sorted_projects = site.projects | sort: "importance" -%}

  <!-- Generate cards for each project -->

{% if page.horizontal -%}

  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
