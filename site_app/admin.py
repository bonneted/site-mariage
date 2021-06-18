from django.contrib import admin
from site_app.models import Article,Cadeau

# Register your models here.

@admin.register(Article)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix')

    pass

@admin.register(Cadeau)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('article', 'nom')
    pass
