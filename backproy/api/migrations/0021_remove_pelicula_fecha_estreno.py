# Generated by Django 3.0.6 on 2020-07-06 18:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_auto_20200706_1418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pelicula',
            name='fecha_estreno',
        ),
    ]