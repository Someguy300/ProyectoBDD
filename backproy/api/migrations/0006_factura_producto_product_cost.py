# Generated by Django 3.0.6 on 2020-07-12 16:56

from decimal import Decimal
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_merge_20200712_1256'),
    ]

    operations = [
        migrations.AddField(
            model_name='factura_producto',
            name='product_cost',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10, validators=[django.core.validators.MinValueValidator(Decimal('0.01'))]),
            preserve_default=False,
        ),
    ]
