from django.shortcuts import render

import re
from django.utils.timezone import datetime
from django.http import HttpResponse, HttpResponseRedirect
from .models import Article, Cadeau
from django.core import serializers

# articles = ['Chaussures ski de rando pour Aliénor','rando pour Damien','Skis de rando pour Aliénor','Skis de rando Damien','Robot de cuisine','Yaourtière','Plats à gratin','Catane big box','Boggle']

# prix = [329,500,330,500,500,80,80,54,15]




def home(request):
    return HttpResponse("Bonjour Ferdinand, continue à bosser!")


def index(request):

    return render(request, 'site_app/index.html')

def liste_m(request):
    articles = Article.objects.all()

    if request.method == 'POST':

        nom_article = request.POST.get('nom_article')
        nom = request.POST.get('nom')
        mot = request.POST.get('mot')
        montant = request.POST.get('montant')
        totalite = request.POST.get('totalite')
        
        article = Article.objects.get(nom=nom_article)
        article.deja_paye = article.deja_paye  + float(montant)
        article.save()

        client = Cadeau.objects.create(
                        article = article,
                        nom = nom,
                        mot = mot,
                        montant = montant,
                        totalite = totalite=='on',
                    )
        return HttpResponseRedirect("https://lydia-app.com/collect/31790-liste-de-mariage-damien-alienor/fr")

    else :

        context = {
            'articles': articles,
            }

        return render(request, 'site_app/liste_m.html',context)



