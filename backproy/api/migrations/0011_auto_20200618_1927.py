# Generated by Django 3.0.6 on 2020-06-18 23:27

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20200618_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pelicula',
            name='genero',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('AC', 'Accion'), ('AV', 'Aventura'), ('AN', 'Animacion')], max_length=8),
        ),
        migrations.AlterField(
            model_name='pelicula',
            name='lenguaje',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('ES', 'Español'), ('EN', 'Ingles')], max_length=5),
        ),
    ]
