---
layout: post
title: "Order Strings Like Numbers"
modified:
categories:
excerpt:
tags: [postgrest rails activerecord]
comments: true
share: true
date: 2014-08-31T12:01:16-05:00
---

Let's say that you have a string field in the DB that needs to order like numbers

If you do the following... maybe its not what you want

{% highlight ruby %}
Document.order(:number).pluck(:number)

=> [ "1", "10591059616", "100", "2", "22"....]
{% endhighlight %}

So the solution that you may need is use the postgres LENGTH function plus the normal order by doing something like:



{% highlight ruby %}
Document.order("LENGTH(documents.number), number").pluck(:number)

=> ["1", "2", "22", "99", "100", "10591059616"...]
{% endhighlight %}


*Tested on Rails 4.1 and Postgres 9*


