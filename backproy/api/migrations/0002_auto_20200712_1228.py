# Generated by Django 3.0.6 on 2020-07-12 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='tipo',
            field=models.CharField(choices=[('DU', 'Dulce'), ('SA', 'Salado'), ('BE', 'Bebida'), ('CO', 'Combo')], default=('DU', 'Dulce'), max_length=2),
        ),
    ]