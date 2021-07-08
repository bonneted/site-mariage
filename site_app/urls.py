from django.urls import path,re_path
from site_app import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.base import RedirectView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index,name='homepage'),
    path("index", views.index,name='homepage'),
    path("liste_m", views.liste_m),

]

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)