# Generated by Django 4.2.1 on 2023-09-18 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apiapp', '0003_alter_forestinfo_adminname_alter_forestinfo_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='forestinfo',
            name='AdminName',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='Name',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='OpenText',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='Photo',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='RegionID',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='RegionID1',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='TypID',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='forestinfo',
            name='TypName',
            field=models.CharField(default='null', max_length=255),
            preserve_default=False,
        ),
    ]
