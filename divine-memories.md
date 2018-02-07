---
layout: default
---

<div class="row">
    <div class="col-md-8 box">
        {% include divine-memory.html %}
    </div>
       <div class="col-md-4 hidden-xs ">
       <h2 class="text-primary center">Our Popular Packages</h2>
       <div class="separator"></div>
                  {% include all-packages.html category="Popular" limit="1" IsGuided="true" %}
                  
       </div>
       </div>