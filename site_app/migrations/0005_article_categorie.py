# Generated by Django 3.2.3 on 2021-07-04 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_app', '0004_auto_20210521_0027'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='categorie',
            field=models.CharField(default='Sans catégorie', max_length=200),
        ),
    ]