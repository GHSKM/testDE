---
layout: default
---
   {% for memory in site.divine-memories %}
<div class="row border-bottom-thick">     
        <div class="col-md-12" id="{{ include.Name | slugify }}">              dffsdfsfsf
                    <h4> <b> {{ memory.title }} </b></h4>
                     <h5>  {{ content }}</h5> 
                </div>              
            </div>
    {% endfor %}
    