from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *


class Message(APIView):
    def get(self, request, msg):
        return Response({"msg": msg})
