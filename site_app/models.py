from django.db import models

# Create your models here.


class Article(models.Model):

    def __str__(self):
        return self.nom

    nom = models.CharField(max_length=200)
    description = models.TextField(null=True)
    prix = models.IntegerField()
    deja_paye = models.IntegerField(default=0)
    categorie = models.CharField(max_length=100,default='Autre')
    photo = models.ImageField(upload_to='images/', default='default_cadeau.jpg')

class Cadeau(models.Model):

    def __str__(self):
        return self.nom
        
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    nom = models.CharField(max_length=200)
    mot = models.TextField()
    montant =  models.IntegerField()
    totalite = models.BooleanField()

