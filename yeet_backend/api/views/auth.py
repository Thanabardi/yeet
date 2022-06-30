from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

from api.serializers import UserSerializer


class Login(APIView):

    @csrf_exempt
    def post(self, request):
        username = request.data["username"]
        password = request.data["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token.key,
                "msg": "logged in"
                })
        else:
            return Response({"msg": "invalid username/password"}, HTTP_404_NOT_FOUND)

class Logout(APIView):
    
    def get(self, request):
        logout(request)
        return Response({"msg": "logged out"})

class Register(APIView):

    def is_valid(self, request):
        username = request.data["username"]
        try: 
            _ = User.objects.get(username=username)
        except User.DoesNotExist:
            return True
        return False

    @csrf_exempt
    def post(self, request):
        username = request.data["username"]
        password = request.data["password"]
        email = request.data["email"]
        if self.is_valid(request):
            new_user = User.objects.create_user(
                username = username,
                password = password,
                email = email
            )
            new_user.save()
            return Response({"msg": "account created"})
        else:
            return Response({"msg": "registration failed"}, HTTP_400_BAD_REQUEST)
