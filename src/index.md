---
title: 'Weblog'
layout: 'layouts/home.html'
---

<h2 class="main-intro">Bonjour! This is a weblog to record the Castro Family travels in France during June-July 2022. This will be our way to share our adventures with Ella, who has to stay home to work and to pack for her move back to Texas. Hopefully, other friends and family can follow along here, too!</h2>

{% set postslist = collections.posts %}
{% include "partials/postslist.html" %}
