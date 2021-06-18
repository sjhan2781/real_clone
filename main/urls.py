from django.urls import path, include
from . import views


app_name = 'main'
urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    # path('', views.IndexView.as_view(), name='home'),

    path('getfeed/', views.FeedView.as_view(), name='getfeed'),
    path('getfeed/<int:account_id>/', views.FeedView.as_view()),

]