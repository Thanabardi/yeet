from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from django.views.decorators.csrf import csrf_exempt

from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from api.models import Session, Machine

from api.serializers import SessionSerializer

from datetime import datetime


class StartSession(APIView):
    """Create a session, use whenever you start a game"""
    @csrf_exempt
    def post(self, request):
        # check token
        try:
            token = Token.objects.get(key=request.data["token"])
        except Token.DoesNotExist:
            token = None
        # consider type of the session
        if token is not None:
            user = User.objects.get(id=token.user.id)
            logged_in = True
        else:
            user = None
            logged_in = False
        # other fields
        try:
            machine_code = request.data["machine_code"]
            machine = Machine.objects.get(machine_code=machine_code)
        except Machine.DoesNotExist:
            return Response({"msg": "Machine does not exist"}, HTTP_404_NOT_FOUND)
        start = datetime.now()

        session = Session.objects.create(
            logged_in = logged_in,
            machine = Machine.objects.get(machine_code=machine_code),
            start = start,
            user = user
        )
        session.save()

        return Response({"session": SessionSerializer(session).data})