# Generated by Django 3.0.6 on 2020-05-30 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('sinopsis', models.TextField(max_length=100)),
                ('fecha_estreno', models.CharField(max_length=11)),
                ('genero', models.CharField(max_length=50)),
                ('duracion', models.PositiveIntegerField()),
                ('lenguaje', models.CharField(max_length=100)),
            ],
        ),
    ]
