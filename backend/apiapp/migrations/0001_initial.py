# Generated by Django 4.2.1 on 2023-08-30 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ForestInfo',
            fields=[
                ('ID', models.IntegerField(primary_key=True, serialize=False)),
                # ('AdminName', models.JSONField()),
                ('AdminName', models.CharField(max_length=255)),
                ('Name', models.CharField(max_length=255)),
                ('OpenText', models.CharField(max_length=255)),
                ('Photo', models.CharField(max_length=255)),
                ('RegionID', models.CharField(max_length=255)),
                ('RegionID1', models.CharField(max_length=255)),
                ('TypID', models.CharField(max_length=255)),
                ('TypName', models.CharField(max_length=255)),
            ],
        ),
    ]