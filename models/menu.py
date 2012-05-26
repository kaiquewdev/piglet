# -*- coding: utf-8 -*-

response.title = request.application.title()

## read more at http://dev.w3.org/html5/markup/meta.name.html
response.meta.author = 'Kaique da Silva <kaique.developer@gmail.com>'
response.meta.description = 'Polling app'
response.meta.keywords = 'questions, sort, poll'
response.meta.copyright = 'Copyright 2012'

## your http://google.com/analytics id
response.google_analytics_id = None

# Menu
response.menu = [
    (T('Home'), False, URL('default','index'), [])
]