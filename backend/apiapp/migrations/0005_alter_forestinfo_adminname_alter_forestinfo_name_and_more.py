# Generated by Django 4.2.1 on 2023-09-18 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiapp', '0004_alter_forestinfo_adminname_alter_forestinfo_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forestinfo',
            name='AdminName',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='Name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='OpenText',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='Photo',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='RegionID',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='RegionID1',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='TypID',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='TypName',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]