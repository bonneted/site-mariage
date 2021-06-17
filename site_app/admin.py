from django.contrib import admin
from site_app.models import Article,Cadeau

# Register your models here.

@admin.register(Article)
class PersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Cadeau)
class PersonAdmin(admin.ModelAdmin):
    pass