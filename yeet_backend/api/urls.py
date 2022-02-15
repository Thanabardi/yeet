from django.urls import path
from api.views import *


app_name = "api"
urlpatterns = [
    path("login/", Login.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    path("register/", Register.as_view(), name="register"),
    path("play/start-session/", StartSession.as_view(), name="start-session"),
    path("play/get-session/", GetSession.as_view(), name="get-session"),
    path("play/sent-score/", SentScore.as_view(), name="sent-score"),
    path("play/list-score/", ListScore.as_view(), name="list-score"),
]