from django.urls import path
from api.views import *


app_name = "api"
urlpatterns = [
    # path("<msg>/", Message.as_view(), name="message"),

    path("login/", Login.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    path("register/", Register.as_view(), name="register"),
]