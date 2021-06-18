from django.db import models

# Create your models here.
class Account(models.Model):
    email = models.CharField(max_length=50, default="", unique=True)
    username = models.CharField(max_length=30, default="", unique=True)
    phone = models.CharField(max_length=11, default="", unique=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'account'

        constraints = [
            models.UniqueConstraint(
                fields=["email", "username", "phone"],
                name="unique information"
            )
        ]
