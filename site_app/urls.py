from django.urls import path
from site_app import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path("site_app/index", views.index),
    path("site_app/liste_m", views.liste_m),
]

urlpatterns += staticfiles_urlpatterns()
