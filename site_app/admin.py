from django.contrib import admin
from site_app.models import Article,Cadeau
from csvexport.actions import csvexport

# Register your models here.

@admin.register(Article)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix')
    actions = [csvexport]

    pass

@admin.register(Cadeau)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('article', 'nom')
    actions = [csvexport]
    pass
