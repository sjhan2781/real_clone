from django.db import models
from account import models as account_model

# Create your models here.
class Feed(models.Model):
    caption = models.TextField()
    image_url = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    
    class Meta:
        db_table = 'feed'



class Comment(models.Model):
    feed_id = models.ForeignKey(
        Feed,
        null = True,
        on_delete = models.CASCADE
    )
    author_id = models.ForeignKey(
        account_model.Account,
        null = True,
        on_delete=models.CASCADE
    )
    content = models.TextField(blank=True)


    class Meta:
        db_table = 'comment'
    # def __str__(self) -> str:
    #     return super().__str__()