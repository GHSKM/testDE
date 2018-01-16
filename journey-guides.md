---
layout: default
permalink: /guides/
---
 <div class="row">
    {% for guide in site.guides %}
    <div class="col-xs-12 col-sm-6 col-md-4" id="{{ include.Name | slugify }}">
          <div class="thumbnail text-center">       
            <img src= "{{ guide.thumbnail }}" alt="">
              <div class="caption">
                <h4> <b> {{ guide.title }} </b></h4>
                 <h5>  {{ guide.excerpt  }}</h5>                
                <p>{{ guide.description }}</p>
                  <p><a href="{{ guide.url }}" class="btn btn-info" role="button">View More</a> </p>
            </div>
          </div>
        </div>
{% endfor %}
</div>