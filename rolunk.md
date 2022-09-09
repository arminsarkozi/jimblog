---
layout: default
title: Rólunk
role: about
---
# Rólunk

Ennek a lapnak az elnevezése lehetett volna "Rólam" is, mivel egyelőre egy személyé ez a lap, többen nem írnak a blogra. 😀 Na de mindegy is.

Ez a Jimedli hivatalos weboldala, itt olvasható a Jimedli blog.

A weboldal főszerkesztője és egyben készítője <a href="authors/Armin" class="good-format-link">Armin</a>. Tud és imád programozni és matekozni, van egy nyula, aki néha fenékbe harap valakit.

<span style="color: #204d9f; font-weight: 700">Elérhetőségünket</span> nem adjuk meg, de nyugodtan lehet üzenni egy GitHub issue-n keresztül, az <a href="https://github.com/arminsarkozi/jimedli/issues" class="good-format-link">alábbi linken</a>, ha bármi technikai hiba vagy kérelem merülne fel.

Ha az Impresszumot keresi, kattintson könnyedén <a href="impresszum" class="good-format-link">ide</a>, és már tölti is.

<ul class="posts">
  {% assign filtered_posts = site.posts | where: 'featured', true %}
  {% for post in filtered_posts limit: 3 %}
    <li class="posts--post" style="max-width: 300pc">
      <h2 class="posts--post--title"><a href="{{ post.url }}">{{ post.title }}</a><span class="featured-mark">Kiemelt cikk</span></h2>
      {{ post.content | strip_html | truncate: 50 }}
    </li>
  {% endfor %}
</ul>