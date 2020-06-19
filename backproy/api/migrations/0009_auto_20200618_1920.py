# Generated by Django 3.0.6 on 2020-06-18 23:20

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20200618_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pelicula',
            name='genero',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('AC', 'Accion'), ('AV', 'Aventura'), ('AN', 'Animacion')], default='1,2', max_length=8, null=True),
        ),
    ]
