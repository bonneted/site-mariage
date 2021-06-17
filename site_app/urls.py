from django.urls import path,re_path
from site_app import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.base import RedirectView


urlpatterns = [
    path("", views.index,name='homepage'),
    path("index", views.index,name='homepage'),
    path("liste_m", views.liste_m),

]

urlpatterns += staticfiles_urlpatterns()
