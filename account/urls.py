from django.urls import path, include
from . import views


app_name = 'account'
urlpatterns = [
    # path('', views.SignInView.as_view(), name='index'),
    path('signin/', views.SignInView.as_view(), name='signin'),
    # localhost:8000/signin/
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
]